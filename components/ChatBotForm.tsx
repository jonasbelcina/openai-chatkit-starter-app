'use client';

import { useEffect, useState } from 'react';
import { createChat } from '@n8n/chat';

export default function ChatBotForm({ theme }: { theme: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const webhookUrl = 'https://lucasfather.online/webhook/db24ec42-ade5-4d7e-9291-41d3895f23f9/chat';

      const chatContainer = document.querySelector('#n8n-chat');
      if (chatContainer) {
          while (chatContainer.firstChild) {
              chatContainer.removeChild(chatContainer.firstChild);
          }

          createChat({
              webhookUrl,
              target: '#n8n-chat',
              mode: 'fullscreen',
              enableStreaming: true,
          });
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    // Render a placeholder on the server and initial client render
    return <div style={{ height: '500px' }} />;
  }

  return <div id="n8n-chat" style={{ height: '500px' }} />;
}
