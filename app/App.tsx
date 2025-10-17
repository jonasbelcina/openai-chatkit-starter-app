"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeroText from "@/components/HeroText";
import { ThemeToggle } from '@/components/ThemeToggle';
// import ChatBotForm from "@/components/ChatBotForm";"@/components/ChatBotForm";
import "@n8n/chat/style.css";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
		
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center gap-12 px-6 py-6 pt-20 max-w-7xl mx-auto relative grain-overlay overflow-hidden transition-colors duration-300">
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red rounded-full blur-3xl"></div>
      </div> */}

      <div className="w-1/2">
        <HeroText />
      </div>
      {/* <div className="mx-auto w-full max-w-5xl"> */}
      <div className="w-1/2 relative">
				<div className="absolute top-0 right-0">
					<ThemeToggle />
				</div>
        {/* <ChatBotForm theme={scheme} /> */}
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
