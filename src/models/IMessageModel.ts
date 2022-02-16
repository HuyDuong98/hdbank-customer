export interface IMessageModel {
  isOpen: boolean
  message: string | null
  title: string | null
  isSuccess: 'success' | 'failed' | 'warning'
}
