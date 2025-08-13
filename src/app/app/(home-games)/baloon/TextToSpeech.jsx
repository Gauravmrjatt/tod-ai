import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
export default function TextToSpeech({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState("")

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis

      const loadVoices = () => {
        const availableVoices = synth.getVoices()
        setVoices(availableVoices)

        // Search for 'Google हिन्दी' (hi-IN) as the default voice
        const defaultVoice = availableVoices.find(
          voice =>
            voice.name.toLowerCase().includes("google हिन्दी") ||
            voice.lang === "hi-IN"
        )

        setSelectedVoice(defaultVoice?.name || availableVoices[0]?.name)
      }

      // On some browsers, voices load async
      if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices
      }

      loadVoices()
    }
  }, [])

  const speak = () => {
    if ("speechSynthesis" in window && selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(text)
      const voice = voices.find(v => v.name === selectedVoice)

      if (voice) utterance.voice = voice

      utterance.rate = 0.7// Normal speed
      utterance.pitch = 1 // Normal tone
      utterance.volume = 1 // Full volume


      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    } else {
      alert("Sorry, your browser does not support text-to-speech.")
    }
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Button onClick={speak} disabled={isSpeaking}>
          🔊 Speak
        </Button>
        {isSpeaking && (
          <Button variant="outline" onClick={stop}>
            🛑 Stop
          </Button>
        )}
      </div>

  
    </div>
  )
}
