export interface IHomeDto {
  top_feedback: ITopFeedbackDto[]
  top_news: ITopNewsDto[]
  top_products: ITopProductDto[]
  top_promotes: ITopPromoteDto[]
}

interface ITopFeedbackDto {
  id: string
  name: string
  position: string
  rate: number
  content: string
  avatar: string | null
}

interface ITopNewsDto {
  id: string
  image: string | null
  title: string
  content: string
  createdDate: number
}

interface ITopProductDto {
  id: string
  title: string
  content: string
  product_image: string
}

interface ITopPromoteDto {
  id: string
  title: string
  content: string
  start: string
  end: string
  product_image: string
}

export interface ISignUpDto {
  code: string
  message: string
}
