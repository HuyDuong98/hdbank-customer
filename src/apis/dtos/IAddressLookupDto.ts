export interface IAddressLookupDto {
  cities: ICityDto[]
  districts: IDistrictDto[]
  wards: IWardDto[]
}

interface ICityDto {
  id: number
  name: string
}

interface IDistrictDto {
  id: number
  name: string
  cityId: number
}

interface IWardDto {
  id: number
  name: string
  districtId: number
}
