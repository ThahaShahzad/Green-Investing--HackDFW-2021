import { Link } from 'components/custom/Link'
import ThemeToggler from 'components/custom/ThemeToggle'
import { Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { useMyColors } from 'styles/colors'

const TopNav = () => {
  // const { user, error, isLoading } = useUser()
  const { bgLight } = useMyColors()
  const [isGreaterThenSm] = useMediaQuery('(min-width: 40em)')

  return (
    <Flex as='nav' justify='space-between' borderBottom='2px' p={{ base: '2', lg: '4' }}>
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center'>
        <Heading as='h4' size='lg' marginRight={{ lg: '2' }}>
          Welcome
        </Heading>
        <Heading as='h4' size='lg'>
          {/* {user?.name?.includes('@') ? user.nickname : user?.name} */}
          Adam
        </Heading>
      </Flex>

      <HStack alignItems='center' spacing='4'>
        <ThemeToggler />
        <Link to='/api/auth/logout'>
          <Image src={'/images/male-avatar.png'} className='rounded-full' alt='male avatar' width='50' height='50' />
        </Link>
      </HStack>
    </Flex>
  )
}

export default TopNav
