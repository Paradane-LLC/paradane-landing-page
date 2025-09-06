"use client"

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitChatbot = () => {
      // Create script element
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        window.chatwootSettings = {"position":"right","type":"expanded_bubble","launcherTitle":"Chat with us"};
        (function(d,t) {
            var BASE_URL="https://support.paradane.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
            window.chatwootSDK.run({
                websiteToken: 'Wu5EUVnF5uYf2qwyTFAHCcQz',
                baseUrl: BASE_URL
            })
            }
        })(document,"script");
      `;
      
      document.body.appendChild(script);
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadAndInitChatbot, 1000);

    // Preload Cal to improve BookerModal performance
    (async function () {
      const cal = await getCalApi({ namespace: "schedule-a-meeting", embedLibUrl: "https://schedule.paradane.com/embed/embed.js" });
      cal("preload", { calLink: "team/sales/schedule-a-meeting" });
    })();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}

export default WidgetProvider;