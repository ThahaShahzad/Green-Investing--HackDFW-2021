import { Box, Heading } from '@chakra-ui/react'
import CompaniesTable from '../portfolio/CompaniesTable'
import FilterBar from './FilterBar'

const Companies = () => {
  return (
    <Box as='main' p='8' textAlign='center'>
      <Heading size='lg' textAlign='left'>
        Company Ratings
      </Heading>
      {/* <FilterBar /> */}
      <CompaniesTable />
    </Box>
  )
}

export default Companies
