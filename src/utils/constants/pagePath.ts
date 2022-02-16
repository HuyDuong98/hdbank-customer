export const pagePath = {
  login: "/login",
  register: "/register",
  forgotPass: "/forgot-password",

  //account
  personalInfo: "/app/account/personal-info",
  changePassword: "/app/account/change-password",
  changePhoneNumber: "/app/account/change-phone-number",
  changeEmail: "/app/account/change-email",
  changeAddress: "/app/account/change-address",
  bankAccount: "/app/account/bank-account",
  addBankAccount: "/app/account/add-bank-account",
  job: "/app/account/job",
  notification: "/app/account/notification",
  companyAddress: "/app/account/company-address",
  referenceInfo: "/app/account/reference-info",
  addReferenceInfo: "/app/account/add-reference-info",
  updateIdentity: "/app/account/update-identity",

  //self-service
  dailyTransactionLimit: "/app/self-service/card-setting",
  cardList: "/app/self-service/card-list",
  cardReplacement: "/app/self-service/card-replacement",
  cardholderInfo: "/app/self-service/cardholder",
  updateAddress: "/app/self-service/update-address",
  updateEmail: "/app/self-service/update-email",
  updateIdentitySelfService: "/app/self-service/update-identity",
  securityQuestion: "/app/self-service/security-question",
  changeLimit: "/app/self-service/credit-limit",
  changePinCode: "/app/self-service/change-pin",
  transactionHistory: "/app/self-service/transaction-history",
  getStatement: "/app/self-service/get-statement",
  dashboard: "/app/self-service/dashboard",
  closeCard: "/app/self-service/close-card",

  //recurrent payment
  recurrentPayment: "/app/self-service/recurrent-payment/statement",
  paymentElectric: "/app/self-service/recurrent-payment/electric",
  paymentWatter: "/app/self-service/recurrent-payment/watter",

  landingPage: "/",
  productPage: "/product",
  compareProductsPage: "/product/compare",
  promotion: "/promotion",
  news: "/news",
  sitemap: "/sitemap",
  customerJourney: "/customer-journey",
  faq: "/faq",
  search: "/search",
  feedback: "/feedback",

  error400: "/error/400",
  error401: "/error/401",
  error404: "/error/404",
  error500: "/error/500",
};

export const pageNamePage = {
  login: {
    vn: "Đăng nhập",
    en: "Login",
  },
  register: {
    vn: "Đăng ký",
    en: "Register",
  },
  forgotPass: {
    vn: "Quên mật khẩu",
    en: "Forgot password",
  },

  //account
  personalInfo: {
    vn: "Thông tin",
    en: "Information",
  },
  changePassword: {
    vn: "Đổi mật khẩu",
    en: "Change password",
  },
  changePhoneNumber: {
    vn: "Đổi số điện thoại",
    en: "Change phone",
  },
  changeEmail: {
    vn: "Đổi email",
    en: "Change email",
  },
  changeAddress: {
    vn: "Đổi địa chỉ",
    en: "Change address",
  },
  bankAccount: {
    vn: "Tài khoản ngân hàng",
    en: "Bank account",
  },
  addBankAccount: {
    vn: "Thêm tài khoản ngân hàng",
    en: "Add bank account",
  },
  job: {
    vn: "Việc làm",
    en: "Job",
  },
  notification: "Notification",
  companyAddress: "Company address",
  referenceInfo: "Reference information",
  addReferenceInfo: "Add reference information",
  updateIdentity: "Update identity",

  //self-service
  dailyTransactionLimit: "Card setting",
  cardList: "Card list",
  cardReplacement: "Card replacement",
  cardholderInfo: "Card holder",
  updateAddress: "Update address",
  updateEmail: "Update email",
  updateIdentitySelfService: "Update identity",
  securityQuestion: "Security question",
  changeLimit: "Credit limit",
  changePinCode: "Change pin",
  transactionHistory: "Transaction history",
  getStatement: "Get statement",
  dashboard: "Dashboard",
  closeCard: "Close card",

  //recurrent payment
  recurrentPayment: "Statement",
  paymentElectric: "Electric",
  paymentWatter: "Watter",

  landingPage: {
    vn: "Trang chủ",
    en: "Home",
  },
  productPage: {
    vn: "Sản phẩm",
    en: "Products",
  },
  compareProductsPage: {
    vn: "So sánh",
    en: "Compare",
  },
  promotion: {
    vn: "Khuyến mại",
    en: "Promotions",
  },
  news: {
    vn: "Tin tức",
    en: "News",
  },
  sitemap: {
    vn: "Sơ đồ",
    en: "Sitemap",
  },
  customerJourney: {
    vn: "Hành trình",
    en: "Customer journey",
  },
  faq: {
    vn: "FAQ",
    en: "FAQ",
  },
  search: {
    vn: "Tìm kiếm",
    en: "Search results",
  },
  feedback: {
    vn: "Phản hồi",
    en: "Feedback",
  },

  error400: {
    vn: "Lỗi",
    en: "Error",
  },
  error401: {
    vn: "Lỗi",
    en: "Error",
  },
  error404: {
    vn: "Lỗi",
    en: "Error",
  },
  error500: {
    vn: "Lỗi",
    en: "Error",
  },
};

interface ReversePagePath {
  [path: string]: string;
}
export const getReversePagePath = () => {
  let objPath: ReversePagePath = {};
  for (const pro in pagePath) {
    objPath[pagePath[pro]] = pro;
  }
  return objPath;
};
