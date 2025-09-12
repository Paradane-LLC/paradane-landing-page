"use client"

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitZohoIM = () => {
      // Create Zoho IM script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.defer = true;
      script.innerHTML = `
        window.ZOHOIM = window.ZOHOIM || function(a,b){ ZOHOIM[a] = b; };
        window.ZOHOIM.prefilledMessage = "How may I help you?";
        (function(){
          var d=document;
          var s=d.createElement('script');
          s.type='text/javascript';
          s.defer=true;
          s.src="https://im.zoho.com/api/v1/public/channel/043b407c8c4a59cc8dfda970247f43ad/widget";
          d.getElementsByTagName('head')[0].appendChild(s);
        })();
      `;
      document.body.appendChild(script);
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(loadAndInitZohoIM, 1000);

    // Preload Cal.com Booker
    (async function () {
      const cal = await getCalApi({
        namespace: "schedule-a-meeting",
        embedLibUrl: "https://schedule.paradane.com/embed/embed.js",
      });
      cal("preload", { calLink: "team/sales/schedule-a-meeting" });
    })();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}

export default WidgetProvider;
