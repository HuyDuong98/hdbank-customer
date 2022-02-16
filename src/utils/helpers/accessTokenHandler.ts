import { useRecoilValue } from 'recoil'
import { captchaTokenStore } from 'stores/CaptchaStores'

export const requestAccessToken = async (): Promise<string> => {
  return ''
}

export const requestCaptchaToken = async (): Promise<string> => {
  return localStorage.getItem('captchaToken') || ''
}
