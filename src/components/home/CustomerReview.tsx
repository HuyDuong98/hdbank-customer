import React, { FC } from "react";
import {
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/home/CustomerReview.module.scss";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { Rating } from "@material-ui/lab";
import { pagePath } from "../../utils/constants/pagePath";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

//images
const SendIcon = "/assets/icons/chat-dot.svg";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { TIME_AUTO_PLAY_SLIDE } from "../../utils/constants/variables";

interface IFeedBackItem {
  name: string;
  rate: number;
  content: string;
  avatar_pc_model: string;
  avatar_mobile_model: string;
}

interface IFeedBackProps {
  lstFeedback: IFeedBackItem[];
}

const CustomerReview: FC<IFeedBackProps> = (props) => {
  SwiperCore.use([Autoplay, Navigation]);
  const { lstFeedback } = props;
  const { t } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Grid
      container
      justifyContent="center"
      className={Style.customerReviewWrap}
    >
      <Grid container direction="column" className={Style.headingWrap}>
        <Grid container direction="column" className={Style.title}>
          <Typography variant="h3">{t("customerReview")}</Typography>
        </Grid>
        <span>
          {t(
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
          )}
        </span>
      </Grid>

      <Grid className={Style.sliderWrap}>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
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
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }
              : false
          }
          className={Style.swiperWrap}
          autoplay={{
            delay: TIME_AUTO_PLAY_SLIDE,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          initialSlide={0}
          centeredSlides={false}
        >
          {lstFeedback.map((feedback, idx) => {
            const {
              name,
              rate,
              content,
              avatar_pc_model,
              avatar_mobile_model,
            } = feedback;

            return (
              <SwiperSlide key={idx} className={Style.slideItem}>
                <Grid container alignItems="center" className={Style.itemWrap}>
                  <Grid container alignItems="center" className={Style.padding}>
                    <Rating
                      readOnly
                      value={Number(rate)}
                      emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
                      icon={<StarRoundedIcon fontSize="inherit" />}
                    />

                    <span className={Style.comments}>{content}</span>

                    <Grid item>
                      <Avatar
                        src={!isMobile ? avatar_pc_model : avatar_mobile_model}
                        className={Style.avatarImg}
                      ></Avatar>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        className={Style.productInfo}
                      >
                        <span>{t(name)}</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
            );
          })}
          {lstFeedback.map((feedback, idx) => {
            const {
              name,
              rate,
              content,
              avatar_pc_model,
              avatar_mobile_model,
            } = feedback;

            return (
              <SwiperSlide key={idx * 2} className={Style.slideItem}>
                <Grid container alignItems="center" className={Style.itemWrap}>
                  <Grid container alignItems="center" className={Style.padding}>
                    <Rating
                      readOnly
                      value={Number(rate)}
                      emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
                      icon={<StarRoundedIcon fontSize="inherit" />}
                    />

                    <span className={Style.comments}>{content}</span>

                    <Grid item>
                      <Avatar
                        src={!isMobile ? avatar_pc_model : avatar_mobile_model}
                        className={Style.avatarImg}
                      ></Avatar>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        className={Style.productInfo}
                      >
                        <span>{t(name)}</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {!isMobile && (
          <>
            <IconButton
              ref={navigationPrevRef}
              id="navPrevReview"
              className={Style.navPrev}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              ref={navigationNextRef}
              id="navNextReview"
              className={Style.navNext}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Grid>

      <Grid container justifyContent="center" className={Style.btnDiv}>
        <Link href={pagePath.feedback}>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={Style.mobileBtn}
          >
            {t("seeAll")}
          </Button>
        </Link>
      </Grid>

      <Grid className={Style.icon}>
        <img alt="" src={SendIcon} />
      </Grid>
    </Grid>
  );
};

export default CustomerReview;
