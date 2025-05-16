# SolBlaze AI Assistant

This project includes an AI assistant powered by Google's Gemini 2.0 Flash model, which can provide information about Solana, blockchain, and the SolBlaze dashboard.

## Setup

To use the AI assistant, you need to set up your Gemini API key:

1. Get a Gemini API key from the [Google AI Studio](https://ai.google.dev/).
2. Create a `.env` file in the root of your project.
3. Add your API key to the `.env` file:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

## Features

- **AI-powered assistance**: Get answers to questions about Solana, blockchain, and the SolBlaze dashboard.
- **Streaming responses**: The AI responses stream in real-time as they're generated.
- **Markdown support**: The assistant can format responses using Markdown for better readability.
- **Dark mode support**: The UI adapts to your preferred theme.

## Using the Assistant

The AI assistant appears as a chat button in the bottom-right corner of the application. Click on it to open the chat interface, where you can:

1. Type your question and press Enter or click the send button.
2. Get a streaming response from the AI.
3. Ask follow-up questions or start a new conversation.
4. Clear the chat history with the clear button.

## Implementation Details

The AI assistant is implemented using:

- Google's Generative AI SDK for JavaScript
- React for the UI
- Environment variables for secure API key storage
- Streaming responses for a better user experience

## Limitations

- The assistant requires an internet connection to function.
- It has knowledge limitations based on the Gemini model's training data.
- The free tier of Gemini API has rate limits that might affect usage.

## Troubleshooting

If you encounter issues with the AI assistant:

1. Check that your API key is correctly set up in the `.env` file.
2. Ensure your internet connection is stable.
3. If you're hitting rate limits, consider upgrading your Gemini API plan.
4. Check the browser console for any error messages that might provide more information. 