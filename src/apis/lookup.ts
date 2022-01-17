import { IAddressLookupDto } from './dtos/IAddressLookupDto'

export const getAddressLookup = async (): Promise<IAddressLookupDto> => {
  return mockData
}

const mockData: IAddressLookupDto = {
  cities: [
    {
      id: 1,
      name: 'TP.Hồ Chí Minh',
    },
    {
      id: 2,
      name: 'Hà Nội',
    },
  ],
  districts: [
    {
      id: 1,
      name: 'Quận 1',
      cityId: 1,
    },
    {
      id: 2,
      name: 'Quận 2',
      cityId: 1,
    },
    {
      id: 3,
      name: 'Hoàn Kiếm',
      cityId: 2,
    },
    {
      id: 4,
      name: 'Cầu Giấy',
      cityId: 2,
    },
  ],
  wards: [
    {
      id: 1,
      name: 'Phường  1',
      districtId: 1,
    },
    {
      id: 2,
      name: 'Phường 2',
      districtId: 2,
    },
    {
      id: 3,
      name: 'Chương Dương',
      districtId: 3,
    },
    {
      id: 4,
      name: 'Cửa Đông',
      districtId: 4,
    },
  ],
}
