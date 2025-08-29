"use client"

import { useEffect } from 'react';

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitChatbot = () => {
      // Create script element
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":"Chat with us"};
            (function(d,t) {
                var BASE_URL="https://support.paradane.com";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                window.chatwootSDK.run({
                    websiteToken: 'piUDZg9xrTfxjPsqQ9bpmLCP',
                    baseUrl: BASE_URL
                })
                }
        })(document,"script");
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