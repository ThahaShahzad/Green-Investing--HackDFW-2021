import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { TiArrowUnsorted } from 'react-icons/ti'
import { getESGSort, sortByEnum } from 'components/getESGSort'
import { useState } from 'react'
import { Link } from 'components/custom'

const CompaniesTable = () => {
  const [sort, setSort] = useState<sortByEnum>(sortByEnum['ESG'])
  const SortedESGData = getESGSort(sort)
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Table variant='unstyled'>
        <TableCaption>Bases on the imported portfolio*</TableCaption>
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th cursor='pointer' onClick={() => setSort(sortByEnum['ENV'])}>
              Environmental Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSort(sortByEnum['SOC'])}>
              Social Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSort(sortByEnum['GOV'])}>
              Governance Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSort(sortByEnum['ESG'])}>
              Total Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {SortedESGData.map((company) => (
            <Tr>
              <Td>
                <Link to={`/dash/search/${company.stock_symbol}`} textDecorationLine='underline'>
                  {company.company_name}
                </Link>
              </Td>
              <Td isNumeric>{company.environment_score}</Td>
              <Td isNumeric>{company.social_score}</Td>
              <Td isNumeric>{company.governance_score}</Td>
              <Td isNumeric>{company.total}</Td>
              <Td isNumeric className='text-[#57a99a] hover:text-blue-600'>
                <BsPlus className='w-6 h-6' />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default CompaniesTable
