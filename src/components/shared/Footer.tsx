import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
} from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import Style from "../../styles/components/shared/Footer.module.scss";
import {
  setCookie,
  getCookie,
  eraseCookie,
} from "../../utils/helpers/cookieHelpers";

//images
const FacebookIcon = "/assets/socials/facebook.png";
const YoutubeIcon = "/assets/socials/youtube.png";
const Twitter = "/assets/socials/Twitter.png";
const LinkedIn = "/assets/socials/LinkedIn.png";
const Logo = "/assets/Logo.png";
const Adroid = "/assets/images/QRGooglePlay.png";
const Ios = "/assets/images/QRAppStore.png";
const Vietnamese = "/assets/icons/ic_vietnamese.png";
const English = "/assets/icons/icon_english.png";
const MBAppStore = "/assets/images/mbAppStore.png";
const MBGgPlay = "/assets/images/mbGooglePlay.png";

import { useTranslation } from "react-i18next";
import { isMobileState } from "../../stores/sharedStores";
import { useRecoilValue } from "recoil";
import DialogTips from "./DialogTips";
import { pagePath } from "../../utils/constants/pagePath";
import { useQuery } from "react-query";
import { getFooterInfo } from "../../apis/footer";
import { Markup } from "interweave";

const Footer: FC = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useRecoilValue(isMobileState);
  const [language, setLanguage] = useState("vn");

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : "en";
  const { data } = useQuery(["footerInfoQuery", langCode], () =>
    getFooterInfo(langCode)
  );

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    setCookie("UserLanguage", event.target.value, 330);
  };

  const renderFooter = () => {
    if (isMobile) {
      return (
        <>
          <div className={Style.container}>
            <img src={Logo} className={Style.logo} />

            <Grid container justifyContent="center">
              <Grid item>
                <Button className={Style.downloadAppStore}>
                  <img src={MBAppStore} alt="" />
                </Button>
              </Grid>
              <Grid item>
                <Button className={Style.downloadGgPlay}>
                  <img src={MBGgPlay} alt="" />
                </Button>
              </Grid>
            </Grid>
            <Divider light />
            <Grid
              container
              justifyContent="space-between"
              className={Style.infoWrap}
            >
              <Grid item xs={12}>
                <Markup content={data?.item} />
              </Grid>
            </Grid>
            <Divider light />
            <Grid item xs={12}>
              <div className={Style.padding}>
                <Typography variant="body1" className={Style.bold}>
                  {t("followUs")}
                </Typography>
              </div>
              <Grid
                container
                justifyContent="space-between"
                className={Style.iconWrapper}
              >
                <img src={FacebookIcon} className={Style.socialIcon} />
                <img src={Twitter} className={Style.socialIcon} />
                <img src={YoutubeIcon} className={Style.socialIcon} />
                <img src={LinkedIn} className={Style.socialIcon} />
              </Grid>
            </Grid>
            <Divider light />
            <Grid container spacing={3} justifyContent="center">
              <Grid item sm={6}>
                <span>{t("termsOfUse")}</span>
              </Grid>
              <Grid item sm={6}>
                <span>{t("safetyAndSecurity")}</span>
              </Grid>
            </Grid>
            <span
              className={Style.padding}
              // onClick={() => history.push(pagePath.sitemap)}
            >
              {t("sidemap")}
            </span>
            <span className={Style.padding}></span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={Style.container}>
          <img src={Logo} className={Style.logo} />
          <Grid
            container
            justifyContent="space-between"
            className={Style.infoWrap}
          >
            <Grid item xs={12} md={6}>
              <Markup content={data?.item} />

              <Grid container className={Style.quickLink}>
                <span>{t("termsOfUse")}</span>
                <span>{t("safetyAndSecurity")}</span>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid
                container
                justifyContent="space-between"
                className={Style.socialWrap}
              >
                <Grid item xs={6} md={6}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                      <Typography variant="body1" className={Style.bold}>
                        {t("followUs")}
                      </Typography>
                      <Grid container className={Style.iconWrapper}>
                        <img src={FacebookIcon} className={Style.socialIcon} />
                        <img src={Twitter} className={Style.socialIcon} />
                        <img src={YoutubeIcon} className={Style.socialIcon} />
                        <img src={LinkedIn} className={Style.socialIcon} />
                      </Grid>
                      <Select
                        value={language || "vn"}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        disableUnderline={true}
                        className={Style.languageWrap}
                      >
                        <MenuItem
                          classes={{ root: Style.languageItem }}
                          value="vn"
                          className={Style.languageItem}
                        >
                          <img src={Vietnamese} />
                          <span>{t("vi")}</span>
                        </MenuItem>
                        <MenuItem
                          classes={{ root: Style.languageItem }}
                          value="en"
                          className={Style.languageItem}
                        >
                          <img src={English} />
                          <span>{t("en")}</span>
                        </MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Grid container justifyContent="center">
                    <Grid item md={10}>
                      <Typography variant="body1" className={Style.bold}>
                        {t("mobileApp")}
                      </Typography>
                      <Grid container className={Style.iconWrapper}>
                        <img src={Adroid} />
                        <img src={Ios} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <Grid container justifyContent="center" className={Style.copyright}>
          <span>{t("coppyRight")}</span>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Grid container className={Style.footer}>
        {renderFooter()}
      </Grid>
    </>
  );
};

export default Footer;
