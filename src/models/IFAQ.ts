export interface IFAQListModal {
  id: string | number
  title: string | null
  question_Count: string | number | null
  faqDetails: IFAQDetail[] | null
}

export interface IFAQDetail {
  id: string | null
  question_title: string | null
  description: string | null
}

export interface IFAQFormQuestion {
  name: string | null
  phone: string | null
  email: string | null
  title: string | null
  content: string | null
  captcha: string | null
}

export interface IOptionTopic {
  name: string | number | null
  value: string | number
  renderItem: string | number | null
}
