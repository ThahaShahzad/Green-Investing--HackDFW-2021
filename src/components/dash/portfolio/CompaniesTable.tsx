import { Box, Table, Thead, Tbody, Checkbox, Tr, Th, Td, TableCaption } from '@chakra-ui/react'

const CompaniesTable = () => {
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
          <Tr>
            <Td>Goldman Sachs</Td>
            <Td>500</Td>
            <Td>400</Td>
            <Td>300</Td>
            <Td> 1100</Td>
            <Td>
              <Checkbox />
            </Td>
          </Tr>
          <Tr>
            <Td>Amazon</Td>
            <Td>500</Td>
            <Td>400</Td>
            <Td>300</Td>
            <Td> 1100</Td>
            <Td>
              <Checkbox />
            </Td>
          </Tr>
          <Tr>
            <Td>Match</Td>
            <Td>500</Td>
            <Td>400</Td>
            <Td>300</Td>
            <Td> 1100</Td>
            <Td>
              <Checkbox />
            </Td>
          </Tr>
          <Tr>
            <Td>StateFarm</Td>
            <Td>500</Td>
            <Td>400</Td>
            <Td>300</Td>
            <Td> 1100</Td>
            <Td>
              <Checkbox />
            </Td>
          </Tr>

          <Tr>
            <Td>McKesson</Td>
            <Td>500</Td>
            <Td>400</Td>
            <Td>300</Td>
            <Td> 1100</Td>
            <Td>
              <Checkbox />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default CompaniesTable
