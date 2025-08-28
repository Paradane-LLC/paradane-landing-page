"use client"

import { useEffect } from 'react';

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitChatbot = () => {
      // Create script element
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import Chatbot from 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
        Chatbot.init({
          chatflowid: '38ac8068-83a2-4019-a30f-0071e99566f3',
          apiHost: 'https://cloud.flowiseai.com',
          theme: {
            button: {
              backgroundColor: '#00489c',
              right: 20,
              bottom: 20,
              size: 64,
              dragAndDrop: false,
              iconColor: 'white',
            },
            tooltip: {
                showTooltip: true,
                tooltipMessage: "Hello! Let's talk?",
                tooltipBackgroundColor: '#00489c',
                tooltipTextColor: 'white',
                tooltipFontSize: 16,
            },
            chatWindow: {
                showTitle: true,
                title: 'AI Chatbot',
                welcomeMessage: 'Hello, what would you like to ask?',
                height: 500,
                width: 400,
                starterPrompts: ['What services do you provide?', 'How can I contact to get started?'],
                botMessage: {
                    backgroundColor: '#fafafa',
                    textColor: '#303235',
                    showAvatar: false,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
                },
                userMessage: {
                    backgroundColor: '#00489c',
                    textColor: '#ffffff',
                    showAvatar: false,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
                },
                textInput: {
                    placeholder: 'What is on your mind?',
                    backgroundColor: '#ffffff',
                    textColor: '#303235',
                    sendButtonColor: '#00489c',
                    maxChars: 100,
                    maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 100 characters.',
                    autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                    sendMessageSound: true,
                    receiveMessageSound: false,
                },
                footer: {
                    textColor: '#00489c',
                    text: 'AI Chatbot by',
                    company: 'Paradane',
                    companyLink: 'https://paradane.com',
                },
            },
          },
        });
      `;
      
      document.body.appendChild(script);
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadAndInitChatbot, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}

export default WidgetProvider;