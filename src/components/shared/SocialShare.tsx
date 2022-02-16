import { Box, Grid, Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/shared/SocialShare.module.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";
const FBIcon = "/assets/socials/facebook.png";
const ZaloIcon = "/assets/socials/zalo_40x40.png";
const LinkedIcon = "/assets/socials/LinkedIn.png";
const TWIcon = "/assets/socials/Twitter.png";
const TeleIcon = "/assets/socials/Telegram.png";

const SocialShare: FC = () => {
  const { t } = useTranslation();
  const [windowHref, setWindowHref] = useState("#");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;

    document.body.appendChild(script);

    setWindowHref(window.location.href);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Grid container>
      <Grid item>
        <Box mb={1}>
          <Typography>
            <strong>{t("share")}</strong>
          </Typography>
        </Box>

        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          className={Style.social}
        >
          <Grid item>
            <a href="/" target="_blank">
              <FacebookShareButton url={windowHref}>
                <img src={FBIcon} alt="" />
              </FacebookShareButton>
            </a>
          </Grid>
          <Grid item>
            <button
              data-href={windowHref}
              data-oaid="1148028551726591727"
              className="zalo-share-button"
              data-customize="true"
              data-layout="4"
            >
              <img src={ZaloIcon} alt="" />
            </button>
          </Grid>
          <Grid item>
            <LinkedinShareButton url={windowHref}>
              <img src={LinkedIcon} alt="Linked" />
            </LinkedinShareButton>
          </Grid>
          <Grid item>
            <TwitterShareButton url={windowHref}>
              <img src={TWIcon} alt="Twitter" />
            </TwitterShareButton>
          </Grid>
          <Grid item>
            <TelegramShareButton url={windowHref}>
              <img src={TeleIcon} alt="Telegram" />
            </TelegramShareButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialShare;
