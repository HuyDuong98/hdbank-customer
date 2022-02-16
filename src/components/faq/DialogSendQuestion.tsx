import { FC, useState } from 'react'
import { Button, Grid, Avatar, Box } from '@material-ui/core'
import Style from '../../styles/faq/ListFAQ.module.scss'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'

import CustomTextField from '../../components/shared/CustomTextField'

//icons
import CustomDialog from '../shared/CustomDialog'
import Joi from 'joi'
import { useValidateForm } from '../../hooks/useValidateForm'
import { IFAQFormQuestion } from '../../models/IFAQ'
import { getCapchaImage, sendQuestion } from '../../apis/faq'
import { useMutation, useQuery } from 'react-query'
import CustomDialogMessage from '../shared/CustomDialogMessage'
import { IMessageModel } from '../../models/IMessageModel'

interface IDialogSendQuestionProps {
  isOpen: boolean
  handleClose: () => void
}
const schema = Joi.object({
  name: Joi.string()
    .empty(null)
    .required()
    .max(50)
    .pattern(
      new RegExp(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
      ),
    )
    .messages({
      'any.required': 'nameNotBlank',
      'string.max': 'limitName',
      'string.pattern.base': 'characterNotValid',
    }),
  phone: Joi.string()
    .empty(null)
    .required()
    .pattern(new RegExp(/^(((\+|)84(0?))|0)(3|5|7|8|9)+([0-9]{8})$/))
    .max(12)
    .min(10)
    .messages({
      'any.required': 'phoneNotBlank',
      'string.pattern.base': 'phoneNotValid',
      'string.max': 'phoneNotValid',
      'string.min': 'phoneNotValid',
    }),
  email: Joi.string()
    .empty(null)
    .email({ tlds: { allow: false } })
    .messages({
      'string.email': 'emailNotValid',
    }),
  title: Joi.string()
    .empty(null)
    .required()
    .max(200)
    .pattern(
      new RegExp(
        /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
      ),
    )
    .messages({
      'any.required': 'titleNotBlank',
      'string.max': 'titleLimit',
      'string.pattern.base': 'characterNotValid',
    }),
  content: Joi.string()
    .empty(null)
    .required()
    .max(500)
    .pattern(
      new RegExp(
        /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
      ),
    )
    .messages({
      'any.required': 'contentNotBlank',
      'string.max': 'contentLimit',
      'string.pattern.base': 'characterNotValid',
    }),
  captcha: Joi.string().empty(null).required().messages({
    'any.required': 'captchaNotBlank',
  }),
})

const simpleSchema = Joi.object({
  title: Joi.string().empty(null).required().max(200).messages({
    'any.required': 'titleNotBlank',
    'string.max': 'titleLimit',
  }),
  content: Joi.string().empty(null).required().max(500).messages({
    'any.required': 'contentNotBlank',
    'string.max': 'contentLimit',
  }),
})

const DialogSendQuestion: FC<IDialogSendQuestionProps> = (props) => {
  const { t } = useTranslation()
  const { isOpen, handleClose } = props
  const [validatedKey, setValidatedKey] = useState<string>()
  const [isLogin] = useState(false)
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true)
  const [hiddenDialog, setHiddenDialog] = useState<boolean>(false)
  const [message, setMessage] = useState<IMessageModel>({
    isOpen: false,
    message: null,
    title: null,
    isSuccess: 'failed',
  })

  const [form, setForm] = useState<IFAQFormQuestion>({
    name: null,
    phone: null,
    email: null,
    title: null,
    content: null,
    captcha: null,
  })
  const [captchaMessage, setCapchaMessage] = useState<string | null>(null)

  const { data: ImageCapcha, refetch } = useQuery('captchaQuery', getCapchaImage)
  const refetchCapcha = () => {
    refetch()
  }

  const { errors, validateAll, eraseErrors } = useValidateForm(form, isLogin ? simpleSchema : schema, validatedKey)

  const handleForm = (value, key) => {
    setValidatedKey(key)
    setForm({ ...form, [key]: value })
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? t(error.message) : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const { mutateAsync } = useMutation(sendQuestion)

  const resendQuestion = () => {
    setHiddenDialog(false)
    setMessage({
      ...message,
      isOpen: false,
    })
  }

  const onChangeReCaptcha = (value) => {
    localStorage.setItem('captchaToken', value)
  }

  const handleSendRequest = async () => {
    const captchaToken = localStorage.getItem('captchaToken')
    console.log('captchaToken---> ', captchaToken)
    if (validateAll() && captchaToken !== null) {
      const response = await mutateAsync({
        userName: form.name,
        phoneNumber: form.phone,
        email: form.email,
        title: form.title,
        capcha: form.captcha || '123456',
        content: form.content,
        islogin: isLogin ? '1' : '0',
        captchaId: ImageCapcha.capchaId || '123456',
      })
      if (response.isSuccessful) {
        setHiddenDialog(true)
        setMessage({
          ...message,
          isOpen: true,
          message: t('MESS27'),
          title: t('submittedSuccessfully'),
          isSuccess: 'success',
        })
      } else if (response.responseCode === -1) {
        setCapchaMessage(`Capcha ${t('MESS04')}`)
      } else {
        setHiddenDialog(true)
        setMessage({
          ...message,
          isOpen: true,
          message: t('MESS28'),
          title: t('submitFailed'),
          isSuccess: 'warning',
        })
      }
    }
  }

  const onCloseDialog = () => {
    setForm({
      name: null,
      phone: null,
      email: null,
      title: null,
      content: null,
      captcha: null,
    })
    setCapchaMessage(null)
    setHiddenDialog(false)
    setDisabledSubmit(true)
    eraseErrors()
    handleClose()
  }

  const onCloseDialogMessage = () => {
    setMessage({
      ...message,
      isOpen: false,
    })
    onCloseDialog()
  }

  const checkSubmitEnable = () => {
    if (form.name && form.phone && form.content && form.title && validateAll()) {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }

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
          {t('submit')}
        </Button>
      </>
    )
  }

  const renderNoneLogin = () => {
    return (
      <>
        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('firstAndLastName')} *`}
            value={form.name}
            error={hasErrors('name')}
            helperText={getErrorMessage('name')}
            onChange={(value) => {
              handleForm(value || null, 'name')
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('phoneNumber')} *`}
            value={form.phone}
            error={hasErrors('phone')}
            helperText={getErrorMessage('phone')}
            onChange={(value) => {
              handleForm(value || null, 'phone')
            }}
            onKeyUp={checkSubmitEnable}
            type="number"
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={t('email')}
            value={form.email}
            error={hasErrors('email')}
            helperText={getErrorMessage('email')}
            onChange={(value) => {
              handleForm(value || null, 'email')
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('title')} *`}
            value={form.title}
            error={hasErrors('title')}
            helperText={getErrorMessage('title')}
            onChange={(value) => {
              handleForm(value || null, 'title')
            }}
            onKeyUp={checkSubmitEnable}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={`${t('content')} *`}
            value={form.content}
            error={hasErrors('content')}
            helperText={getErrorMessage('content')}
            onChange={(value) => {
              handleForm(value || null, 'content')
            }}
            outlined={true}
            rows={4}
            onKeyUp={checkSubmitEnable}
          />
        </div>
        <div className={Style.captcha}>
          <ReCAPTCHA sitekey="6LcTWQIeAAAAALIQ3gkGL3b0ImDS8wQflo4f5n8P" onChange={onChangeReCaptcha} />
          {/* <Grid container className={Style.captcha} justifyContent="space-between">
            <Grid item md={5} xs={5}>
              <Box mr={3}>
                <CustomTextField
                  placeholder={`${t('captchaCode')} *`}
                  value={form.captcha}
                  error={hasErrors('captcha')}
                  helperText={getErrorMessage('captcha')}
                  onChange={(value) => {
                    handleForm(value || null, 'captcha')
                  }}
                  onFocus={() => setCapchaMessage(null)}
                  onKeyUp={checkSubmitEnable}
                />
              </Box>
            </Grid>
            <Grid item md={7} xs={7}>
              <Box display="flex" alignItems="center">
                <img src={ImageCapcha?.captchBase64Data} alt="" />
                <IconButton onClick={refetchCapcha}>
                  <CachedIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <FormHelperText error>{captchaMessage}</FormHelperText> */}
        </div>
      </>
    )
  }

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
          <CustomTextField
            placeholder={`${t('title')} *`}
            value={form.title}
            error={hasErrors('title')}
            helperText={getErrorMessage('title')}
            onChange={(value) => {
              handleForm(value || null, 'title')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomTextField
            placeholder={t('content')}
            value={form.content}
            error={hasErrors('content')}
            helperText={getErrorMessage('content')}
            onChange={(value) => {
              handleForm(value || null, 'content')
            }}
            rows={4}
          />
        </div>
      </>
    )
  }

  return (
    <>
      {!hiddenDialog && (
        <CustomDialog isOpen={isOpen} handleClose={onCloseDialog} title={t('submitAQuestion')}>
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
        handleAgain={resendQuestion}
      />
    </>
  )
}

export default DialogSendQuestion
