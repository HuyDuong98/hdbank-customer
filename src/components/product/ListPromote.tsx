import { FC } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/product/ProductDetail.module.scss";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import { pagePath } from "../../utils/constants/pagePath";

//images
const PromoteImage = "/assets/mobile/landing/news-page.png";

interface IPromoteItem {
  id: string | number;
  title: string;
  content: string;
  finish_date: string;
  pc_mode: string;
  mobile_mode: string;
}

interface IPromoteProps {
  lstPromote: IPromoteItem[];
}

const ListPromote: FC<IPromoteProps> = (props) => {
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const { lstPromote } = props;

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
          <Typography variant="h3">{t("Ưu đãi cho sản phẩm")}</Typography>
        </Grid>
        <span>{t("Vô vàn ưu dành cho bạn")}</span>
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
            960: {
              slidesPerView: 3,
            },
          }}
          navigation={
            !isMobile
              ? {
                  prevEl: "#navPrevPromote",
                  nextEl: "#navNextPromote",
                }
              : false
          }
          className={Style.swiperWrap}
        >
          {lstPromote.map((promote, idx) => {
            const { id, title, content, pc_mode, mobile_mode, finish_date } =
              promote;
            const image = !isMobile ? pc_mode : mobile_mode;
            const date = finish_date.split(/(\s+)/);
            return (
              <SwiperSlide key={idx} className={Style.slideItem}>
                <img src={image || PromoteImage} />
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
                    <span>{t(title)}</span>
                  </Link>
                  <span className={Style.content}>{t(content)}</span>
                  <span>{t(`Thời gian kết thúc ngày ${date[0]}`)}</span>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {!isMobile && (
          <>
            <IconButton id="navPrevPromote" className={Style.navPrev}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton id="navNextPromote" className={Style.navNext}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ListPromote;
