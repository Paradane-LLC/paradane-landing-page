"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

function WidgetProvider({ nonce }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.nonce = nonce; // ✅ apply nonce here
    script.src =
      "https://gc.zohopublic.com/org/899434323/flows/37206000000002163/embed/script";
    document.body.appendChild(script);

    // preload Cal
    (async function () {
      const cal = await getCalApi({
        namespace: "schedule-a-meeting",
        embedLibUrl: "https://schedule.paradane.com/embed/embed.js",
      });
      cal("preload", { calLink: "team/sales/schedule-a-meeting" });
    })();
  }, [nonce]);

  return null;
}

export default WidgetProvider;
