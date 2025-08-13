import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function SpeechToText({ onResult }) {
    const [isListening, setIsListening] = useState(false)
    const [transcript, setTranscript] = useState("")

    const recognitionRef = useRef(null)

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition
        if (!SpeechRecognition) {
            alert("Sorry, your browser does not support speech recognition.")
            return
        }

        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.lang = "en-US"
        recognition.interimResults = false
        recognition.maxAlternatives = 1

        recognition.onstart = () => setIsListening(true)
        recognition.onend = () => setIsListening(false)

        recognition.onresult = event => {
            const speechResult = event.results[0][0].transcript
            setTranscript(speechResult)
            if (typeof onResult === "function") {
                onResult(speechResult) // ✅ Call parent function with the result
              }
        }

        recognitionRef.current = recognition
    }, [])

    const startListening = () => {
        recognitionRef.current?.start()
    }

    const stopListening = () => {
        recognitionRef.current?.stop()
    }

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <Button onClick={startListening} disabled={isListening}>
                    🎙️ Start Listening
                </Button>
                {isListening && (
                    <Button variant="outline" onClick={stopListening}>
                        🛑 Stop
                    </Button>
                )}
            </div>

            <div className="p-4 border rounded bg-muted">
                <strong>Transcript:</strong>
                <p>{transcript || "Say something..."}</p>
            </div>
        </div>
    )
}
