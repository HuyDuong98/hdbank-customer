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
import { polyfill } from 'interweave-ssr';

import LayoutLandingPage from '../components/layouts/LayoutLandingPage'
polyfill();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
const breakpoint = 768;
const xs = 600;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Project Execution Portal" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/SVN-FRIENDSFOREVER.OTF"
          as="font"
          crossOrigin=""
        />
        <title>HDBank</title>
      </Head>
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
  const setIsMobile = useSetRecoilState(isMobileState)
  const setIsXs = useSetRecoilState(isXsState)
  const setMobileDevice = useSetRecoilState(mobileDevice)

  useEffect(() => {
    handleTypeOfDevice();

    window.addEventListener('resize', () => handleTypeOfDevice())
    window.removeEventListener('resize', () => handleTypeOfDevice())
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
    <LayoutLandingPage>
      <Component {...pageProps} />
    </LayoutLandingPage>
  );
}