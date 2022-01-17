export interface ISitemapDto extends Array<ISitemapItemDto> {}

interface ISitemapItemDto {
  id: string
  title: string
  itemsChild: IItemsChildDto[]
}

interface IItemsChildDto {
  id: string
  itemText: string
  value: string
}
