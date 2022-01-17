import { DOMAIN } from '../config/domain'
import { getAsync, postAsync } from '../utils/helpers/transportRequestor'
import { IOperationResult } from '../utils/IOperationResult'
import { IFAQListDto, IMessgaeSendQuestionDto, ISendQuestionDto, ITopicsDto, IFAQTipslDto } from './dtos/IFAQDto'

export const getListFaq = async (langCode: string): Promise<IFAQListDto[]> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/faqs?langcode=${langCode}`
  return getAsync<IFAQListDto[]>(apiUrl)
}

export const getFaqDetail = async (langCode: string, id: string | number): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/faqs/detail?id=${id}&langcode=${langCode}` //LandingPage/faqs/detail?id=1&langcode=vi
  return getAsync<any>(apiUrl)
}

export const sendQuestion = async (data: ISendQuestionDto): Promise<IOperationResult<IMessgaeSendQuestionDto>> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/send-question`
  return postAsync<ISendQuestionDto, IMessgaeSendQuestionDto>(apiUrl, data)
}

export const getTopics = async (): Promise<ITopicsDto[]> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/gettopics`
  return getAsync<ITopicsDto[]>(apiUrl)
}

export const getFAQTips = async (keyword: string): Promise<IFAQTipslDto[]> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/send-support-info?keyword=${encodeURI(keyword)}`
  return getAsync<IFAQTipslDto[]>(apiUrl)
}

export const getCapchaImage = async (): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/get-captcha`
  return getAsync<any>(apiUrl)
}
