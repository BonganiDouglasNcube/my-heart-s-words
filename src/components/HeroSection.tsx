import { motion } from "framer-motion";

interface Props {
  onContinue: () => void;
}

export const HeroSection = ({ onContinue }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="text-6xl mb-6"
      >
        🌷
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="font-display text-4xl md:text-6xl text-foreground mb-4 italic"
      >
        Hey you
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="font-body text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-12"
      >
        There's something I've been wanting to tell you…
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="btn-romantic text-base md:text-lg"
      >
        Open my heart 💌
      </motion.button>
    </motion.div>
  );
};
