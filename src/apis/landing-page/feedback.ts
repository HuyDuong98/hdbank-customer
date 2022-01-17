import { DOMAIN } from '../../config/domain'
import { getAsync, postAsync } from '../../utils/helpers/transportRequestor'
import { IOperationResult } from '../../utils/IOperationResult'
import { ISendFeedback } from '../dtos/landing-page/IFeedback'

export const getFeedbacks = async (page: number, pageSize: number): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/customer-feedback?page=${page}&pagesize=${pageSize}`
  return getAsync<any>(apiUrl)
}

export const sendFeedback = async (data: ISendFeedback): Promise<IOperationResult<any>> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/customer-feedback`
  return postAsync<ISendFeedback, any>(apiUrl, data)
}

export const getBannerFeedback = async (): Promise<string> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/customer-feedback-banner`
  return getAsync<string>(apiUrl)
}
