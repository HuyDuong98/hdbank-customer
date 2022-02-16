export interface IItemNeed {
  id: string
  label: string
  value: number
}
  
export interface ICustomNeed {
  monthlyincome: IItemNeed[]
  monthlyspent: IItemNeed[]
  demand: IItemNeed[]
}
  