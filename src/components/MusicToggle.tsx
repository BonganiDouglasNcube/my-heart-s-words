import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://cdn.pixabay.com/audio/2024/11/28/audio_3a5e4ddc81.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:glow-rose transition-all duration-300"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
};
