import { useTranslation } from "react-i18next";
import { DOMAIN } from "../../config/domain";
import { getAsync } from "../../utils/helpers/transportRequestor";

export const getFilter = async (
  keyword: string,
  langCode: string
): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/fillter-search?keyword=${keyword}&langcode=${langCode}`;
  return getAsync<any>(apiUrl);
};

export const getSearchData = async (
  keyword: string,
  langCode: string,
  type: string,
  page: number,
  pageSize: number
): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/search?keyword=${keyword}&langcode=${langCode}&type=${type}&page=${page}&pagesize=${pageSize}`;
  return getAsync<any>(apiUrl);
};

export const getSuggestion = async (): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-search`;
  return getAsync<any>(apiUrl);
};
