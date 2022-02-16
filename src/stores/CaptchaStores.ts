import { atom } from 'recoil'

export const captchaTokenStore = atom<string>({
  key: 'captchaToken',
  default: '',
})
