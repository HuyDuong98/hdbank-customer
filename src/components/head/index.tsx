import Head from "next/head";
import { useRouter } from "next/router";
import {
  getReversePagePath,
  pageNamePage,
} from "../../utils/constants/pagePath";
import { useTranslation } from "react-i18next";

const HeadPage = () => {
  const { i18n } = useTranslation();
  const { pathname } = useRouter();
  const indexMainPath = pathname.lastIndexOf("/");
  const mainPath = () => {
    if (indexMainPath > 0) {
      return pathname.slice(0, indexMainPath);
    }
    return pathname;
  };
  const reversePath = getReversePagePath();

  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;
  const headPage = pageNamePage[reversePath[mainPath()]];
  const headPageLang = langCode === "vi" ? headPage?.vn : headPage?.en;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Project Execution Portal" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="preload"
        href="/fonts/SVN-FRIENDSFOREVER.OTF"
        as="font"
        crossOrigin=""
      />
      <title>{headPageLang} - HDBank</title>
    </Head>
  );
};

export default HeadPage;
