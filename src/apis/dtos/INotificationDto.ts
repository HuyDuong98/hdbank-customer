export interface INotificationDto extends Array<INotificationItemDto> {}

export interface INotificationItemDto {
  title: string
  sub: string
  time: string
  notice: string
  fileNumber: string
  new: boolean
  like: boolean
  content: IContentDto
}

interface IContentDto {
  rate: number
  comment: number
  description: string
  image: string
  text: string
}
