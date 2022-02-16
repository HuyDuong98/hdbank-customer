import { atom } from 'recoil'

export const lstCompareState = atom({
  key: 'lstCompareState',
  default: {
    isChoose: false,
    lstCard: [],
  },
})
