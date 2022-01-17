import { DOMAIN } from '../config/domain'
import { postAsync } from '../utils/helpers/transportRequestor'
import { IOperationResult } from '../utils/IOperationResult'
import { IAccountDto } from './dtos/IAccountDto'
import { IAuthenticatedDto } from './dtos/IAuthenticatedDto'
import { ISignInDto } from './dtos/ISignInDto'

export const getAccount = async (): Promise<IAccountDto> => {
  return mockData
}

export const signIn = async (data: ISignInDto): Promise<IOperationResult<IAuthenticatedDto>> => {
  const apiUrl = 'https://hdbank-beta-api.bizbank.vn/api/v1/User/signin'
  return postAsync<ISignInDto, IAuthenticatedDto>(apiUrl, data)
}

export const sendSupportInfo = async (data: any): Promise<IOperationResult<any>> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/send-support-info`
  return postAsync<any, any>(apiUrl, data)
}

const mockData: IAccountDto = {
  id: 1,
  name: 'Nguyễn Hoàng Thùy Dương',
  dob: new Date('14/12/1997'),
  email: 'nguyenhoangthuyduong@gmail.com',
  phoneNumber: '039***551',
  identityNumber: '381***536',
  identityIssuedDate: new Date('14/08/2016'),
  address: {
    cityId: 1,
    cityName: 'TP.Hồ Chí Minh',
    districtId: 1,
    districtName: 'Quận 6',
    wardId: 1,
    wardName: 'Phường 5',
    street: '123 Hậu Giang',
    building: null,
  },
  permanentAddress: {
    cityId: 1,
    cityName: 'TP.Hồ Chí Minh',
    districtId: 1,
    districtName: 'Quận 6',
    wardId: 1,
    wardName: 'Phường 5',
    street: '123 Hậu Giang',
    building: null,
  },
}
