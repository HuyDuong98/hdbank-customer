import { atom } from 'recoil'

export const sampleState = atom({
  key: 'sampleState',
  default: 1,
})

export const isMobileState = atom({
  key: 'isMobileState',
  default: false,
})

export const mobileDevice = atom({
  key: 'mobileDevice',
  default: {
    width: 0,
    height: 0,
  },
})

export const homeContactRef = atom({
  key: 'homeContactRef',
  default: <any>{},
  dangerouslyAllowMutability: true,
})

export const isXsState = atom({
  key: 'isXsSize',
  default: false,
})
