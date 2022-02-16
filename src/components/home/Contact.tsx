import { FC, useState, useRef, useEffect } from 'react'
import { Grid, Typography, Button, Divider, IconButton, useMediaQuery, FormHelperText, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Style from '../../styles/components/home/Contact.module.scss'
import { getCapchaImage } from '../../apis/faq'
import { sendContact, getTopics } from '../../apis/landing-page/home'
import { useQuery, useMutation } from 'react-query'
import { createTheme } from '@material-ui/core/styles'
import Joi from 'joi'
import { useValidateForm } from '../../hooks/useValidateForm'
import { useSetRecoilState } from 'recoil'
import { homeContactRef } from '../../stores/sharedStores'

//component
import CustomTextField from '../shared/CustomTextField'
import CustomSelect from '../shared/CustomSelect'

//icons
import CachedIcon from '@material-ui/icons/Cached'

const LocationIcon = '/assets/icons/location.svg'
const PhoneIcon = '/assets/icons/phone.svg'
const FaqIcon = '/assets/icons/faq-outline.svg'
const SuccessIcon = '/assets/icons/success.svg'
const FailureIcon = '/assets/icons/failure.svg'
const SendIcon = '/assets/icons/send.svg'

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS,
  },
}

const myTheme = { other: 'stuff' }
const theme = createTheme({ ...myTheme, ...breakpointsValues })

const schema = Joi.object({
  name: Joi.string()
    .empty(null)
    .required()
    .pattern(
      new RegExp(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
      ),
    )
    .max(50)
    .messages({
      'any.required': 'nameNotBlank',
      'string.max': 'limitName',
      'string.pattern.base': 'nameNotValid',
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
  topic: Joi.string().empty(null).required().messages({
    'any.required': 'topicNotBlank',
  }),
  content: Joi.string()
    .empty(null)
    .required()
    .pattern(
      new RegExp(
        /^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
      ),
    )
    .messages({
      'any.required': 'contentNotBlank',
      'string.pattern.base': 'characterNotValid',
    }),
  capcha: Joi.string().empty(null).required().messages({
    'any.required': 'captchaNotBlank',
  }),
})

const Contact: FC = () => {
  const { t, i18n } = useTranslation()
  const setHomeContactRef = useSetRecoilState(homeContactRef)
  const ref = useRef<HTMLDivElement>(null)
  const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language

  const [listTopic, setListTopic] = useState([])
  const isLogin = useState(false)
  const [isRenderStatus, setIsRenderStatus] = useState(false)
  const [captchaMessage, setCapchaMessage] = useState('')
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true)
  const [status, setStatus] = useState({
    message: '',
    title: '',
    isSuccess: false,
  })

  const { data: topicData, isFetching: topicFetching } = useQuery(
    ['topicQuery', langCode],
    () => getTopics(langCode),
    {},
  )
  const { data: capchaData, refetch } = useQuery('capchaQuery', getCapchaImage)

  useEffect(() => {
    setHomeContactRef(ref)
  }, [ref])

  useEffect(() => {
    if (!topicData) return
    const temp = topicData.map((topic) => {
      return {
        name: topic.item,
        value: topic.value,
        renderItem: <span>{topic.item}</span>,
      }
    })
    setListTopic(temp)
  }, [topicData])

  const refetchCapcha = () => {
    refetch()
  }

  const isXsSize = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  })

  const [validatedKey, setValidatedKey] = useState<string>()
  const [form, setForm] = useState<any>({
    name: null,
    phone: null,
    email: null,
    topic: null,
    content: null,
    capcha: null,
  })

  useEffect(() => {
    checkSubmitEnable()
  }, [form.topic])

  const { errors, validateAll, eraseErrors } = useValidateForm(form, schema, validatedKey)

  const { mutateAsync } = useMutation(sendContact)

  const onChangeForm = (value, key) => {
    setValidatedKey(key)
    setForm((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const getErrorMessage = (field: string) => {
    const error = errors?.find((f) => f.field === field)
    return error ? t(error.message) : ''
  }

  const hasErrors = (field: string) => {
    const error = getErrorMessage(field)
    return !!error
  }

  const handleSendRequest = async () => {
    if (validateAll()) {
      setDisabledSubmit(true)
      const response = await mutateAsync({
        customerName: form.name,
        phoneNumber: form.phone,
        email: form.email,
        topicId: form.topic,
        question: form.content,
        captcha: form.capcha,
        captchaId: capchaData.capchaId,
        islogin: isLogin ? '1' : '0',
      })
      if (response.isSuccessful) {
        setIsRenderStatus(true)
        const { message, isSuccess } = response.successData
        setStatus({
          message: t('MESS27'),
          isSuccess,
          title: t('submittedSuccessfully'),
        })
      } else if (response.responseCode === -1) {
        setCapchaMessage(`Capcha ${t('MESS04')}`)
      } else {
        setIsRenderStatus(true)
        setStatus({
          message: t('MESS28'),
          isSuccess: false,
          title: t('submitFailed'),
        })
      }
    }
  }

  const checkSubmitEnable = () => {
    if (form.name && form.phone && form.capcha && form.content && form.topic && validateAll()) {
      setDisabledSubmit(false)
    } else {
      setDisabledSubmit(true)
    }
  }

  const renderText = () => {
    return (
      <Grid container className={Style.textWrap}>
        <Grid container direction="column" className={Style.titleWrap}>
          <Typography variant="h3">{t('contact')}</Typography>
          <span className={Style.subText}>{t('subContact')}</span>
          <Divider />
        </Grid>

        <Grid container className={Style.infoWrap}>
          <Grid container alignItems="center" className={Style.infoItem}>
            <img src={LocationIcon} />
            <span>{t('adressHDBank')}</span>
          </Grid>

          <Grid container alignItems="center" className={Style.infoItem}>
            <img src={PhoneIcon} />
            <span>{t('(84-28) 5413 7483')}</span>
          </Grid>

          <Grid container alignItems="center" className={Style.infoItem}>
            <img src={FaqIcon} />
            <span>{t('info@hdbank.com.vn')}</span>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const renderForm = () => {
    return (
      <Grid container className={Style.formWrap}>
        <Grid container spacing={isXsSize ? 0 : 3}>
          <Grid item sm={6} xs={12}>
            <CustomTextField
              placeholder={`${t('fullname')} *`}
              value={form.name}
              error={hasErrors('name')}
              helperText={getErrorMessage('name')}
              onChange={(value) => {
                onChangeForm(value || null, 'name')
              }}
              onKeyUp={checkSubmitEnable}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomTextField
              placeholder={`${t('phoneNumber')} *`}
              value={form.phone}
              error={hasErrors('phone')}
              helperText={getErrorMessage('phone')}
              onChange={(value) => {
                onChangeForm(value || null, 'phone')
              }}
              onKeyUp={checkSubmitEnable}
              type="number"
            />
          </Grid>
        </Grid>

        <Grid container spacing={isXsSize ? 0 : 3}>
          <Grid item sm={6} xs={12}>
            <CustomTextField
              placeholder={t('Email')}
              value={form.email}
              onChange={(value) => {
                onChangeForm(value || null, 'email')
              }}
              error={hasErrors('email')}
              helperText={getErrorMessage('email')}
              onKeyUp={checkSubmitEnable}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <CustomSelect
              placeholder={`--${t('chooseTopic')}--`}
              isCustomDisplayValue
              value={form.topic}
              options={listTopic}
              onKeyUp={checkSubmitEnable}
              onChange={(value) => {
                onChangeForm(value || null, 'topic')
              }}
              error={hasErrors('topic')}
              helperText={getErrorMessage('topic')}
            />
          </Grid>
        </Grid>

        <Grid container spacing={isXsSize ? 0 : 3}>
          <Grid item xs={12}>
            <CustomTextField
              placeholder={`${t('content')} *`}
              value={form.content}
              onChange={(value) => {
                onChangeForm(value || null, 'content')
              }}
              error={hasErrors('content')}
              helperText={getErrorMessage('content')}
              onKeyUp={checkSubmitEnable}
            />
          </Grid>
        </Grid>

        <Grid container spacing={isXsSize ? 0 : 3}>
          <Grid item lg={6} md={12} sm={6} xs={12}>
            <Grid container className={Style.captcha} justifyContent="space-between">
              <Grid item xs={6}>
                <Grid>
                  <CustomTextField
                    placeholder={`${t('capchaCode')} *`}
                    value={form.capcha}
                    onChange={(value) => {
                      onChangeForm(value || null, 'capcha')
                    }}
                    error={hasErrors('capcha')}
                    helperText={getErrorMessage('capcha')}
                    onKeyUp={checkSubmitEnable}
                  />
                  <FormHelperText error>{captchaMessage}</FormHelperText>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={10} className={Style.imgCapcha}>
                    <img src={capchaData?.captchBase64Data} alt="" />
                  </Grid>

                  <Grid item xs={2}>
                    <IconButton onClick={refetchCapcha} className={Style.btnCapcha}>
                      <CachedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={Style.btn}>
          <Button variant="contained" color="primary" onClick={handleSendRequest} disabled={disabledSubmit}>
            {t('send')}
          </Button>
        </Grid>
      </Grid>
    )
  }

  const renderStatus = () => {
    const { isSuccess, message, title } = status
    return (
      <Grid className={Style.statusWrap}>
        <Grid className={isSuccess ? Style.iconSuccess : Style.iconFailure}>
          {isSuccess ? <img src={SuccessIcon} /> : <img src={FailureIcon} />}
        </Grid>

        <Typography variant="h6" className={isSuccess ? Style.successTitle : Style.failureTitle}>
          {t(title)}
        </Typography>

        <span>{t(message)}</span>

        {!isSuccess && (
          <Grid className={Style.btn}>
            <Button variant="contained" color="primary" onClick={() => setIsRenderStatus(false)}>
              {t('doItAgain')}
            </Button>
          </Grid>
        )}
      </Grid>
    )
  }

  if (topicFetching) return <></>

  return (
    <div ref={ref}>
      <Grid container className={Style.contactWrap}>
        <Grid item md={6} sm={12} xs={12}>
          {renderText()}
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          {!isRenderStatus ? renderForm() : renderStatus()}
        </Grid>

        <Grid className={Style.icon}>
          <img src={SendIcon} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
