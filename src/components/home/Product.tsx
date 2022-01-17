import { FC } from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/home/Product.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import { pagePath } from "../../utils/constants/pagePath";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import "swiper/swiper.min.css";
//images
const CardIcon = "/assets/icons/credit-card-red.svg";

//icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface IProductItem {
  id: string;
  title: string;
  content: string;
  banner_pc_mode: string;
  banner_mobile_mode: string;
}

interface IProductProps {
  lstProduct: IProductItem[];
}

const Product: FC<IProductProps> = (props) => {
  const { lstProduct } = props;
  const { t } = useTranslation();

  const isMobile = useRecoilValue(isMobileState);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={Style.productWrap}
    >
      <Grid container direction="column" className={Style.headingWrap}>
        <Grid container direction="column" className={Style.title}>
          <Typography variant="h3">{t("product")}</Typography>
        </Grid>
        <span>{t("yourStyle")}</span>
      </Grid>

      <Grid className={Style.sliderWrap}>
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
                  prevEl: "#navPrevProduct",
                  nextEl: "#navNextProduct",
                }
              : false
          }
          className={Style.swiperWrap}
        >
          {lstProduct.map((product, idx) => {
            const { title, content, banner_pc_mode, banner_mobile_mode, id } =
              product;
            return (
              <SwiperSlide key={idx} className={Style.slideItem}>
                <Grid className={Style.itemWrap}>
                  <Grid className={Style.imgDiv}>
                    <Link
                      href={`${pagePath.productPage}/${convertUrltoSlug(
                        title
                      )}.${id}`}
                    >
                      <img
                        src={!isMobile ? banner_pc_mode : banner_mobile_mode}
                        alt={title}
                      />
                    </Link>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    className={Style.productInfo}
                  >
                    <Link
                      href={`${pagePath.productPage}/${convertUrltoSlug(
                        title
                      )}.${id}`}
                    >
                      <Typography variant="body1">{t(title)}</Typography>
                    </Link>
                    <span>{t(content)}</span>
                  </Grid>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {!isMobile && (
          <>
            <IconButton id="navPrevProduct" className={Style.navPrev}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton id="navNextProduct" className={Style.navNext}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Grid>

      <Grid className={Style.btnDiv}>
        <Link href={pagePath.productPage}>
          <Button
            variant="contained"
            disableElevation
            className={Style.mobileBtn}
          >
            <span>{t("seeAll")}</span>
          </Button>
        </Link>
      </Grid>

      <Grid className={Style.icon}>
        <img src={CardIcon} alt="" />
      </Grid>
    </Grid>
  );
};

export default Product;
