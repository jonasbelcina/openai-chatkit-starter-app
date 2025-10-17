import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
	{
    label: "I want to see your automations.",
    prompt: "I want to see your automations.",
    icon: "circle-question",
  },
  {
    label: "I want to book a meeting.",
    prompt: "I want to book a meeting.",
    icon: "calendar",
  }
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "👋 Hi there! I’m your AI assistant from JiwonAI. I can show you how automation can save your business time and money — or even give you a quick demo of our chatbots and workflow automations.";
