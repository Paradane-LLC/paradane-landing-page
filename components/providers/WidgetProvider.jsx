"use client"

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitZohoDesk = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "zohodeskasap";
      script.defer = true;
      script.innerHTML = `
        var d=document;
        s=d.createElement("script"),
        s.type="text/javascript",
        s.id="zohodeskasapscript",
        s.defer=!0,
        s.src="https://desk.zoho.com/portal/api/web/asapApp/1177430000000401059?orgId=899389701",
        t=d.getElementsByTagName("script")[0],
        t.parentNode.insertBefore(s,t),
        window.ZohoDeskAsapReady=function(s){
          var e=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];
          window.ZohoDeskAsapReadyStatus
            ? (s&&e.push(s),e.forEach(s=>s&&s()),window.ZohoDeskAsap__asyncalls=null)
            : s&&e.push(s)
        };
      `;
      document.body.appendChild(script);
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadAndInitZohoDesk, 1000);

    // Preload Cal to improve BookerModal performance
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
