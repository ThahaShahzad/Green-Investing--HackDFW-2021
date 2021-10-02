import { Box, Flex, Heading } from '@chakra-ui/react'

const FilterBar = () => {
  const data01 = [
    { name: 'Environmental Rating', color: 'bg-green-500' , value: 60 },
    { name: 'Social Rating', color: 'bg-blue-500' , value: 30 },
    { name: 'Governance Rating', color: 'bg-yellow-500' , value: 10 }
  ]

  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Flex ml='2'>
      <Box className='flex-col'>
          <Heading size='lg' mb='8'>
            Filter Results
          </Heading>
          <Box className='flex flex-row gap-4 mt-4'>
            {data01.map((investment) => (
              <div className='flex gap-4'>
                <p>{investment.name}</p>
              </div>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default FilterBar