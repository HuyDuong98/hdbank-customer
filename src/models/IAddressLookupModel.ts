export interface IAddressLookupModel {
  cities: ICityModel[]
  districts: IDistrictModel[]
  wards: IWardModel[]
}

interface ICityModel {
  id: number
  name: string
}

interface IDistrictModel {
  id: number
  name: string
  cityId: number
}

interface IWardModel {
  id: number
  name: string
  districtId: number
}
