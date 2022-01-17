export interface IFAQListDto {
  id: string | number
  title: string | null
  question_Count: string | number | null
  faqDetails: IFAQDetailDto[] | null
}

export interface IFAQDetailDto {
  id: string
  question_title: string
  description: string
}

export interface IFAQTipslDto {
  id: string
  title: string
  content: string
}

export interface ISendQuestionDto {
  userName: string | null
  phoneNumber: string | null
  email: string | null
  title: string | null
  content: string | null
  capcha: string | null
  islogin: string | null
  captchaId: string | null
}

export interface IMessgaeSendQuestionDto {
  statusCode: number
  isSuccess: boolean
  message: string
}

export interface ITopicsDto {
  item: string | number | null
  value: string | number
}
