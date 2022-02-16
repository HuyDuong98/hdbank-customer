import '../styles/common/index.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../config/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FC, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { isMobileState, mobileDevice, isXsState } from '../stores/sharedStores'
import '../styles/common/App.scss'
import '../config/i18next'
import 'swiper/swiper.scss'
import { polyfill } from 'interweave-ssr'
import LayoutLandingPage from '../components/layouts/LayoutLandingPage'
import HeadPage from '../components/head'
import Script from 'next/script'
import { useTranslation } from 'react-i18next'
import { getCookie } from '@utils/helpers/cookieHelpers'

polyfill()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
const breakpoint = 768
const xs = 600

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadPage />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Wrapper Component={Component} pageProps={pageProps} />
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

function Wrapper({ Component, pageProps }) {
  const { i18n } = useTranslation()
  const setIsMobile = useSetRecoilState(isMobileState)
  const setIsXs = useSetRecoilState(isXsState)
  const setMobileDevice = useSetRecoilState(mobileDevice)
  const language = getCookie('UserLanguage')

  useEffect(() => {
    i18n.changeLanguage(language || 'vn')
    handleTypeOfDevice()
    window.addEventListener('resize', () => handleTypeOfDevice())
    return () => window.removeEventListener('resize', () => handleTypeOfDevice())
  }, [])

  const handleTypeOfDevice = () => {
    const widthScreen = window.innerWidth
    const heightScreen = window.innerHeight
    if (widthScreen < breakpoint) {
      setIsMobile(true)
      setMobileDevice({ width: widthScreen, height: heightScreen })
    } else setIsMobile(false)

    if (widthScreen < xs) {
      setIsXs(true)
    } else setIsXs(false)
  }

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                            var chatbox = document.getElementById('fb-customer-chat');
                            chatbox.setAttribute("page_id", "267351840830499");
                            chatbox.setAttribute("attribution", "biz_inbox");
                            `,
        }}
      />
      {/* <!-- Your SDK code --> */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                            window.fbAsyncInit = function () {
                                FB.init({
                                    xfbml: true,
                                    version: 'v12.0'
                                });
                            };
    
                            (function (d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s); js.id = id;
                                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                                fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));
                            `,
        }}
      />
      <LayoutLandingPage>
        <Component {...pageProps} />
      </LayoutLandingPage>
    </>
  )
}
