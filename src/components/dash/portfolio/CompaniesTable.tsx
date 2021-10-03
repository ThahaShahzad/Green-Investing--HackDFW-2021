import { Box, Table, Thead, Tbody, Checkbox, Tr, Th, Td, TableCaption } from '@chakra-ui/react'
import { ESGDataSet } from 'public/q1'

const CompaniesTable = () => {
  const ESGData = ESGDataSet.slice(0, 4)
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Table variant='simple'>
        <TableCaption>Based on the imported portfolio*</TableCaption>
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th>Environmental Rating</Th>
            <Th>Social Rating</Th>
            <Th>Governance Rating</Th>
            <Th>Total Rating</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {ESGData.map((company) => (
            <Tr key={company.esg_id}>
              <Td>{company.company_name}</Td>
              <Td>{company.environment_score}</Td>
              <Td>{company.social_score}</Td>
              <Td>{company.governance_score}</Td>
              <Td>{company.total}</Td>
              <Td>
                <Checkbox />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default CompaniesTable
