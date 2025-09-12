"use client"

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

function WidgetProvider() {
  useEffect(() => {
    const loadAndInitZoho = () => {
      // Add Zoho SalesIQ base script
      const initScript = document.createElement("script");
      initScript.type = "text/javascript";
      initScript.innerHTML = `
        window.$zoho = window.$zoho || {};
        $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
      `;
      document.body.appendChild(initScript);

      // Add Zoho SalesIQ widget script
      const widgetScript = document.createElement("script");
      widgetScript.id = "zsiqscript";
      widgetScript.src =
        "https://salesiq.zoho.com/widget?wc=siq91e7dcf61c306e68252976b50ff02d4083efb24b54f928ed0744132e2697f04e";
      widgetScript.defer = true;
      document.body.appendChild(widgetScript);
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadAndInitZoho, 1000);

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
