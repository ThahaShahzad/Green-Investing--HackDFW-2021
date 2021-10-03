import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { NextPage } from 'next'
import Chakra from './Chakra'
import AppWrapper from 'components/custom/AppWrapper'

type Page<P = {}> = NextPage<P> & {
  getLayout?: any
}

type Props = AppProps & {
  Component: Page
}
const EmptyLayout: React.FC = ({ children }) => {
  return <>{children}</>
}
function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.getLayout || EmptyLayout

  return (
    <Chakra cookies={pageProps.cookies}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </Chakra>
  )
}

export default MyApp
