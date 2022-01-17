export interface IPromotionsDto {
  highlight: IPromotionDto
  listPromotions: IPromotionDto[]
}

interface IPromotionDto {
  productID: number
  title: string
  start: string
  finish: string
  applicable: string
  image: string[]
  type: string | null
}

export interface IPromotionsDetailDto {
  promotionName: string
  createdDate: string
  content: string | JSX.Element
  linkConnect: string
  otherPromotions: IOtherPromotionslDto[]
}

interface IOtherPromotionslDto {
  id: string
  propotionName: string
  content: string | JSX.Element
  promotionImage: string
}

export interface IPromoterFilterDto {
  item: string
  value: string
}
