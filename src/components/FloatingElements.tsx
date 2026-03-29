import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const EMOJIS = ["🌸", "💗", "✨", "🌷", "💕", "🩷", "🌹", "💫"];

export const FloatingElements = ({ intensity = "normal" }: { intensity?: "subtle" | "normal" | "celebration" }) => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const count = intensity === "celebration" ? 25 : intensity === "normal" ? 12 : 6;
    const generated: FloatingItem[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 14 + Math.random() * 16,
    }));
    setItems(generated);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute opacity-40"
          style={{
            left: `${item.left}%`,
            bottom: "-10%",
            fontSize: `${item.size}px`,
            animation: `float-up ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};
