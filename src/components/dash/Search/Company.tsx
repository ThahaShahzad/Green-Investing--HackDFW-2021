import { Box, Heading, Flex, Text } from '@chakra-ui/layout'
import { Link } from 'components/custom'
import { IoMdArrowBack } from 'react-icons/io'
import Chart from 'react-google-charts'
import { useMyColors } from 'styles/colors'

interface props {
  company:
    | {
        company: string
        stock: string
        esg_score: number
        esg_level: string
        env_score: number
        env_level: string
        soc_score: number
        soc_level: string
        gov_score: number
        gov_level: string
      }
    | undefined
}
const Company = ({ company }: props) => {
  const { RawBg } = useMyColors()
  const data01 = [
    { name: 'Environmental Rating', color: 'bg-green-500' },
    { name: 'Social Rating', color: 'bg-blue-500' },
    { name: 'Governance Rating', color: 'bg-yellow-500' }
  ]
  const data01RC = [
    ['ESG', 'Catagories'],
    ['Environmental Rating', company?.env_score],
    ['Social Rating', company?.soc_score],
    ['Governance Rating', company?.gov_score]
  ]
  return (
    <Box as='main' p='8'>
      <Link to='/dash/search' className='fixed '>
        <IoMdArrowBack className='w-8 h-8' />
      </Link>
      <Box p='8' mt='8'>
        <Heading size='lg' textAlign='left'>
          {company?.company}
        </Heading>
        <Box rounded='3xl' boxShadow='2xl' mt='10' p='4'>
          <Flex ml='2' align='center'>
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
                ESG Rating
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
            <Box display='flex' gridGap='6' ml='60'>
              <Box>
                <Text>Environment</Text>
                <Heading color='#10B981'>{company?.env_score}</Heading>
                <Text size='sm'>{company?.env_level}</Text>
              </Box>
              <Box>
                <Text>Social</Text>
                <Heading color='#3B82F6'>{company?.soc_score}</Heading>
                <Text size='sm'>{company?.soc_level}</Text>
              </Box>
              <Box>
                <Text>Governance</Text>
                <Heading color='#F59E0B'>{company?.gov_score}</Heading>
                <Text size='sm'>{company?.gov_level}</Text>
              </Box>
              <Box>
                <Text>Total</Text>
                <Heading color='gray'>{company?.esg_score}</Heading>
                <Text size='sm'>{company?.esg_level}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Company
