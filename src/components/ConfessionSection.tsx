import { motion } from "framer-motion";

type Response = "yes" | "time" | "no";

interface Props {
  onResponse: (r: Response) => void;
}

export const ConfessionSection = ({ onResponse }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="glass-card-elevated max-w-lg w-full p-8 md:p-14 relative overflow-hidden"
      >
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 text-2xl opacity-30 animate-gentle-float">🌸</div>
        <div className="absolute top-4 right-4 text-2xl opacity-30 animate-gentle-float" style={{ animationDelay: "1s" }}>✨</div>
        <div className="absolute bottom-4 left-4 text-2xl opacity-30 animate-gentle-float" style={{ animationDelay: "2s" }}>💫</div>
        <div className="absolute bottom-4 right-4 text-2xl opacity-30 animate-gentle-float" style={{ animationDelay: "0.5s" }}>🌷</div>

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-6"
        >
          💗
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl md:text-4xl text-foreground mb-4 italic leading-snug"
        >
          Would you like to be
          <br />
          <span className="text-romantic text-3xl md:text-5xl">my girlfriend?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-body text-muted-foreground text-base md:text-lg mb-10 max-w-sm mx-auto"
        >
          No pressure at all. However you feel, I'll respect it completely. I just had to ask. 🤍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onResponse("yes")}
            className="btn-yes text-base md:text-lg"
          >
            Yes 💖
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onResponse("time")}
            className="btn-time text-base"
          >
            I need a little time 🌷
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onResponse("no")}
            className="btn-no text-base"
          >
            No, but thank you 🤍
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
