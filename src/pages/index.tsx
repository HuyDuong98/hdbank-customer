import { FC, useState, useEffect } from "react";
import { getHomePage } from "../apis/landing-page/home";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

//components
import Introduction from "@components/home/Introduction";
import Product from "@components/home/Product";
import SpecialOffer from "@components/home/SpecialOffer";
import Features from "@components/home/Features";
import CustomerReview from "@components/home/CustomerReview";
import Contact from "@components/home/Contact";
import News from "@components/home/News";
import DialogAdvertise from "@components/home/DialogAdvertise";

const HomeLandingPage: FC = () => {
  const { i18n } = useTranslation();
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN"
      ? "vi"
      : i18n.language === "en-US"
      ? "en"
      : i18n.language;

  const [content, setContent] = useState({
    top_feedback: [],
    top_news: [],
    top_products: [],
    top_promotes: [],
  });

  const { data, isFetching } = useQuery(["homePageQuery", langCode], () =>
    getHomePage(langCode)
  );

  useEffect(() => {
    if (!data) return;
    setContent(data);
  }, [data]);

  if (isFetching) return <></>;

  return (
    <>
      <Introduction />
      <Product lstProduct={content.top_products} />
      <SpecialOffer lstPromote={content.top_promotes} />
      <Features />
      {/* <CustomerReview lstFeedback={content.top_feedback} /> */}
      <News lstNews={content.top_news} />
      <Contact />
      <DialogAdvertise />
    </>
  );
};
export default HomeLandingPage;
