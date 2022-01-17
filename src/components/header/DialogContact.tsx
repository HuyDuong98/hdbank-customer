import { FC, useState, useEffect } from "react";
import {
  Button,
  Grid,
  Avatar,
  Box,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import Style from "../../styles/faq/ListFAQ.module.scss";
import { useTranslation } from "react-i18next";
import { getTopics, sendContact } from "../../apis/landing-page/home";

import CustomTextField from "../../components/shared/CustomTextField";
import CustomSelect from "../../components/shared/CustomSelect";
import CachedIcon from "@material-ui/icons/Cached";

//icons
import CustomDialog from "../shared/CustomDialog";
import Joi from "joi";
import { useValidateForm } from "../../hooks/useValidateForm";
import { getCapchaImage } from "../../apis/faq";
import { useMutation, useQuery } from "react-query";
import CustomDialogMessage from "../shared/CustomDialogMessage";

interface IDialogContactProps {
  isOpen: boolean;
  handleClose: () => void;
}

const schema = Joi.object({
  name: Joi.string()
    .empty(null)
    .required()
    .pattern(
      new RegExp(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$/
      )
    )
    .max(50)
    .messages({
      "any.required": "nameNotBlank",
      "string.max": "limitName",
      "string.pattern.base": "nameNotValid",
    }),
  phone: Joi.string()
    .empty(null)
    .required()
    .length(10)
    .pattern(new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/))
    .messages({
      "any.required": "phoneNotBlank",
      "string.pattern.base": "phoneNotValid",
      "string.length": "phoneNotValid",
    }),
  email: Joi.string()
    .empty(null)
    .email({ tlds: { allow: false } })
    .messages({
      "string.email": "emailNotValid",
    }),
  topic: Joi.string().empty(null).required().messages({
    "any.required": "topicNotBlank",
  }),
  content: Joi.string()
    .empty(null)
    .required()
    .pattern(new RegExp(/^[^#@,.?/{}!^*()$]+$/))
    .messages({
      "any.required": "contentNotBlank",
      "string.pattern.base": "contentNotValid",
    }),
  capcha: Joi.string().empty(null).required().messages({
    "any.required": "captchaNotBlank",
  }),
});

const simpleSchema = Joi.object({
  topic: Joi.string().empty(null).required().messages({
    "any.required": "topicNotBlank",
  }),
  content: Joi.string()
    .empty(null)
    .pattern(new RegExp(/^[^#@,.?/{}!^*()$]+$/))
    .required()
    .messages({
      "any.required": "contentNotBlank",
      "string.pattern.base": "contentNotValid",
    }),
  capcha: Joi.string().empty(null).required().messages({
    "any.required": "captchaNotBlank",
  }),
});

const DialogContact: FC<IDialogContactProps> = (props) => {
  const { t } = useTranslation();
  const { isOpen, handleClose } = props;
  const [validatedKey, setValidatedKey] = useState<string>();
  const [isLogin] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true);
  const [listTopic, setListTopic] = useState([]);
  const [hiddenDialog, setHiddenDialog] = useState<boolean>(false);
  const [message, setMessage] = useState<any>({
    isOpen: false,
    message: null,
    title: null,
    isSuccess: false,
  });

  const [form, setForm] = useState<any>({
    name: null,
    phone: null,
    email: null,
    topic: null,
    content: null,
    capcha: null,
  });
  const [capchaMessage, setCapchaMessage] = useState<string | null>(null);

  const { data: topicData, isFetching: topicFetching } = useQuery(
    "topicQuery",
    getTopics,
    {}
  );
  const { data: capchaData, refetch } = useQuery("capchaQuery", getCapchaImage);
  const refetchCapcha = () => {
    refetch();
  };

  useEffect(() => {
    if (!topicData) return;
    const temp = topicData.map((topic) => {
      return {
        name: topic.item,
        value: topic.value,
        renderItem: <span>{topic.item}</span>,
      };
    });
    setListTopic(temp);
  }, [topicData]);

  const { errors, validateAll, eraseErrors } = useValidateForm(
    form,
    isLogin ? simpleSchema : schema,
    validatedKey
  );

  const handleForm = (value, key) => {
    setValidatedKey(key);
    setForm({ ...form, [key]: value });
  };

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field);
    return error ? t(error.message) : "";
  };

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field);
    return !!error;
  };

  const { mutateAsync } = useMutation(sendContact);

  const handleSendRequest = async () => {
    if (validateAll()) {
      const response = await mutateAsync({
        customerName: form.name,
        phoneNumber: form.phone,
        email: form.email,
        topicId: form.topic,
        question: form.content,
        captcha: form.capcha,
        captchaId: capchaData.capchaId,
        islogin: isLogin ? "1" : "0",
      });
      if (response.isSuccessful) {
        setHiddenDialog(true);
        setMessage({
          ...message,
          isOpen: true,
          message: response.successData.message,
          title: t("Gửi thành công"),
          isSuccess: "success",
        });
      } else if (response.responseCode === -1) {
        setCapchaMessage(`Capcha ${t("MESS04")}`);
      } else {
        setHiddenDialog(true);
        setMessage({
          ...message,
          isOpen: true,
          message: t("MESS28"),
          title: t("Gửi thất bại"),
          isSuccess: "warning",
        });
      }
    }
  };

  const onCloseDialog = () => {
    setForm({
      name: null,
      phone: null,
      email: null,
      topic: null,
      content: null,
      captcha: null,
    });
    setCapchaMessage(null);
    setHiddenDialog(false);
    setDisabledSubmit(true);
    eraseErrors();
    handleClose();
  };

  const onCloseDialogMessage = () => {
    setMessage({
      ...message,
      isOpen: false,
    });
    onCloseDialog();
  };

  const checkSubmitEnable = () => {
    if (
      form.name &&
      form.phone &&
      form.capcha &&
      form.content &&
      form.topic &&
      validateAll()
    ) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  };

  const renderForm = () => {
    return (
      <>
        {isLogin ? renderLogin() : renderNoneLogin()}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={true}
          onClick={handleSendRequest}
          disabled={disabledSubmit}
        >
          {t("submit")}
        </Button>
      </>
    );
  };

  const renderNoneLogin = () => {
    return (
      <>
        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t("firstAndLastName")} *`}
            value={form.name}
            error={hasErrors("name")}
            helperText={getErrorMessage("name")}
            onChange={(value) => {
              handleForm(value || null, "name");
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t("phoneNumber")} *`}
            value={form.phone}
            error={hasErrors("phone")}
            helperText={getErrorMessage("phone")}
            onChange={(value) => {
              handleForm(value || null, "phone");
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={t("email")}
            value={form.email}
            error={hasErrors("email")}
            helperText={getErrorMessage("email")}
            onChange={(value) => {
              handleForm(value || null, "email");
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            placeholder={t("selectAnOption")}
            isCustomDisplayValue
            value={form.topic}
            options={listTopic}
            onChange={(value) => {
              handleForm(value || null, "topic");
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t("content")} *`}
            value={form.content}
            error={hasErrors("content")}
            helperText={getErrorMessage("content")}
            onChange={(value) => {
              handleForm(value || null, "content");
            }}
            outlined={true}
            rows={4}
            onKeyUp={checkSubmitEnable}
          />
        </div>
        <div className={Style.textFieldWrapper}>
          <Grid container>
            <Grid item xs={6}>
              <CustomTextField
                placeholder={`${t("captchaCode")} *`}
                value={form.capcha}
                error={hasErrors("capcha")}
                helperText={getErrorMessage("capcha")}
                onChange={(value) => {
                  handleForm(value || null, "capcha");
                }}
                onFocus={() => setCapchaMessage(null)}
                onKeyUp={checkSubmitEnable}
              />
              <FormHelperText error>{capchaMessage}</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={10} className={Style.imgCapcha}>
                  <img src={capchaData?.captchBase64Data} alt="" />
                </Grid>

                <Grid item xs={2}>
                  <IconButton onClick={refetchCapcha}>
                    <CachedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  };

  const renderLogin = () => {
    return (
      <>
        <div className={Style.avatarWrapper}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            className={Style.avatarImg}
          ></Avatar>
          <span>Nguyễn Phạm Thuỳ Anh</span>
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            placeholder={t("selectAnOption")}
            value={form.topic}
            options={listTopic}
            isCustomDisplayValue
            onChange={(value) => {
              handleForm(value || null, "topic");
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t("content")} *`}
            value={form.content}
            error={hasErrors("content")}
            helperText={getErrorMessage("content")}
            onChange={(value) => {
              handleForm(value || null, "content");
            }}
            outlined={true}
            rows={4}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <Grid container>
            <Grid item lg={6} md={12} sm={6} xs={12}>
              <Grid
                container
                className={Style.captcha}
                justifyContent="space-between"
              >
                <Grid item xs={6}>
                  <Grid>
                    <CustomTextField
                      placeholder={`${t("captchaCode")} *`}
                      value={form.capcha}
                      error={hasErrors("capcha")}
                      helperText={getErrorMessage("capcha")}
                      onChange={(value) => {
                        handleForm(value || null, "capcha");
                      }}
                      onFocus={() => setCapchaMessage(null)}
                      onKeyUp={checkSubmitEnable}
                    />
                    <FormHelperText error>{capchaMessage}</FormHelperText>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={10} className={Style.imgCapcha}>
                      <img src={capchaData?.captchBase64Data} alt="" />
                    </Grid>

                    <Grid item xs={2}>
                      <IconButton
                        onClick={refetchCapcha}
                        className={Style.btnCapcha}
                      >
                        <CachedIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  };

  if (topicFetching) return <></>;

  return (
    <>
      {!hiddenDialog && (
        <CustomDialog
          isOpen={isOpen}
          handleClose={onCloseDialog}
          title={t("submitAQuestion")}
        >
          <Box className={Style.dialogWrapper}>
            <Grid className={Style.dialogBody}>{renderForm()}</Grid>
          </Box>
        </CustomDialog>
      )}
      <CustomDialogMessage
        isSuccess={message.isSuccess}
        isOpen={message.isOpen}
        handleClose={onCloseDialogMessage}
        title={message.title}
        message={message.message}
      />
    </>
  );
};

export default DialogContact;
