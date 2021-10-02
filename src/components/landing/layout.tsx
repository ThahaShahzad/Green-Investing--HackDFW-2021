import { Navbar, Footer } from 'components/landing'
import { LandingPageDetails } from 'public/LandingDeatils'
import Head from 'next/head'

const LandingLayout: React.FC = ({ children }) => {
  return (
    <div className='font-display bg-inverse p-10'>
      <Head>
        <title>QuranTracker</title>
        <meta name='description' content='Landing page of QuranTracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar {...LandingPageDetails.Header} />
      {children}
      <Footer {...LandingPageDetails.Footer} />
    </div>
  )
}

export default LandingLayout
