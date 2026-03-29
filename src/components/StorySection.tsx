import { motion } from "framer-motion";

interface Props {
  onContinue: () => void;
}

export const StorySection = ({ onContinue }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="glass-card-elevated max-w-lg w-full p-8 md:p-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-4xl mb-6"
        >
          💭
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl md:text-3xl text-foreground mb-6 italic"
        >
          A little something on my mind
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-4 text-muted-foreground font-body text-base md:text-lg leading-relaxed"
        >
          <p>
            I've really enjoyed getting to know you. Every conversation we've had, every moment we've shared — it all means more to me than you might realize.
          </p>
          <p>
            You make everything feel lighter, warmer, and a little more beautiful. And I think you deserve to know that.
          </p>
          <p className="text-foreground font-medium">
            So, I wanted to be honest with you about how I feel…
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue}
          className="btn-romantic mt-8 text-base"
        >
          Continue 🌹
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
