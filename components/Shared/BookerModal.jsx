"use client"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookerModal() {

    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"schedule-a-meeting","embedLibUrl":"https://schedule.paradane.com/embed/embed.js"});
          cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#00489c"},"dark":{"cal-brand":"#00489c"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    return <span data-cal-namespace="schedule-a-meeting"
        data-cal-link="team/sales/schedule-a-meeting"
        data-cal-origin="https://schedule.paradane.com"
        data-cal-config='{"layout":"month_view","theme":"light"}'
    >Schedule a Meeting</span>;
};
  