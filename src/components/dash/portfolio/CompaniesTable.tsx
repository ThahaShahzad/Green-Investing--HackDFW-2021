import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react'

const CompaniesTable = () => {
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Table variant='simple'>
        <TableCaption>Bases on the imported portfolio*</TableCaption>
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th isNumeric>Environmental Rating</Th>
            <Th isNumeric>Social Rating</Th>
            <Th isNumeric>Governance Rating</Th>
            <Th isNumeric>Total Rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Goldman Sachs</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>400</Td>
            <Td isNumeric>300</Td>
            <Td isNumeric> 1100</Td>
          </Tr>
          <Tr>
            <Td>Amazon</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>400</Td>
            <Td isNumeric>300</Td>
            <Td isNumeric> 1100</Td>
          </Tr>
          <Tr>
            <Td>Match</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>400</Td>
            <Td isNumeric>300</Td>
            <Td isNumeric> 1100</Td>
          </Tr>
          <Tr>
            <Td>StateFarm</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>400</Td>
            <Td isNumeric>300</Td>
            <Td isNumeric> 1100</Td>
          </Tr>

          <Tr>
            <Td>McKesson</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>400</Td>
            <Td isNumeric>300</Td>
            <Td isNumeric> 1100</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default CompaniesTable
