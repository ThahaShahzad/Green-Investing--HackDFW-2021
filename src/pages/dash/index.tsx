import Head from 'next/head'

import DashLayout from 'components/dash/layout/layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard - GreenInvesting</title>
        <meta name='description' content='Dashboard of GreenInvesting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div> Portfolio </div>
    </>
  )
}

Home.getLayout = DashLayout

export default Home
