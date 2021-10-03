import Head from 'next/head'

import LandingLayout from 'components/landing/layout'
import { Features, Hero } from 'components/landing'
import { LandingPageDetails } from 'public/LandingDeatils'

const Landing = () => {
  return (
    <>
      <Head>
        <title>Green Investing</title>
        <meta
          name='description'
          content='Green Investing is a way to make sure your portfolio can have a positive impact on the world. By choosing companies with higher esg ratings, you can make sure your portfolio stays green.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero {...LandingPageDetails.Hero} />
      <Features {...LandingPageDetails.Features} />
    </>
  )
}

Landing.getLayout = LandingLayout

export default Landing
