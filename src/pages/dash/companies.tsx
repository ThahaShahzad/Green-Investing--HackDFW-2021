import Head from 'next/head'

import DashLayout from 'components/dash/layout/layout'
import CompaniesComponent from 'components/dash/companies'
const Companies = () => {
  return (
      <>
        <Head>
          <title>Companies - GreenInvesting</title>
          <meta name='description' content='Dashboard of GreenInvesting' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <CompaniesComponent />
      </>
    )
}

Companies.getLayout = DashLayout

export default Companies
