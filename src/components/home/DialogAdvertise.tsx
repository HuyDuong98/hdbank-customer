import { FC, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Style from "../../styles/components/DialogAdvertise.module.scss";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { getAdvertise } from "../../apis/landing-page/home";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { isMobileState } from "../../stores/sharedStores";

const DialogAdvertise: FC = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(true);
  const isMobile = useRecoilValue(isMobileState);
  const langCode =
    i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;
  const { data } = useQuery(["advertiseQuery", langCode], () =>
    getAdvertise(langCode)
  );

  const handleClose = () => setOpen(!open);
  return (
    <>
      {data && (
        <Dialog
          open={open}
          onClose={handleClose}
          className={Style.dialogWrapper}
          classes={{ paper: Style.paperWrapper }}
          maxWidth="lg"
          scroll="body"
        >
          <Box className={Style.dialogContent}>
            <img
              src={isMobile ? data.mobile_mode : data.pc_mode}
              alt={data.title}
              title={data.title}
            />
            <Box className={Style.description}>
              <Typography variant="h2">{data.title}</Typography>
              <Typography>{data.content}</Typography>
            </Box>
            <Divider />
            <Box className={Style.action}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => (window.location.href = data.btn_url)}
              >
                {data.btn_text || t("Đăng ký ngay")}
              </Button>
            </Box>
          </Box>
          <IconButton
            size="small"
            className={Style.close}
            onClick={handleClose}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Dialog>
      )}
    </>
  );
};

export default DialogAdvertise;
