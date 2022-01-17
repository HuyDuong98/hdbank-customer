import { atom } from 'recoil'
import { IFAQListModal } from '../../models/Landing/IFAQ'

export const listFAQState = atom<IFAQListModal[]>({
  key: 'listFAQState',
  default: [],
})
