import { FC } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/home/Features.module.scss";
import { pagePath } from "../../utils/constants/pagePath";
import Link from "next/link";

//images
const BreakLimitImg = "/assets/mobile/landing/break-limit.png";
const BreakLayer = "/assets/mobile/landing/break-layer-1.png";
const FeatureImg = "/assets/mobile/landing/feature.png";
const CategoryIcon = "/assets/icons/category.svg";

//icons
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import RedeemOutlinedIcon from "@material-ui/icons/RedeemOutlined";

const Features: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid container className={Style.featuresWrap}>
      <Grid container justifyContent="center" className={Style.container}>
        <Grid container direction="column" className={Style.headingWrap}>
          <Grid container direction="column" className={Style.title}>
            <Typography variant="h3">{t("salientFeatures")}</Typography>
          </Grid>
          <span>{t("unlimitedExperience")}</span>
          <span>{t("onApp")}</span>
        </Grid>

        <Grid className={Style.group}>
          <Grid container direction="column" className={Style.textWrap}>
            <Grid container direction="column" className={Style.item}>
              <LocalAtmIcon />
              <span>{t("noFee")}</span>
            </Grid>

            <Grid container direction="column" className={Style.item}>
              <CreditCardIcon />
              <span>{t("payBill")}</span>
            </Grid>

            <Grid container direction="column" className={Style.item}>
              <OfflineBoltOutlinedIcon />
              <span>{t("quickLimitChange")}</span>
            </Grid>
          </Grid>

          <Grid className={Style.imgWrap}>
            <img className={Style.layer} src={BreakLayer} />
            <img className={Style.noneLayer} src={BreakLimitImg} />
          </Grid>
        </Grid>

        <Grid className={`${Style.group} ${Style.second}`}>
          <Grid container direction="column" className={Style.textWrap}>
            <Grid container direction="column" className={Style.item}>
              <PeopleAltOutlinedIcon />
              <span>{t("referFriends")}</span>
              <span>{t("unlimitedPoints")}</span>
            </Grid>

            <Grid container direction="column" className={Style.item}>
              <RedeemOutlinedIcon />
              <span>{t("redeemAttractiveGifts")}</span>
              <span>{t("simpleCashback")}</span>
            </Grid>
          </Grid>

          <Grid className={Style.imgWrap}>
            <img className={Style.secondImg} src={FeatureImg} />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={Style.btnDiv}>
        <Link href={pagePath.customerJourney}>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={Style.mobileBtn}
          >
            {t("discoverNow")}
          </Button>
        </Link>
      </Grid>

      <Grid className={Style.icon}>
        <img src={CategoryIcon} />
      </Grid>
    </Grid>
  );
};

export default Features;
