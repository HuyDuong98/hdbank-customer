import { DOMAIN } from '../config/domain'
import { getAsync } from '../utils/helpers/transportRequestor'

export const sendOTP = async (phone: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/sendOtp?phonenumber=${phone}`
  return getAsync<any>(apiUrl)
}

export const verifyOTP = async (phone: string, otp: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/verifyOtp?phonenumber=${phone}&otp=${otp}`
  return getAsync<any>(apiUrl)
}
