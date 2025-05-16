import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;


export const initGemini = () => {
  if (!apiKey) {
    throw new Error('Gemini API key is not set. Please add it to your .env file as VITE_GEMINI_API_KEY');
  }

  return new GoogleGenerativeAI(apiKey);
};


export const getGeminiModel = (): GenerativeModel => {
  const genAI = initGemini();
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
};


export const streamChatResponse = async (
  prompt: string,
  onResponseUpdate: (text: string) => void,
  onComplete: () => void
) => {
  try {
    const model = getGeminiModel();
    const result = await model.generateContentStream(prompt);

    let fullResponse = '';
    
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullResponse += chunkText;
      onResponseUpdate(fullResponse);
    }
    
    onComplete();
    return fullResponse;
  } catch (error) {
    console.error('Error streaming response from Gemini:', error);
    throw error;
  }
};


export const getChatResponse = async (prompt: string): Promise<string> => {
  try {
    const model = getGeminiModel();
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error getting response from Gemini:', error);
    throw error;
  }
}; 