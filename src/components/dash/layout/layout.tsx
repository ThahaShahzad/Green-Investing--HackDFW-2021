import { Grid } from '@chakra-ui/react'
import { LandingPageDetails } from 'public/LandingDeatils'

import LeftSideNav from 'components/dash/layout/LeftSideNav'
import TopNav from 'components/dash/layout/TopNav'

const DashLayout: React.FC = ({ children }) => {
  return (
    <Grid
      h='100vh'
      autoFlow={{ base: 'column', lg: 'row' }}
      templateRows={{ base: '75px auto 75px', lg: '10% 90%' }}
      templateColumns={{ base: 'repeat(1, minmax(0, 1fr))', lg: '100px auto', xl: '200px auto' }}>
      <TopNav />
      <LeftSideNav {...LandingPageDetails.Header} />
      {children}
    </Grid>
  )
}

export default DashLayout
