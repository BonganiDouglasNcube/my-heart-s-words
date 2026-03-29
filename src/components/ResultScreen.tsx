import { motion } from "framer-motion";
import { FloatingElements } from "./FloatingElements";

type Response = "yes" | "time" | "no";

interface Props {
  response: Response;
  onRestart: () => void;
}

const YesResult = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, type: "spring" }}
    className="glass-card-elevated max-w-lg w-full p-8 md:p-14 text-center relative overflow-hidden"
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-6xl mb-6"
    >
      💖
    </motion.div>

    <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 italic">
      You just made me the
      <br />
      <span className="text-romantic">happiest person</span>
    </h2>

    <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
      I can't stop smiling right now. Thank you for saying yes — I promise to treasure this, and you, every single day. 🌹
    </p>

    <div className="flex justify-center gap-2 text-2xl mt-6">
      {["🧸", "🌸", "💌", "🍬", "⭐"].map((e, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
        >
          {e}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const TimeResult = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card-elevated max-w-lg w-full p-8 md:p-14 text-center"
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-5xl mb-6"
    >
      🌷
    </motion.div>

    <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 italic">
      Take all the time you need
    </h2>

    <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
      There's absolutely no rush. The fact that you're even thinking about it means the world to me. I'll be right here, and nothing changes between us. 🤍
    </p>

    <div className="flex justify-center gap-2 text-xl mt-6 opacity-60">
      {["🌸", "🕊️", "✨"].map((e, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
        >
          {e}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const NoResult = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card-elevated max-w-lg w-full p-8 md:p-14 text-center"
  >
    <div className="text-5xl mb-6">🤍</div>

    <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 italic">
      Thank you for being honest
    </h2>

    <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
      I appreciate your honesty more than you know. It took courage to respond, and I respect that completely. I'm glad I told you, and I hope this doesn't change anything between us. You're still someone I truly value. 🌿
    </p>
  </motion.div>
);

export const ResultScreen = ({ response, onRestart }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10"
    >
      {response === "yes" && <FloatingElements intensity="celebration" />}

      {response === "yes" && <YesResult />}
      {response === "time" && <TimeResult />}
      {response === "no" && <NoResult />}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
        onClick={onRestart}
        className="mt-8 font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
      >
        Start over ✨
      </motion.button>
    </motion.div>
  );
};
