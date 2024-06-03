import Link from "next/link";
import AppLogo from "./AppLogo";
import {
  URL_CORP_BRIDGE,
  URL_NGM_DISCOVERY,
  URL_NGM_EDUCATION,
  URL_XJS_LIBRARY,
} from "./url";

const PageFooter = () => {
  return (
    <div className="mt-24" style={{ backgroundColor: "rgb(255, 246, 231)" }}>
      <div className={"container mx-auto pb-10 pt-16 text-center"}>
        <Link href="/" className="w-[270px] inline-block my-4">
          <span className="sr-only">{process.env.APP_NAME || ""}</span>
          <AppLogo width={270} />
        </Link>
        <div className="flex gap-6 justify-center flex-wrap">
          {[
            {
              title: "CorpBridge",
              url: URL_CORP_BRIDGE,
            },
            {
              title: "XJS Library",
              url: URL_XJS_LIBRARY,
            },
            {
              title: "NGM Education",
              url: URL_NGM_EDUCATION,
            },
            {
              title: "NGM Discovery",
              url: URL_NGM_DISCOVERY,
            },
          ].map((link) => {
            return (
              <Link
                href={link.url}
                key={link.title}
                className="text-xl hover:text-yellow-400 w-[140px]"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className="text-center container mx-auto py-6"
        style={{ borderTop: "1px solid #ccc" }}
      >
        © Copyright CorpBridge Pty Ltd
      </div>
    </div>
  );
};

export default PageFooter;
