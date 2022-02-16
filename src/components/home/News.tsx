import { FC, useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/home/News.module.scss";
import { isMobileState, isXsState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { pagePath } from "../../utils/constants/pagePath";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import Link from "next/link";
import { useRouter } from 'next/router'
const ReceiptIcon = "/assets/icons/receipt-red.svg";

interface INewsItem {
  id: string;
  title: string;
  content: string;
  published_date: string;
  categoryName: string;
  banner_pc_mode: string;
  banner_mobile_mode: string;
}

interface INewsProps {
  lstNews: INewsItem[];
}

const News: FC<INewsProps> = (props) => {
  const { lstNews } = props;
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const isXsSize = useRecoilValue(isXsState);
  const [lstMobile, setLstMobile] = useState<INewsItem[]>([]);
  const [highlight, setHighlight] = useState<INewsItem>();
  const router = useRouter()

  useEffect(() => {
    const temp = [...lstNews];
    const item = temp.shift();
    setLstMobile(temp);
    setHighlight(item);
  }, [lstNews]);

  const list = !isXsSize ? lstNews : lstMobile;

  const handleChangePage = (title, id) => {
    router.push(`${pagePath.news}/${convertUrltoSlug(title)}.${id}`)
  };

  const rederHighLightNews = () => {
    const image = !isMobile
      ? highlight?.banner_pc_mode
      : highlight?.banner_mobile_mode;
    return (
      <Grid container className={Style.otherNewsWrap}>
        <Grid container spacing={isXsSize ? 2 : 1}>
          <Grid item xs={12}>
            <img
              src={image}
              onClick={() => {
                handleChangePage(highlight?.title, highlight?.id);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column">
              <Grid container alignItems="center" className={Style.dateWrap}>
                <div className={Style.arrow}>
                  <div className={Style.innerArrow}>
                    {highlight?.categoryName}
                  </div>
                </div>
                <Typography variant="body2">
                  {highlight?.published_date}
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                className={Style.hlTitle}
                onClick={() => {
                  handleChangePage(highlight?.title, highlight?.id);
                }}
              >
                {highlight?.title}
              </Typography>
              <span className={Style.content}>{highlight?.content}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container justifyContent="center" className={Style.newsWrap}>
      <Grid container justifyContent="center" className={Style.container}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={Style.headingWrap}
        >
          <Grid container direction="column" className={Style.title}>
            <Typography variant="h3">{t("news")}</Typography>
          </Grid>
        </Grid>

        {isXsSize && rederHighLightNews()}

        <Grid
          container
          spacing={isXsSize ? 0 : 5}
          className={`${Style.otherNewsWrap} ${Style.noneMg}`}
        >
          {list?.map((news, idx) => {
            const {
              title,
              content,
              published_date,
              banner_mobile_mode,
              banner_pc_mode,
              id,
              categoryName,
            } = news;
            return (
              <Grid key={idx} item sm={4} className={Style.newsItem}>
                <Typography
                  variant="body1"
                  className={Style.titleMobile}
                  onClick={() => {
                    handleChangePage(title, id);
                  }}
                >
                  {title}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={6}>
                    <img
                      src={!isMobile ? banner_pc_mode : banner_mobile_mode}
                      onClick={() => {
                        handleChangePage(title, id);
                      }}
                    />
                  </Grid>
                  <Grid item sm={12} xs={6}>
                    <Grid container direction="column">
                      <Grid
                        container
                        alignItems="center"
                        className={Style.dateWrap}
                      >
                        <div className={Style.arrow}>
                          <div className={Style.innerArrow}>{categoryName}</div>
                        </div>
                        <Typography variant="body2">
                          {published_date}
                        </Typography>
                      </Grid>
                      <Typography
                        variant="body1"
                        className={Style.title}
                        onClick={() => {
                          handleChangePage(title, id);
                        }}
                      >
                        {title}
                      </Typography>
                      <span className={Style.content}>{content}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid className={Style.btnDiv}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          className={Style.mobileBtn}
        >
          <Link href={pagePath.news}>
            <a>{t("seeAll")}</a>
          </Link>
        </Button>
      </Grid>

      <Grid className={Style.icon}>
        <img src={ReceiptIcon} />
      </Grid>
    </Grid>
  );
};

export default News;
