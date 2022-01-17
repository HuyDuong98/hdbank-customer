import { FC } from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/home/SpecialOffer.module.scss";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { pagePath } from "../../utils/constants/pagePath";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//images
const GiftIcon = "/assets/icons/gift.svg";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface IPromoteItem {
  id: string;
  title: string;
  content: string;
  start: string;
  end: string;
  banner_pc_mode: string;
  banner_mobile_mode: string;
}

interface IPromoteProps {
  lstPromote: IPromoteItem[];
}

const SpecialOffer: FC<IPromoteProps> = (props) => {
  const { lstPromote } = props;
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      className={Style.offerWrap}
    >
      <Grid container direction="column" className={Style.headingWrap}>
        <Grid container direction="column" className={Style.title}>
          <Typography variant="h3">{t("specialOffers")}</Typography>
        </Grid>
        <span>{t("manyCardOffer")}</span>
      </Grid>

      <Grid container className={Style.sliderWrap}>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: "auto",
            },
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1280: {
              slidesPerView: 3,
            },
          }}
          navigation={
            !isMobile
              ? {
                  prevEl: "#navPrevOffer",
                  nextEl: "#navNextOffer",
                }
              : false
          }
          className={Style.swiperWrap}
        >
          {lstPromote.map((promote, idx) => {
            const {
              title,
              content,
              start,
              end,
              banner_pc_mode,
              banner_mobile_mode,
              id,
            } = promote;
            return (
              <SwiperSlide key={idx} className={Style.slideItem}>
                <Link
                  href={`${pagePath.promotion}/${convertUrltoSlug(
                    title
                  )}.${id}`}
                >
                  <img
                    src={!isMobile ? banner_pc_mode : banner_mobile_mode}
                    alt={title}
                  />
                </Link>
                <Grid
                  container
                  direction="column"
                  className={Style.productInfo}
                >
                  <Link
                    href={`${pagePath.promotion}/${convertUrltoSlug(
                      title
                    )}.${id}`}
                  >
                    <Typography variant="body1">{t(title)}</Typography>
                  </Link>
                  <span>{t(content)}</span>
                  <span>{t("periodFrom", { start, end })}</span>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {!isMobile && (
          <>
            <IconButton id="navPrevOffer" className={Style.navPrev}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton id="navNextOffer" className={Style.navNext}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Grid>

      <Grid className={Style.btnDiv}>
        <Link href={pagePath.promotion}>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={Style.mobileBtn}
          >
            {t("seeAllOffers")}
          </Button>
        </Link>
      </Grid>

      <Grid className={Style.icon}>
        <img src={GiftIcon} alt="" />
      </Grid>
    </Grid>
  );
};

export default SpecialOffer;
