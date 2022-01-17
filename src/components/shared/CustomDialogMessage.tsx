import { FC } from "react";
import {
  Dialog,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
} from "@material-ui/core";
import Style from "../../styles/components/shared/CustomDialogMessage.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const IconSuccess = "/assets/icons/message_success.svg";
const IconWarning = "/assets/icons/message_warning.svg";
const IconFaild = "/assets/icons/message_faild.svg";

interface IDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  message?: string | null;
  title: string | null;
  isSuccess: "success" | "failed" | "warning";
  handleAgain?: () => void;
}
const CustomDialogMessage: FC<IDialogProps> = ({
  isOpen,
  handleClose,
  title,
  message,
  isSuccess,
  handleAgain,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Dialog
        onClose={handleClose}
        open={isOpen}
        maxWidth="sm"
        scroll="body"
        classes={{ paper: Style.dialogWrapper }}
      >
        <IconButton
          className={Style.closeIcon}
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Box className={Style.bodyDialog}>
          {isSuccess === "success" ? (
            <img src={IconSuccess} />
          ) : isSuccess === "failed" ? (
            <img src={IconFaild} />
          ) : (
            <img src={IconWarning} />
          )}

          <Box
            className={clsx(Style.success, {
              [Style.error]: isSuccess === "failed",
              [Style.warning]: isSuccess === "warning",
            })}
          >
            <Typography variant="h2">{title}</Typography>
          </Box>
          {message && (
            <Box className={Style.message}>
              <Typography>{message}</Typography>
            </Box>
          )}
        </Box>
        {isSuccess === "warning" && (
          <>
            <Divider />
            <Box className={Style.action}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleAgain}
              >
                {t("Thực hiện lại")}
              </Button>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
};
export default CustomDialogMessage;
