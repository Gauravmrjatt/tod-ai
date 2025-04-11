'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
const WritingCanvas = ({
    placeholderLetter = 'A',
    gridSize = 20,
    language = 'zh_TW',
    initialWidth = 400,
    initialHeight = 300,
    onSuccess,
}) => {
    const { theme } = useTheme()
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [context, setContext] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [handwritingX, setHandwritingX] = useState([]);
    const [handwritingY, setHandwritingY] = useState([]);
    const [trace, setTrace] = useState([]);
    const [step, setStep] = useState([]);
    const [redoStep, setRedoStep] = useState([]);
    const [redoTrace, setRedoTrace] = useState([]);
    const [recognitionResult, setRecognitionResult] = useState(null);
    const [status, setStatus] = useState(null);
    const [canvasSize, setCanvasSize] = useState({ width: initialWidth, height: initialHeight });

    const recognitionTimeoutRef = useRef(null);
    const lineWidth = 3;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (recognitionTimeoutRef.current) {
                clearTimeout(recognitionTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (context) {
            drawGridAndPlaceholder();
        }
    }, [canvasSize, placeholderLetter, context]);

    useEffect(() => {
        if (status === 'Success' && onSuccess) {
            onSuccess();
        }
    }, [status]);

    const handleResize = () => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = width * 0.75;

        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = lineWidth;

        setCanvasSize({ width, height });
        drawGridAndPlaceholder();
        if (step.length > 0) loadFromUrl(step[step.length - 1]);
    };

    const drawGridAndPlaceholder = () => {
        if (!context) return;
        const { width, height } = canvasSize;
        context.clearRect(0, 0, width, height);

        // context.strokeStyle = '#fff';

        // context.strokeStyle = '#e0e0e0';
        context.strokeStyle = theme === 'dark' ?   '#ffffff26' : '#e0e0e0';
        context.lineWidth = 0.5;
        for (let x = 0; x <= width; x += gridSize) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }
        for (let y = 0; y <= height; y += gridSize) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }

        context.font = `${height * 0.8}px Arial`;

        context.fillStyle = theme === 'dark' ?   'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(placeholderLetter, width / 2, height / 2);

        context.strokeStyle = theme === 'dark' ?   'white' : 'black';
        context.lineWidth = lineWidth;
    };

    const getPosition = (e, touch = false) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const clientX = touch ? e.touches[0].clientX : e.clientX;
        const clientY = touch ? e.touches[0].clientY : e.clientY;
        return [
            (clientX - rect.left) * (canvasSize.width / rect.width),
            (clientY - rect.top) * (canvasSize.height / rect.height),
        ];
    };

    const startDraw = (e, touch = false) => {
        if (!context) return;
        const [x, y] = getPosition(e, touch);
        context.beginPath();
        context.moveTo(x, y);
        setHandwritingX([x]);
        setHandwritingY([y]);
        setDrawing(true);
    };

    const draw = (e, touch = false) => {
        if (!drawing || !context) return;
        const [x, y] = getPosition(e, touch);
        context.lineTo(x, y);
        context.stroke();
        setHandwritingX((prev) => [...prev, x]);
        setHandwritingY((prev) => [...prev, y]);
    };

    const endDraw = () => {
        setDrawing(false);
        const stroke = [handwritingX, handwritingY, []];
        const newTrace = [...trace, stroke];
        setTrace(newTrace);
        setStep((prev) => [...prev, canvasRef.current.toDataURL()]);
        if (recognitionTimeoutRef.current) clearTimeout(recognitionTimeoutRef.current);
        recognitionTimeoutRef.current = setTimeout(() => recognize(newTrace), 500);
    };

    const erase = () => {
        drawGridAndPlaceholder();
        setStep([]);
        setRedoStep([]);
        setRedoTrace([]);
        setTrace([]);
        setRecognitionResult(null);
        setStatus(null);
        if (recognitionTimeoutRef.current) clearTimeout(recognitionTimeoutRef.current);
    };

    const recognize = (traceData) => {
        const data = JSON.stringify({
            options: 'enable_pre_space',
            requests: [
                {
                    writing_guide: {
                        writing_area_width: canvasSize.width,
                        writing_area_height: canvasSize.height,
                    },
                    ink: traceData,
                    language: language,
                },
            ],
        });

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.length === 1) {
                        setRecognitionResult('Error: ' + response[0]);
                        setStatus('Fail');
                    } else {
                        const results = response[1][0][1];
                        setRecognitionResult(results.join(', '));
                        if (results.includes(placeholderLetter)) {
                            setStatus('Success');
                        } else {
                            setStatus('Fail');
                        }
                    }
                } else {
                    setRecognitionResult('Recognition error');
                    setStatus('Fail');
                }
            }
        };

        xhr.open('POST', 'https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(data);
    };

    const loadFromUrl = (url) => {
        const img = new Image();
        img.onload = () => {
            drawGridAndPlaceholder();
            context.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
        };
        img.src = url;
    };

    return (
        <div ref={containerRef} className="w-full" >
            <canvas
                ref={canvasRef}
                className="w-full rounded border shadow-md touch-none"
                onMouseDown={(e) => startDraw(e)}
                onMouseMove={(e) => draw(e)}
                onMouseUp={endDraw}
                onMouseLeave={() => setDrawing(false)}
                onTouchStart={(e) => startDraw(e, true)}
                onTouchMove={(e) => draw(e, true)}
                onTouchEnd={endDraw}
            />
            <div className="flex justify-center gap-4 mt-4">
                <button onClick={erase} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                    Erase
                </button>
            </div>

            {status && (
                <div
                    className={`text-center mt-4 font-semibold ${
                        status === 'Success' ? 'text-green-600' : 'text-red-500'
                    }`}
                >
                    {status}
                </div>
            )}
        </div>
    );
};

export default WritingCanvas;
