import { Box, Typography, Button, FormHelperText, Avatar, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomTextField from '../../components/shared/CustomTextField'
import Style from '../../styles/components/FormFeedback.module.scss'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import { useValidateForm } from '../../hooks/useValidateForm'
import Joi from 'joi'
import CustomDialogMessage from '../../components/shared/CustomDialogMessage'
import { IMessageModel } from '../../../models/Shared/IMessageModel'
import { useMutation } from 'react-query'
import { sendFeedback } from '../../apis/landing-page/feedback'
import CustomAvatar from '../../components/shared/CustomAvatar'

const schema = Joi.object({
  name: Joi.string()
    .empty(null)
    .pattern(
      new RegExp(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$/,
      ),
    )
    .required()
    .max(50)
    .messages({
      'any.required': 'nameNotBlank',
      'string.max': 'limitName',
      'string.pattern.base': 'nameNotValid',
    }),
  phone: Joi.string()
    .empty(null)
    .required()
    .length(10)
    .pattern(new RegExp(/(03|05|07|08|09)+([0-9]{8})\b/))
    .messages({
      'any.required': 'phoneNotBlank',
      'string.pattern.base': 'phoneNotValid',
      'string.length': 'phoneNotValid',
    }),
  star: Joi.number().empty(null).required().messages({
    'any.required': 'rateNotBlank',
  }),
  content: Joi.string().empty(null).max(500).required().messages({
    'any.required': 'reviewNotBlank',
    'string.max': 'contentLimit',
  }),
})

const simpleSchema = Joi.object({
  star: Joi.number().empty(null).required().messages({
    'any.required': 'rateNotBlank',
  }),
  content: Joi.string().empty(null).required().max(500).messages({
    'any.required': 'reviewNotBlank',
    'string.max': 'contentLimit',
  }),
})

const Feedback: FC = () => {
  const { t } = useTranslation()
  const [isLogin] = useState(false)
  const [validatedKey, setValidatedKey] = useState<string>()
  const [disabled, setDisabled] = useState<boolean>(true)
  const [form, setForm] = useState({
    name: null,
    phone: null,
    star: null,
    content: null,
  })

  const [simpleForm, setSimpleForm] = useState({
    star: null,
    content: null,
  })
  const [message, setMessage] = useState<IMessageModel>({
    isOpen: false,
    message: null,
    title: null,
    isSuccess: 'failed',
  })

  const { errors, validateAll, eraseErrors } = useValidateForm(
    isLogin ? simpleForm : form,
    isLogin ? simpleSchema : schema,
    validatedKey,
  )

  const handleChangeForm = (value, key) => {
    setValidatedKey(key)
    if (isLogin) {
      setSimpleForm({
        ...simpleForm,
        [key]: value,
      })
    } else {
      setForm({
        ...form,
        [key]: value,
      })
    }
  }

  const { mutateAsync } = useMutation(sendFeedback)

  const handleSendFeedback = async () => {
    if (validateAll()) {
      const response = await mutateAsync({
        fullname: isLogin ? 'Nguyễn Phạm Thùy Anh' : form.name || '',
        phonenumber: isLogin ? '0912345678' : form.phone || '',
        rate: isLogin ? `${simpleForm.star}` || '' : `${form.star}` || '',
        content: isLogin ? simpleForm.content || '' : form.content || '',
        isLogin: isLogin ? '1' : '0',
      })
      if (response.isSuccessful) {
        setForm({
          name: null,
          phone: null,
          star: null,
          content: null,
        })
        setSimpleForm({ star: null, content: null })
        eraseErrors()
        setMessage({
          ...message,
          isOpen: !message.isOpen,
          message: response.successData.message,
          title: t('submittedSuccessfully'),
          isSuccess: 'success',
        })
      } else {
        setMessage({
          ...message,
          isOpen: true,
          message: 'submitFailed',
          title: t('submitFailed'),
          isSuccess: 'warning',
        })
      }
    }
  }

  const handleClose = () => {
    setMessage({
      ...message,
      isOpen: !message.isOpen,
    })
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? t(error.message) : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const disabledSubmit = () => {
    if (form.name && form.phone && form.content && validateAll()) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <>
      <Box>
        {!isLogin ? (
          <>
            <CustomTextField
              placeholder={t('firstAndLastName')}
              value={form.name}
              onChange={(value) => handleChangeForm(value || null, 'name')}
              error={hasErrors('name')}
              helperText={getErrorMessage('name')}
              onKeyUp={disabledSubmit}
            />
            <CustomTextField
              placeholder={t('phoneNumber')}
              value={form.phone}
              onChange={(value) => handleChangeForm(value || null, 'phone')}
              error={hasErrors('phone')}
              helperText={getErrorMessage('phone')}
              onKeyUp={disabledSubmit}
            />
          </>
        ) : (
          <>
            <Grid container alignItems="center" direction="column">
              <CustomAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              <Typography variant="h6" color="primary">
                Nguyễn Phạm Thùy Anh
              </Typography>
            </Grid>
          </>
        )}

        <Box className={Style.ratingWrapper}>
          <Box mb={2}>
            <Typography>{t('rateYourSatisfaction')}</Typography>
          </Box>
          <Rating
            name="feedback-rating"
            value={isLogin ? simpleForm.star : form.star}
            onChange={(e, value) => handleChangeForm(value, 'star')}
            onKeyUp={disabledSubmit}
            className={Style.rating}
            emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
            icon={<StarRoundedIcon fontSize="inherit" />}
          />
          {hasErrors('star') && <FormHelperText error> {getErrorMessage('star')}</FormHelperText>}
        </Box>
        <CustomTextField
          placeholder={t('reviews')}
          value={isLogin ? simpleForm.content : form.content}
          onChange={(value) => handleChangeForm(value || null, 'content')}
          error={hasErrors('content')}
          helperText={getErrorMessage('content')}
          onKeyUp={disabledSubmit}
        />
        <Box mt={3}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSendFeedback} disabled={disabled}>
            {t('submit')}
          </Button>
        </Box>
      </Box>
      <CustomDialogMessage {...message} handleClose={handleClose} handleAgain={handleSendFeedback} />
    </>
  )
}
export default Feedback
