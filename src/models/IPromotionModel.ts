export interface IPromotionsModel {
  highlight: IPromotionItemModel
  listPromotions: IPromotionItemModel[]
  page: number
  total_record: number
}

export interface IPromotionItemModel {
  id: number
  title: string
  start: string
  finish: string
  content: string
  pc_mode: string
  mobile_mode: string
  type: string | null
  label_type: string
  label_text: string
}
