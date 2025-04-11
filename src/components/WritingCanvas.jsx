// import { useRef, useState, useEffect } from 'react';
// import { ocr as paddleOCR, load } from '@paddlejs-models/ocr';
// import { Eraser } from 'lucide-react';

// const Canvas = () => {
//     const canvasRef = useRef(null);
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [penColor, setPenColor] = useState('#000000');
//     const [penWidth, setPenWidth] = useState(5);
//     const [context, setContext] = useState(null);
//     const [recognizedWord, setRecognizedWord] = useState('');
//     const [matchPercentage, setMatchPercentage] = useState(null);
//     const [ocrLoaded, setOcrLoaded] = useState(false);

//     const referenceWord = 'B';

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         ctx.lineJoin = 'round';
//         ctx.lineCap = 'round';
//         setContext(ctx);
//         drawGrid(ctx);
//         drawWordOutline(ctx, referenceWord);

//         // Load PaddleOCR model
//         load().then(() => setOcrLoaded(true));
//     }, []);

//     const startDrawing = (e) => {
//         const { offsetX, offsetY } = getCoordinates(e);
//         context.beginPath();
//         context.moveTo(offsetX, offsetY);
//         setIsDrawing(true);
//     };

//     const draw = (e) => {
//         if (!isDrawing) return;
//         const { offsetX, offsetY } = getCoordinates(e);
//         context.lineTo(offsetX, offsetY);
//         context.strokeStyle = penColor;
//         context.lineWidth = penWidth;
//         context.stroke();
//     };

//     const stopDrawing = () => {
//         context.closePath();
//         setIsDrawing(false);
//     };

//     const clearCanvas = () => {
//         const canvas = canvasRef.current;
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         drawGrid(context);
//         drawWordOutline(context, referenceWord);
//         setRecognizedWord('');
//         setMatchPercentage(null);
//     };

//     const recognizeWord = async () => {
//         if (!ocrLoaded) {
//             alert('OCR model is not loaded yet.');
//             return;
//         }

//         const canvas = canvasRef.current;
//         const image = new Image();
//         image.src = canvas.toDataURL('image/png');

//         image.onload = async () => {
//             try {
//                 const results = await paddleOCR(image);
//                 const recognized = results.map(item => item.label).join(' ').trim();
//                 setRecognizedWord(recognized);
//                 calculateMatchPercentage(recognized);
//             } catch (error) {
//                 console.error('OCR Error:', error);
//                 setRecognizedWord('Error recognizing text');
//             }
//         };
//     };

//     const calculateMatchPercentage = (recognized) => {
//         const similarity = getWordSimilarity(recognized, referenceWord);
//         setMatchPercentage(similarity);
//     };

//     const getWordSimilarity = (word1, word2) => {
//         if (!word1 || !word2) return 0;
//         return word1.toLowerCase().trim() === word2.toLowerCase().trim() ? 100 : 0;
//     };

//     const drawGrid = (ctx) => {
//         const gridSize = 20;
//         ctx.strokeStyle = '#ddd';
//         ctx.lineWidth = 0.5;
//         for (let y = 0; y < ctx.canvas.height; y += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(0, y);
//             ctx.lineTo(ctx.canvas.width, y);
//             ctx.stroke();
//         }
//         for (let x = 0; x < ctx.canvas.width; x += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(x, 0);
//             ctx.lineTo(x, ctx.canvas.height);
//             ctx.stroke();
//         }
//     };

//     const drawWordOutline = (ctx, word) => {
//         ctx.font = '300px Arial';
//         ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//         const x = ctx.canvas.width / 2 - ctx.measureText(word).width / 2;
//         const y = ctx.canvas.height / 2 + 50;
//         ctx.fillText(word, x, y);
//     };

//     const getCoordinates = (e) => {
//         const canvas = canvasRef.current;
//         const rect = canvas.getBoundingClientRect();
//         const isTouch = e.touches ? e.touches[0] : e;
//         return {
//             offsetX: isTouch.clientX - rect.left,
//             offsetY: isTouch.clientY - rect.top,
//         };
//     };

//     return (
//         <div className="flex flex-col items-center p-4">
//             <h2 className="text-lg font-semibold">Write the Word: "{referenceWord}"</h2>
//             <canvas
//                 ref={canvasRef}
//                 width={350}
//                 height={350}
//                 className="border bg-white touch-none"
//                 onMouseDown={startDrawing}
//                 onMouseMove={draw}
//                 onMouseUp={stopDrawing}
//                 onMouseLeave={stopDrawing}
//                 onTouchStart={startDrawing}
//                 onTouchMove={draw}
//                 onTouchEnd={stopDrawing}
//             />
//             <div className="mt-4 flex gap-3">
//                 <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" onClick={clearCanvas}>
//                     <Eraser size={20} /> Clear
//                 </button>
//                 <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={recognizeWord}>
//                     Recognize Word
//                 </button>
//             </div>
//             {recognizedWord && (
//                 <p className="mt-2 text-center text-lg font-medium">Recognized: {recognizedWord}</p>
//             )}
//             {matchPercentage !== null && (
//                 <p className="text-center mt-1">Matching: {matchPercentage}%</p>
//             )}
//         </div>
//     );
// };

// export default Canvas;

// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import { Eraser } from 'lucide-react';

// const Canvas = () => {
//     const canvasRef = useRef(null);
//     const ocrRef = useRef(null); // To store loaded OCR function
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [penColor, setPenColor] = useState('#000000');
//     const [penWidth, setPenWidth] = useState(5);
//     const [context, setContext] = useState(null);
//     const [recognizedWord, setRecognizedWord] = useState('');
//     const [matchPercentage, setMatchPercentage] = useState(null);
//     const [ocrLoaded, setOcrLoaded] = useState(false);

//     const referenceWord = 'B';

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         ctx.lineJoin = 'round';
//         ctx.lineCap = 'round';
//         setContext(ctx);
//         drawGrid(ctx);
//         drawWordOutline(ctx, referenceWord);

//         if (typeof window !== 'undefined') {
//             import('@paddlejs-models/ocr').then(mod => {
//                 mod.load().then(() => {
//                     ocrRef.current = mod.ocr;
//                     setOcrLoaded(true);
//                 });
//             });
//         }
//     }, []);

//     const startDrawing = (e) => {
//         const { offsetX, offsetY } = getCoordinates(e);
//         context.beginPath();
//         context.moveTo(offsetX, offsetY);
//         setIsDrawing(true);
//     };

//     const draw = (e) => {
//         if (!isDrawing) return;
//         const { offsetX, offsetY } = getCoordinates(e);
//         context.lineTo(offsetX, offsetY);
//         context.strokeStyle = penColor;
//         context.lineWidth = penWidth;
//         context.stroke();
//     };

//     const stopDrawing = () => {
//         context.closePath();
//         setIsDrawing(false);
//     };

//     const clearCanvas = () => {
//         const canvas = canvasRef.current;
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         drawGrid(context);
//         drawWordOutline(context, referenceWord);
//         setRecognizedWord('');
//         setMatchPercentage(null);
//     };

//     const recognizeWord = () => {
//         if (!ocrLoaded || !ocrRef.current) {
//             alert('OCR model not loaded');
//             return;
//         }

//         const canvas = canvasRef.current;
//         const image = new Image();
//         image.src = canvas.toDataURL('image/png');

//         image.onload = async () => {
//             try {
//                 const result = await ocrRef.current(image);
//                 const recognized = result.map(item => item.label).join(' ').trim();
//                 setRecognizedWord(recognized);
//                 calculateMatchPercentage(recognized);
//             } catch (error) {
//                 console.error('OCR Error:', error);
//                 setRecognizedWord('Error recognizing text');
//             }
//         };
//     };

//     const calculateMatchPercentage = (recognized) => {
//         const similarity = getWordSimilarity(recognized, referenceWord);
//         setMatchPercentage(similarity);
//     };

//     const getWordSimilarity = (word1, word2) => {
//         if (!word1 || !word2) return 0;
//         return word1.toLowerCase().trim() === word2.toLowerCase().trim() ? 100 : 0;
//     };

//     const drawGrid = (ctx) => {
//         const gridSize = 20;
//         ctx.strokeStyle = '#ddd';
//         ctx.lineWidth = 0.5;
//         for (let y = 0; y < ctx.canvas.height; y += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(0, y);
//             ctx.lineTo(ctx.canvas.width, y);
//             ctx.stroke();
//         }
//         for (let x = 0; x < ctx.canvas.width; x += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(x, 0);
//             ctx.lineTo(x, ctx.canvas.height);
//             ctx.stroke();
//         }
//     };

//     const drawWordOutline = (ctx, word) => {
//         ctx.font = '300px Arial';
//         ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//         const x = ctx.canvas.width / 2 - ctx.measureText(word).width / 2;
//         const y = ctx.canvas.height / 2 + 50;
//         ctx.fillText(word, x, y);
//     };

//     const getCoordinates = (e) => {
//         const canvas = canvasRef.current;
//         const rect = canvas.getBoundingClientRect();
//         const isTouch = e.touches ? e.touches[0] : e;
//         return {
//             offsetX: isTouch.clientX - rect.left,
//             offsetY: isTouch.clientY - rect.top,
//         };
//     };

//     return (
//         <div className="flex flex-col items-center p-4">
//             <h2 className="text-lg font-semibold">Write the Word: "{referenceWord}"</h2>
//             <canvas
//                 ref={canvasRef}
//                 width={350}
//                 height={350}
//                 className="border bg-white touch-none"
//                 onMouseDown={startDrawing}
//                 onMouseMove={draw}
//                 onMouseUp={stopDrawing}
//                 onMouseLeave={stopDrawing}
//                 onTouchStart={startDrawing}
//                 onTouchMove={draw}
//                 onTouchEnd={stopDrawing}
//             />
//             <div className="mt-4 flex gap-3">
//                 <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" onClick={clearCanvas}>
//                     <Eraser size={20} /> Clear
//                 </button>
//                 <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={recognizeWord}>
//                     Recognize Word
//                 </button>
//             </div>
//             {recognizedWord && (
//                 <p className="mt-2 text-center text-lg font-medium">Recognized: {recognizedWord}</p>
//             )}
//             {matchPercentage !== null && (
//                 <p className="text-center mt-1">Matching: {matchPercentage}%</p>
//             )}
//         </div>
//     );
// };

// export default Canvas;

'use client';
import { useRef, useState, useEffect } from 'react';
import { Eraser } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

const Canvas = () => {
    const canvasRef = useRef(null);
    const modelRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [penColor, setPenColor] = useState('#000000');
    const [penWidth, setPenWidth] = useState(5);
    const [context, setContext] = useState(null);
    const [recognizedWord, setRecognizedWord] = useState('');
    const [matchPercentage, setMatchPercentage] = useState(null);
    const [modelLoaded, setModelLoaded] = useState(false);

    const referenceWord = 'B';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        setContext(ctx);
        drawGrid(ctx);
        drawWordOutline(ctx, referenceWord);

        // Load TensorFlow.js model
        tf.loadLayersModel('https://your-hosted-model-path/model.json')
            .then(model => {
                modelRef.current = model;
                setModelLoaded(true);
            })
            .catch(err => console.error('Model loading error:', err));
    }, []);

    // [Keep all the drawing-related functions unchanged: startDrawing, draw, stopDrawing, clearCanvas]
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
        setRecognizedWord('');
        setMatchPercentage(null);
    };

    const preprocessCanvas = (canvas) => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Resize and convert to grayscale
        tempCanvas.width = 28;
        tempCanvas.height = 28;
        tempCtx.drawImage(canvas, 0, 0, 28, 28);

        // Invert colors and normalize
        const imgData = tempCtx.getImageData(0, 0, 28, 28);
        const data = new Float32Array(28 * 28);

        for (let i = 0; i < imgData.data.length; i += 4) {
            const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            data[i / 4] = (255 - avg) / 255; // Invert and normalize
        }

        return tf.tensor(data).reshape([1, 28, 28, 1]);
    };

    const recognizeWord = async () => {
        if (!modelLoaded || !modelRef.current) {
            alert('Model not loaded yet!');
            return;
        }

        const canvas = canvasRef.current;
        const inputTensor = preprocessCanvas(canvas);
        const prediction = modelRef.current.predict(inputTensor);
        const predictedClass = prediction.argMax(1).dataSync()[0];
        const confidence = prediction.max().dataSync()[0] * 100;

        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const recognized = characters[predictedClass];

        setRecognizedWord(recognized);
        setMatchPercentage(recognized === referenceWord ? Math.round(confidence) : 0);
    };

    // [Keep helper functions: drawGrid, drawWordOutline, getCoordinates]
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
            <h2 className="text-lg font-semibold">Write the Letter: "{referenceWord}"</h2>
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
                    Check Letter
                </button>
            </div>
            {recognizedWord && (
                <div className="mt-4 text-center">
                    <p className="text-lg font-medium">
                        Recognized: {recognizedWord}
                        {recognizedWord === referenceWord ? ' 🎉' : ' ❌'}
                    </p>
                    <p className="text-sm text-gray-600">
                        Confidence: {Math.round(matchPercentage)}%
                    </p>
                    {recognizedWord !== referenceWord && (
                        <p className="text-red-500 mt-2">Try again! Remember to follow the outline</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Canvas;