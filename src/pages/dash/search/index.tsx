import Head from 'next/head'
import SearchComponent from 'components/dash/Search'
import DashLayout from 'components/dash/layout/layout'

const Search = () => {
  return (
    <>
      <Head>
        <title>Search - GreenInvesting</title>
        <meta name='description' content='Search of GreenInvesting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SearchComponent />
    </>
  )
}

Search.getLayout = DashLayout

export default Search
