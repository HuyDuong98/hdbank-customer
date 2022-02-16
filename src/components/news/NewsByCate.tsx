import { Box, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import Style from "../../styles/news/NewsByCate.module.scss";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import clsx from "clsx";
import { pagePath } from "../../utils/constants/pagePath";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import Link from "next/link";

//image
const NewsImg = "/assets/mobile/landing/news-page.png";

interface INews {
  id: string | number;
  title: string;
  short_description: string;
  publish_date: string;
  pc_mode: string;
  mobile_mode: string;
}

interface AllNewsProps {
  listNews: INews[];
  highlight: INews;
  isXsSize: boolean;
}

const NewsByCate: FC<AllNewsProps> = (props) => {
  const { listNews, highlight, isXsSize } = props;
  const isMobile = useRecoilValue(isMobileState);

  const renderNewsByCate = () => {
    const { short_description, publish_date, id, pc_mode, mobile_mode, title } =
      highlight;
    const image = !isMobile ? pc_mode : mobile_mode;

    return (
      <Grid className={Style.byCateWrap}>
        <Box my={3}>
          <Grid
            container
            spacing={isXsSize ? 2 : 5}
            className={Style.mainNewsWrap}
          >
            <Grid item sm={6}>
              <Grid container>
                <Link
                  href={`${pagePath.news}/${convertUrltoSlug(title)}.${id}`}
                >
                  <a>
                    <img src={image || NewsImg} />
                  </a>
                </Link>
              </Grid>
            </Grid>

            <Grid item sm={6}>
              <Grid container direction="column">
                <Typography variant="body2" className={Style.date}>
                  {publish_date}
                </Typography>
                <Link
                  href={`${pagePath.news}/${convertUrltoSlug(title)}.${id}`}
                >
                  <Typography variant="h6" className={Style.title}>
                    {title}
                  </Typography>
                </Link>
                <span className={Style.content}>{short_description}</span>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={5} className={Style.otherNewsWrap}>
          {listNews?.map((newsItem, idx) => {
            const {
              short_description,
              publish_date,
              id,
              pc_mode,
              mobile_mode,
              title,
            } = newsItem;
            const image = !isMobile ? pc_mode : mobile_mode;
            return (
              <Grid key={idx} item sm={4}>
                {isXsSize && (
                  <Link
                    href={`${pagePath.news}/${convertUrltoSlug(title)}.${id}`}
                  >
                    <Typography variant="body1" className={Style.titleMobile}>
                      {title}
                    </Typography>
                  </Link>
                )}
                <Grid container spacing={2}>
                  <Grid item sm={12} xs={6}>
                    <Link
                      href={`${pagePath.news}/${convertUrltoSlug(title)}.${id}`}
                    >
                      <a>
                        <img src={image || NewsImg} />
                      </a>
                    </Link>
                  </Grid>
                  <Grid item sm={12} xs={6}>
                    <Grid container direction="column">
                      <Typography variant="body2" className={Style.date}>
                        {publish_date}
                      </Typography>
                      <Link
                        href={`${pagePath.news}/${convertUrltoSlug(
                          title
                        )}.${id}`}
                      >
                        <Typography
                          variant="body1"
                          className={clsx(Style.title, {
                            [Style.titlePC]: isXsSize,
                          })}
                        >
                          {title}
                        </Typography>
                      </Link>
                      <span className={Style.content}>{short_description}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  };

  if (!highlight.id) return <></>;
  return <Grid className={Style.newsByWrap}>{renderNewsByCate()}</Grid>;
};

export default NewsByCate;
