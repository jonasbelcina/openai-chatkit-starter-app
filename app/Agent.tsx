"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Zap, Brain, MessageSquare, X } from 'lucide-react';


export default function Agent() {
  const [typewriterText, setTypewriterText] = useState('');
  const [showChat, setShowChat] = useState(false);
  const fullText = 'Building Automations with Character.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Load ChatKit script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@openai/chatkit@latest/dist/chatkit.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const projects = [
    {
      title: 'AI Chatbot Assistant',
      year: '2024',
      desc: 'Context-aware conversational AI with memory persistence',
      icon: <MessageSquare className="w-6 h-6" />,
      tags: ['GPT-4', 'Node.js', 'WebSocket']
    },
    {
      title: 'Telegram → Notion Bridge',
      year: '2024',
      desc: 'Seamless message capture and database sync automation',
      icon: <Zap className="w-6 h-6" />,
      tags: ['Telegram API', 'Notion API', 'Python']
    },
    {
      title: 'After-Hours Agent',
      year: '2023',
      desc: 'Autonomous email triage and response system',
      icon: <Brain className="w-6 h-6" />,
      tags: ['LangChain', 'IMAP', 'ML']
    }
  ];

  const nowItems = [
    'Experimenting with different agentic models',
    'Building a personal knowledge graph with AI embeddings',
    'Exploring RAG architectures for creative workflows'
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2C2419] font-serif">
      {/* Animated Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] noise-animation" />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1E8]/80 backdrop-blur-sm border-b border-[#2C2419]/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold tracking-tight text-xl">Jonas Noel Belcina</div>
          <div className="flex gap-6 text-sm font-sans">
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#now" className="hover:text-[#D4AF37] transition-colors">Now</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 border border-[#2C2419] text-xs font-sans tracking-wider">
              DEVELOPER • AUTOMATION ENGINEER
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl text-[#5C5347] mb-8 font-sans">
              AI systems crafted with precision and personality.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 bg-[#2C2419] text-[#F5F1E8] px-6 py-3 hover:bg-[#D4AF37] transition-all duration-300 font-sans text-sm tracking-wide">
                VIEW WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:jonasnoelbelcina@gmail.com" className="inline-flex items-center gap-2 border border-[#2C2419] px-6 py-3 hover:bg-[#2C2419] hover:text-[#F5F1E8] transition-all duration-300 font-sans text-sm tracking-wide">
                GET IN TOUCH
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-[#5C5347]/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-[#2C2419] rounded-full flex items-center justify-center">
                    <span className="text-4xl text-[#F5F1E8] font-bold">JNB</span>
                  </div>
                  <div className="text-xs font-sans tracking-widest text-[#5C5347]">
                    EST. 1995
                  </div>
                </div>
              </div>
              {/* Accent Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF4D4D] to-[#00D9FF]" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-[#5C5347] font-sans">Automations that think, learn, and deliver.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-[#FDFBF7] border border-[#2C2419]/20 p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s forwards`
              }}
            >
              <div className="absolute top-4 right-4 text-[#5C5347]/30 font-sans text-xs tracking-widest">
                {project.year}
              </div>
              
              <div className="mb-6 text-[#D4AF37]">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-[#5C5347] mb-6 font-sans text-sm leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-sans border border-[#2C2419]/20 px-2 py-1 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4D4D] to-[#00D9FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#2C2419] text-[#F5F1E8]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] bg-[#5C5347] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-[#F5F1E8] rounded-full flex items-center justify-center">
                  <span className="text-6xl text-[#2C2419] font-bold">JNB</span>
                </div>
              </div>
              {/* Halftone Effect */}
              <div className="absolute inset-0 opacity-20" 
                   style={{
                     backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                     backgroundSize: '4px 4px'
                   }}
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="inline-block px-3 py-1 border border-[#F5F1E8] text-xs font-sans tracking-wider">
              ABOUT
            </div>
            
            <h2 className="text-4xl font-bold">Jonas Noel Belcina</h2>
            
            <div className="space-y-4 text-[#C5B8A8] font-sans leading-relaxed">
            </div>

            <div className="pt-6">
              <div className="text-sm font-sans tracking-wider mb-4 text-[#D4AF37]">CONNECT</div>
              <div className="flex gap-4">
                <a href="https://github.com/jonas-nb" className="hover:text-[#D4AF37] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jonas-nb/" className="hover:text-[#D4AF37] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:jonasnoelbelcina@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section id="now" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Now</h2>
          <p className="text-[#5C5347] font-sans">What I&apos;m currently building and exploring.</p>
        </div>

        <div className="space-y-6">
          {nowItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex gap-4 items-start group"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.3}s forwards`
              }}
            >
              <div className="mt-2 w-2 h-2 bg-[#FF4D4D] rotate-45 group-hover:bg-[#00D9FF] transition-colors" />
              <p className="text-lg font-sans text-[#2C2419]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border-l-4 border-[#D4AF37] bg-[#FDFBF7]">
          <p className="text-sm font-sans text-[#5C5347] italic">
            &quot;The best automations are the ones you forget are running—until they save you hours of work.&quot;
          </p>
          <p className="text-xs font-sans text-[#5C5347] mt-2">— Jonas Noel Belcina, 2024</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2C2419]/10 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-sm font-sans text-[#5C5347] mb-2">
              Hand-coded intelligence since 1995.
            </div>
            <div className="text-xs font-sans text-[#5C5347]/60">
              © 2024 Jonas Noel Belcina. All systems operational.
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm font-sans hover:text-[#D4AF37] transition-colors">GitHub</a>
            <a href="#" className="text-sm font-sans hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <a href="#" className="text-sm font-sans hover:text-[#D4AF37] transition-colors">Email</a>
            <a href="#" className="text-sm font-sans hover:text-[#D4AF37] transition-colors">RSS</a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#2C2419] text-[#F5F1E8] rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4AF37] transition-all duration-300 z-50 group"
        aria-label="Toggle chat"
      >
        {showChat ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* ChatKit Container */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-[380px] h-[600px] bg-[#FDFBF7] border-2 border-[#2C2419] shadow-2xl z-50 overflow-hidden">
          <div className="bg-[#2C2419] text-[#F5F1E8] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
              <span className="font-sans text-sm tracking-wide">AI Assistant</span>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-[calc(100%-52px)] bg-[#F5F1E8]">
            <div 
              id="chatkit-container" 
              className="w-full h-full"
              dangerouslySetInnerHTML={{
                __html: `
                  <openai-chatkit 
                    class="w-full h-full"
                    data-api-key="YOUR_CLIENT_TOKEN_HERE"
                  ></openai-chatkit>
                `
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes noise {
          0%, 100% { 
            background-position: 0% 0%; 
          }
          10% { 
            background-position: -5% -10%; 
          }
          20% { 
            background-position: -15% 5%; 
          }
          30% { 
            background-position: 7% -25%; 
          }
          40% { 
            background-position: 20% 25%; 
          }
          50% { 
            background-position: -25% 10%; 
          }
          60% { 
            background-position: 15% -15%; 
          }
          70% { 
            background-position: 0% 15%; 
          }
          80% { 
            background-position: 25% -5%; 
          }
          90% { 
            background-position: -10% 20%; 
          }
        }
        
        .noise-animation {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 500px 500px;
          animation: noise 0.5s infinite;
        }
      `}</style>
    </div>
  );
}