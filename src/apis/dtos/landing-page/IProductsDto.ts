export interface IProductsDto {
  id: number
  title: string
  image: string
  transaction_limit: string
  annual_fee: string
  features: string[]
  preferential: string[]
}

// PRODUCT DETAIL =========== START ===========
export interface IProductDetailDto {
  info: IInfo
  feedback: IFeedback[]
  faQs: IFaq[]
  promotes: IPromotes[]
}

interface IInfo {
  id: number
  title: string
  prod_code: string
  short_description: string
  prod_description: string
  hyperlink: string
  pc_mode: string
  mobile_mode: string
}

interface IFeedback {
  id: string
  name: string
  position: string
  rate: number
  content: string
  avatar: string | null
}

interface IFaq {
  id: string
  title: string
  content: string
}

interface IPromotes {
  id: number
  title: string
  content: string
  finish_date: string
  pc_mode: string
  mobile_mode: string
}
// PRODUCT DETAIL =========== END ===========

// PRODUCT COMPARE =========== START ===========
export interface IProductCompareDto extends Array<IProductCompareItemDto> {}

interface IProductCompareItemDto {
  id: string | number
  title: string
  pc_mode: string
  mobile_mode: string
  criterias: ICriteria[]
}

interface ICriteria {
  content: string
  criteria_id: string | number
  prod_id: string | number
  criteria_name: string
}
// PRODUCT COMPARE =========== END ===========

// PRODUCT COMPARE =========== START ===========
export interface IListOtherProductDto extends Array<IOtherProductDto> {}

interface IOtherProductDto {
  id: string | number
  title: string
  pc_mode: string
  mobile_mode: string
  desciption: string
}

// PRODUCT COMPARE =========== END ===========
