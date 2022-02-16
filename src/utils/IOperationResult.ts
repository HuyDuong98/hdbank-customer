export interface IOperationResult<T> {
  isSuccessful: boolean
  responseCode: number
  isSuccess: boolean
  responseMessage: string
  status: number
  successData: T
}
