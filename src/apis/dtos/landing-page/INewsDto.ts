export interface INewsDto {
  highLight: IHighLightDto
  news: INewsItemDto[]
  page: number
  total_record: number
}

interface IHighLightDto {
  id: string | number
  title: string
  content: string
  create_date: string
  image: string[]
}

interface INewsItemDto {
  id: string
  title: string
  content: string
  create_date: string
  image: string
}

export interface INewsDetailDto {
  id: string | number
  title: string
  createdDate: string
  content: string
  copy_Link: string
  relatedNews: IRelatedNewsDto[]
}

interface IRelatedNewsDto {
  id: string
  title: string
  content: string
  createdDate: string
  image: string
}
