import { useRef, useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { Eraser } from 'lucide-react';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [penColor, setPenColor] = useState('#000000');
    const [penWidth, setPenWidth] = useState(5);
    const [context, setContext] = useState(null);
    const [recognizedWord, setRecognizedWord] = useState('');
    const [matchPercentage, setMatchPercentage] = useState(null);

    const referenceWord = 'A';

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        setContext(ctx);
        drawGrid(ctx);
        drawWordOutline(ctx, referenceWord);
    }, []);

    const startDrawing = (e) => {
        const { offsetX, offsetY } = getCoordinates(e);
        context.beginPath();
        context.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = getCoordinates(e);
        context.lineTo(offsetX, offsetY);
        context.strokeStyle = penColor;
        context.lineWidth = penWidth;
        context.stroke();
    };

    const stopDrawing = () => {
        context.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(context);
        drawWordOutline(context, referenceWord);
    };

    const recognizeWord = () => {
        const canvas = canvasRef.current;
        const canvasImage = canvas.toDataURL('image/png');
        Tesseract.recognize(canvasImage, 'eng', {
            logger: (m) => console.log(m),
        }).then(({ data: { text } }) => {
            const recognized = text.trim();
            setRecognizedWord(recognized);
            calculateMatchPercentage(recognized);
        });
    };

    const calculateMatchPercentage = (recognized) => {
        const similarity = getWordSimilarity(recognized, referenceWord);
        setMatchPercentage(similarity);
    };

    const getWordSimilarity = (word1, word2) => {
        if (!word1 || !word2) return 0;
        return word1.toLowerCase().trim() === word2.toLowerCase().trim() ? 100 : 0;
    };

    const drawGrid = (ctx) => {
        const gridSize = 20;
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 0.5;
        for (let y = 0; y < ctx.canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(ctx.canvas.width, y);
            ctx.stroke();
        }
        for (let x = 0; x < ctx.canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, ctx.canvas.height);
            ctx.stroke();
        }
    };

    const drawWordOutline = (ctx, word) => {
        ctx.font = '300px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        const x = ctx.canvas.width / 2 - ctx.measureText(word).width / 2;
        const y = ctx.canvas.height / 2 + 50;
        ctx.fillText(word, x, y);
    };

    const getCoordinates = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const isTouch = e.touches ? e.touches[0] : e;
        return {
            offsetX: isTouch.clientX - rect.left,
            offsetY: isTouch.clientY - rect.top,
        };
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-lg font-semibold">Write the Word: "{referenceWord}"</h2>
            <canvas
                ref={canvasRef}
                width={350}
                height={350}
                className="border bg-white touch-none"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            />
            <div className="mt-4 flex gap-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" onClick={clearCanvas}>
                    <Eraser size={20} /> Clear
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={recognizeWord}>
                    Recognize Word
                </button>
            </div>
            {recognizedWord && (
                <p className="mt-2 text-center text-lg font-medium">Recognized: {recognizedWord}</p>
            )}
            {matchPercentage !== null && (
                <p className="text-center mt-1">Matching: {matchPercentage}%</p>
            )}
        </div>
    );
};

export default Canvas;
