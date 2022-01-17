import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "../../components/shared/PageHeading";
import Style from "../../styles/promotion/DetailPromotion.module.scss";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import copy from "copy-to-clipboard";
import { useQuery } from "react-query";
import { getPromotionsDetail } from "../../apis/landing-page/promotion";
import { Markup } from "interweave";
import { Swiper, SwiperSlide } from "swiper/react";
import CardPromotionOther from "../../components/promotion/CardPromotionOther";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { pagePath } from "../../utils/constants/pagePath";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import BannerSlide from "../../components/shared/BannerSlide";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import SocialShare from "../../components/shared/SocialShare";
import Link from "next/link";

export default function DetailPromotion({ id }) {
  const { t, i18n } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const lstBreadCrumb = [
    { label: t("promotion"), path: pagePath.promotion },
    { label: t("promotionDetails") },
  ];

  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;

  const { data: promotionDetail } = useQuery(
    ["promotionDetailQuery", langCode, id],
    () => getPromotionsDetail(langCode, id)
  );

  const handleCopyLink = () => {
    copy(window.location.href, {
      debug: true,
      message: "Press #{key} to copy",
    });
  };

  const handleChangePage = (title, id) => {
    // history.push(`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`)
  };

  return (
    <Container className={Style.detailPromotion}>
      {!isMobile && <PageHeading breadCrumbs={lstBreadCrumb} iconHome />}

      {promotionDetail && (
        <>
          {promotionDetail?.banners && (
            <Box className={Style.banner}>
              <BannerSlide
                listBanner={
                  isMobile
                    ? promotionDetail?.banners?.mobile_Mode
                    : promotionDetail?.banners?.pc_Mode
                }
              />
            </Box>
          )}
          <Box className={Style.contentDetail}>
            <Typography component="h1" color="primary">
              {promotionDetail.promotionName}
            </Typography>

            <Grid container className={Style.description}>
              <Grid item md={12} xs={12}>
                <Box className={Style.time}>
                  <AccessTimeIcon />
                  <Typography>
                    {promotionDetail.createdDate}-{promotionDetail.finishDate}
                  </Typography>
                </Box>
                {promotionDetail?.applicable &&
                  promotionDetail?.applicable.length > 0 && (
                    <Box mt={3}>
                      <Typography component="h6">
                        {t("appliedCards")}
                      </Typography>
                      {!isMobile ? (
                        <Grid container spacing={3}>
                          {promotionDetail?.applicable?.map((item, index) => (
                            <Grid key={index} item md={2} sm={4} xs={6}>
                              <Box className={Style.card}>
                                <img
                                  src={
                                    isMobile ? item.mobile_mode : item.pc_mode
                                  }
                                  alt={item.title}
                                  onClick={() =>
                                    handleChangePage(item.title, item.id)
                                  }
                                />
                                <Box className={Style.detailCard}>
                                  <Box>
                                    <Typography
                                      onClick={() =>
                                        handleChangePage(item.title, item.id)
                                      }
                                    >
                                      {item.title}
                                    </Typography>
                                  </Box>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() =>
                                      (window.location.href = item.url)
                                    }
                                  >
                                    {t("register")}
                                  </Button>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      ) : (
                        <Swiper
                          slidesPerView={2}
                          spaceBetween={30}
                          observeParents
                          pagination={{
                            clickable: true,
                            bulletActiveClass: `${Style.paginationActiveStyle}`,
                          }}
                        >
                          {promotionDetail?.applicable?.map((item, index) => (
                            <SwiperSlide key={index}>
                              <Box className={Style.card}>
                                <img
                                  src={
                                    isMobile ? item.mobile_mode : item.pc_mode
                                  }
                                  alt={item.title}
                                  onClick={() =>
                                    handleChangePage(item.title, item.id)
                                  }
                                />
                                <Box>
                                  <Typography
                                    onClick={() =>
                                      handleChangePage(item.title, item.id)
                                    }
                                  >
                                    {item.title}
                                  </Typography>
                                </Box>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="small"
                                  onClick={() =>
                                    (window.location.href = item.url)
                                  }
                                >
                                  {t("Đăng ký")}
                                </Button>
                              </Box>
                              <Box className={Style.sliderSpacingBottom}></Box>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                    </Box>
                  )}
              </Grid>
            </Grid>
            {/* change content from API */}
            <Box mt={3} className={Style.prmotionContent}>
              <Markup content={promotionDetail.content} />
            </Box>
          </Box>
          <Box component="section">
            <Grid container>
              <Grid item md={3}>
                <SocialShare />
              </Grid>
              <Grid item md={3}>
                <Box mt={isMobile ? 3 : 4}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography>{t("copyLink")}</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        className={Style.copyLink}
                        onClick={() => handleCopyLink()}
                      >
                        <FileCopyOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box component="section" className={Style.promotionsOther}>
            <Typography component="h2" align="center">
              {t("discoverMoreOffers")}
            </Typography>
            <Typography align="center" className={Style.subTitle}>
              {t("countlessCreditCardOffersForYou")}
            </Typography>
            <Divider />
            <Box className={Style.sliderOther}>
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
                        prevEl: "#navPrev",
                        nextEl: "#navNext",
                      }
                    : false
                }
                className={Style.swiperOther}
              >
                {promotionDetail &&
                  promotionDetail.otherPromotions?.map((data) => {
                    return (
                      <SwiperSlide key={data.id} className={Style.slideItem}>
                        <Link
                          href={`${pagePath.promotion}/${convertUrltoSlug(
                            data.propotionName
                          )}.${data.id}`}
                        >
                          <Grid className={Style.itemWrap}>
                            <CardPromotionOther
                              image={isMobile ? data.mobile_mode : data.pc_mode}
                              title={data.propotionName}
                              content={data.content}
                              startDate={data.start}
                              endDate={data.end}
                              label={data.label_text}
                            />
                          </Grid>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              {!isMobile && (
                <>
                  <IconButton id="navPrev" className={Style.navPrev}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton id="navNext" className={Style.navNext}>
                    <ChevronRightIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const param = context.params?.promotionUrl;
  const id = param.slice(param.indexOf(".") + 1);
  return {
    props: { id },
  };
}
