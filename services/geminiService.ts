import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage, MessageRole } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing");
      throw new Error("API_KEY is required");
    }
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return genAI;
};

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    const ai = getGenAI();
    
    // Format history for the API if needed, but for single-turn or simple contexts
    // with generateContent, we might just append previous context to the prompt
    // or use chat. For this implementation, we will use a fresh generateContent 
    // to ensure the system instruction is strictly adhered to, treating history as context if needed.
    // However, the best practice for chat is ai.chats.create. Let's use that.
    
    const chatHistory = history.map(msg => ({
      role: msg.role === MessageRole.USER ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm listening, but I couldn't generate a response.";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm currently unable to connect to the model to discuss the framework. Please ensure your API key is valid.";
  }
};
