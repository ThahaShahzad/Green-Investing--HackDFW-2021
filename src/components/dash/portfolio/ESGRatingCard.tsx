import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Chart from 'react-google-charts'
import { useMyColors } from 'styles/colors'

const ESGRatingCard = () => {
  const { RawBg } = useMyColors()
  const data01 = [
    { name: 'Environmental Rating', color: 'bg-green-500', value: 60 },
    { name: 'Social Rating', color: 'bg-blue-500', value: 30 },
    { name: 'Governance Rating', color: 'bg-yellow-500', value: 10 }
  ]
  const data01RC = [
    ['ESG', 'Catagories'],
    ['Environmental Rating', 500],
    ['Social Rating', 400],
    ['Governance Rating', 300]
  ]
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Flex ml='2' gridGap='8' align='center'>
        <Chart
          height={'100%'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={data01RC}
          options={{
            backgroundColor: RawBg,
            width: 300,
            legend: { position: 'none' },
            slices: [
              {
                color: '#10B981'
              },
              {
                color: '#3B82F6'
              },
              {
                color: '#F59E0B'
              }
            ]
          }}
        />
        <Box>
          <Heading size='lg' mb='8'>
            Your ESG Rating
          </Heading>
          <div className='flex flex-col gap-4 mt-4'>
            {data01.map((investment) => (
              <div key={investment.name} className='flex gap-4 items-center'>
                <div className={`w-4 h-1 ${investment.color}`} />
                <Text>{investment.name}</Text>
              </div>
            ))}
          </div>
        </Box>
        <Box display='flex' gridGap='12' ml='40'>
          <Box>
            <Text>Environment</Text>
            <Heading color='#10B981'>500</Heading>
            <Text size='sm'>Average</Text>
          </Box>
          <Box>
            <Text>Social</Text>
            <Heading color='#3B82F6'>400</Heading>
            <Text size='sm'>Average</Text>
          </Box>
          <Box>
            <Text>Governance</Text>
            <Heading color='#F59E0B'>300</Heading>
            <Text size='sm'>Average</Text>
          </Box>
          <Box>
            <Text>Total</Text>
            <Heading color='gray'>1100</Heading>
            <Text size='sm'>Average</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default ESGRatingCard
