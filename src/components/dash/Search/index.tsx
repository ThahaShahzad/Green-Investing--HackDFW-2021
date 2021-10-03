import { Box } from '@chakra-ui/layout'
import CompaniesTable from 'components/dash/Search/CompaniesTable'

const Search = () => {
  return (
    <Box as='main' p='8' textAlign='center' overflowY='scroll'>
      <CompaniesTable />
    </Box>
  )
}

export default Search
