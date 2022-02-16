import { IFAQListModal } from '@models/IFAQ'
import { atom } from 'recoil'

export const listFAQState = atom<IFAQListModal[]>({
  key: 'listFAQState',
  default: [],
})
