import { postAsync, getAsync } from "../../utils/helpers/transportRequestor";
import { IHomeDto } from "../dtos/landing-page/IHomeDto";
import { DOMAIN } from "../../config/domain";

export const getHomePage = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-home?langcode=${langCode}`;
  return getAsync<IHomeDto>(apiUrl);
};

export const sendOTP = async (phone: any): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/sendOtp?phonenumber=${phone}`;
  return getAsync<any>(apiUrl);
};

export const getAdvertise = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/banner-home?langcode=${langCode}`;
  return getAsync<any>(apiUrl);
};

export const sendContact = async (data: any): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/landingpage-contact`;
  return postAsync<any, any>(apiUrl, data);
};

export const getTopics = async (langCode: string): Promise<any> => {
  const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/gettopics?langcode=${langCode}`;
  return getAsync<any>(apiUrl);
};
