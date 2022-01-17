import { getAsync } from '../../utils/helpers/transportRequestor'
import {
  IProductsDto,
  IProductDetailDto,
  IProductCompareDto,
  IListOtherProductDto,
} from '../dtos/landing-page/IProductsDto'
import { DOMAIN } from '../../config/domain'

export const getListProduct = async (langCode: string, page: number, pageSize: number): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/product-list?langcode=${langCode}&page=${page}&pagesize=${pageSize}`
  return getAsync<IProductsDto>(apiUrl)
}

export const getListProductByFilter = async (langCode: any, page: any, pageSize: any, filterId: any): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/products-by-filter?langcode=${langCode}&listFilterId=${filterId}&page=${page}&pagesize=${pageSize}`
  return getAsync<IProductsDto>(apiUrl)
}

export const getFilterProduct = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/products-get-filter?langcode=${langCode}`
  return getAsync<IProductsDto>(apiUrl)
}

export const getProductDetail = async (langCode: string, id: number | string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-product-detail?productId=${id}&langCode=${langCode || 'vi'}`
  return getAsync<IProductDetailDto>(apiUrl)
}

export const getListCompare = async (langCode: string, lstCardID: any[]): Promise<any> => {
  const getParam =
    lstCardID.length === 2
      ? `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}`
      : `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}&Product3=${lstCardID[2]}`
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/compare-products?Langcode=${langCode}&${getParam}`
  return getAsync<IProductCompareDto>(apiUrl)
}

export const getListOtherProduct = async (langCode: string, lstCardID: any[]): Promise<any> => {
  const getParam =
    lstCardID.length === 2
      ? `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}`
      : `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}&Product3=${lstCardID[2]}`

  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/other-products-compare?Langcode=${langCode}&${getParam}`
  return getAsync<IListOtherProductDto>(apiUrl)
}

export const getProductForCustomerJourney = async (
  langCode: string,
  monthlyincome: string,
  monthlyspent: string,
  demand: string,
  page: number,
  pageSize: number,
): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/customer-journey?langcode=${langCode}&monthlyincome=${monthlyincome}&monthlyspent=${monthlyspent}&demand=${demand}&page=${page}&pageSize=${pageSize}`
  return getAsync<any>(apiUrl)
}

export const getSelectItemCustomerJourney = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/customer-journey/get-selected-item?langcode=${langCode}`
  return getAsync<any>(apiUrl)
}
