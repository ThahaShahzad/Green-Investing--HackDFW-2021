import { Box, Heading } from '@chakra-ui/react'
import CompaniesTable from './CompaniesTable'
import ESGRatingCard from './ESGRatingCard'

const Portfolio = () => {
  return (
    <Box as='main' p='8' textAlign='center' overflow='scroll'>
      <Heading size='lg' textAlign='left'>
        Account Summary
      </Heading>
      <ESGRatingCard />
      <CompaniesTable />
    </Box>
  )
}

export default Portfolio
