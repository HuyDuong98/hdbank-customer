export interface IAccountDto {
  id: number
  name: string
  dob: Date
  email: string
  phoneNumber: string
  identityNumber: string
  identityIssuedDate: Date
  address: IAccountAddressDto
  permanentAddress: IAccountAddressDto
}

interface IAccountAddressDto {
  cityId: number
  cityName: string
  districtId: number
  districtName: string
  wardId: number
  wardName: string
  street: string
  building: string | null
}
