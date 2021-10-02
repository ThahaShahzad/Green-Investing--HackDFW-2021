import { Box, Flex, Heading } from '@chakra-ui/layout'
import Chart from 'react-google-charts'
import { useMyColors } from 'styles/colors'

const ESGRatingCard = () => {
  const { RawBg } = useMyColors()
  const data01 = [
    { name: 'Environmental Rating', color: 'bg-green-500' },
    { name: 'Social Rating', color: 'bg-blue-500' },
    { name: 'Governance Rating', color: 'bg-yellow-500' }
  ]
  const data01RC = [
    ['ESG', 'Catagories'],
    ['Environmental Rating', 60],
    ['Social Rating', 30],
    ['Governance Rating', 10]
  ]
  return (
    <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
      <Flex ml='2'>
        <Chart
          height={'100%'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={data01RC}
          options={{
            backgroundColor: RawBg,
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
        <div className=''>
          <Heading size='lg' mb='8'>
            Your ESG Rating
          </Heading>
          <div className='flex flex-col gap-4 mt-4'>
            {data01.map((investment) => (
              <div className='flex gap-4'>
                <div className={`w-4 h-1 ${investment.color}`} />
                <p>{investment.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </Box>
  )
}

export default ESGRatingCard
