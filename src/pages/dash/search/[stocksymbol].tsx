import Head from 'next/head'
import CompanyComponent from 'components/dash/Search/Company'
import DashLayout from 'components/dash/layout/layout'
import { useRouter } from 'next/router'
import { getEsgData } from 'components/getCompanyESG'

const Company = () => {
  const router = useRouter()
  const stock_symbol = router.query.stocksymbol as string
  const company = getEsgData(stock_symbol)
  return (
    <>
      <Head>
        <title>{stock_symbol} - GreenInvesting</title>
        <meta name='description' content='Search of GreenInvesting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CompanyComponent company={company} />
    </>
  )
}

Company.getLayout = DashLayout

export default Company
