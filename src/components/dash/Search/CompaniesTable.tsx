import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'
import { TiArrowUnsorted } from 'react-icons/ti'
import { getESGSort, sortByEnum } from 'components/getESGSort'
import { useState } from 'react'
import { Link } from 'components/custom'
import { ESGDataSet } from 'public/q1'
import { useRouter } from 'next/router'

const CompaniesTable = () => {
  const router = useRouter()
  const [SortedESGData, setSortedESGData] = useState(ESGDataSet)
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Table>
        <TableCaption>Based on the imported portfolio*</TableCaption>
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th cursor='pointer' onClick={() => setSortedESGData([...getESGSort(sortByEnum['ENV'])])}>
              Environmental Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSortedESGData([...getESGSort(sortByEnum['SOC'])])}>
              Social Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSortedESGData([...getESGSort(sortByEnum['GOV'])])}>
              Governance Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th cursor='pointer' onClick={() => setSortedESGData([...getESGSort(sortByEnum['ESG'])])}>
              Total Rating <TiArrowUnsorted className='inline' />
            </Th>
            <Th onClick={() => router.reload()}>
              <GrPowerReset className='w-4 h-4' />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {SortedESGData.map((company) => (
            <Tr key={company.esg_id}>
              <Td>
                <Link to={`/dash/search/${company.stock_symbol}`} textDecorationLine='underline'>
                  {company.company_name}
                </Link>
              </Td>
              <Td>{company.environment_score}</Td>
              <Td>{company.social_score}</Td>
              <Td>{company.governance_score}</Td>
              <Td>{company.total}</Td>
              <Td className='text-[#57a99a] hover:text-blue-600'>
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
