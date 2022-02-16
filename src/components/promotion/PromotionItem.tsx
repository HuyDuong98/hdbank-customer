import { Box, Grid, Typography } from "@material-ui/core";
import Style from "../../styles/product/Product.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import BannerSlide from "../shared/BannerSlide";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useRecoilValue } from "recoil";
import { isMobileState } from "../../stores/sharedStores";
import { pagePath } from "../../utils/constants/pagePath";
import { convertUrltoSlug } from "../../utils/helpers/commonHelpers";
import Link from "next/link";

interface IPromotionItemProps {
  image: string;
  name: string;
  content?: string;
  startDate?: string;
  endDate?: string;
  applicable?: string;
  btnDetail: "contained" | "text" | "outlined";
  typeCard?: "nomal" | "section" | "promotion";
  typeThumb?: "center" | "full";
  noti?: string;
  productId: number;
}
const PromotionItem: FC<IPromotionItemProps> = ({
  image,
  name,
  content,
  btnDetail,
  startDate,
  applicable,
  endDate,
  typeCard = "nomal",
  typeThumb = "center",
  noti,
  productId,
}) => {
  const { t } = useTranslation();
  const StyleBox = `${Style.boxProduct} ${
    typeCard === "nomal" && Style.borderProduct
  }`;
  const isMobile = useRecoilValue(isMobileState);
  return (
    <Box className={StyleBox}>
      {isMobile && (
        <Link
          href={`${pagePath.promotion}/${convertUrltoSlug(name)}.${productId}`}
          passHref
        >
          <Typography
            component={typeCard === "nomal" ? "h5" : "h3"}
            color="textPrimary"
          >
            {name}
          </Typography>
        </Link>
      )}
      <Grid container>
        <Grid item xs={5} md={typeCard === "nomal" ? 12 : 6}>
          <Box className={Style.image}>
            {noti && (
              <Box className={Style.noti}>
                <span>{noti}</span>
              </Box>
            )}
            <Link
              href={`${pagePath.promotion}/${convertUrltoSlug(
                name
              )}.${productId}`}
              passHref
            >
              <img src={image} alt="" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={7} md={typeCard === "nomal" ? 12 : 6}>
          <Box className={Style.productContent}>
            {!isMobile && (
              <Link
                href={`${pagePath.promotion}/${convertUrltoSlug(
                  name
                )}.${productId}`}
                passHref
              >
                <Typography
                  component={typeCard === "nomal" ? "h5" : "h3"}
                  color="primary"
                >
                  {name}
                </Typography>
              </Link>
            )}
            <Box className={Style.time}>
              <AccessTimeIcon />
              <Typography>
                {startDate}-{endDate}
              </Typography>
            </Box>

            {applicable && (
              <Box className={Style.applicable}>
                <Typography component="p"> {applicable}</Typography>
              </Box>
            )}

            {content && <Typography component="p">{content}</Typography>}
            {typeCard === "section" && (
              <Box mt={3} mb={3}>
                <Typography component="p">
                  {t(" Biểu phí và biểu mẩu")}:
                  <Link href="#" passHref>
                    <Typography color="secondary">Tại đây</Typography>
                  </Link>
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PromotionItem;
