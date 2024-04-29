import { useEffect } from "react";

type iHubSpotForm = {
  formId: string;
};
const HubSpotForm = ({ formId }: iHubSpotForm) => {
  const formHtmlId = `hbform`;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "44828284",
          formId,
          target: `#${formHtmlId}`,
        });
      }
    });
  }, [formId, formHtmlId]);

  return <div id={formHtmlId}></div>;
};

export default HubSpotForm;
