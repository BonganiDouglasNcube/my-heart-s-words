import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { ConfessionSection } from "@/components/ConfessionSection";
import { ResultScreen } from "@/components/ResultScreen";
import { FloatingElements } from "@/components/FloatingElements";
import { MusicToggle } from "@/components/MusicToggle";

type Screen = "loading" | "hero" | "story" | "confession" | "result";
type Response = "yes" | "time" | "no";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("loading");
  const [response, setResponse] = useState<Response | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setScreen("hero"), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleResponse = (r: Response) => {
    setResponse(r);
    setScreen("result");
  };

  const handleRestart = () => {
    setResponse(null);
    setScreen("hero");
  };

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <MusicToggle />
      {screen !== "loading" && (
        <FloatingElements intensity={screen === "result" && response === "yes" ? "celebration" : "subtle"} />
      )}

      <AnimatePresence mode="wait">
        {screen === "loading" && <LoadingScreen key="loading" />}
        {screen === "hero" && <HeroSection key="hero" onContinue={() => setScreen("story")} />}
        {screen === "story" && <StorySection key="story" onContinue={() => setScreen("confession")} />}
        {screen === "confession" && <ConfessionSection key="confession" onResponse={handleResponse} />}
        {screen === "result" && response && (
          <ResultScreen key="result" response={response} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
