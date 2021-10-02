import Head from 'next/head'

import DashLayout from 'components/dash/layout/layout'
import PortfolioComponent from 'components/dash/portfolio'

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Dashboard - GreenInvesting</title>
        <meta name='description' content='Dashboard of GreenInvesting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PortfolioComponent />
    </>
  )
}

Portfolio.getLayout = DashLayout

export default Portfolio
