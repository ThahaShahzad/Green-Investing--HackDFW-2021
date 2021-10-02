import { BsSearch, BsFillHouseFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { Link } from 'components/custom'
import { Flex, Icon, List, ListItem, Text, Heading, useMediaQuery } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

interface props {
  listItems?: {
    name: string
    path: string
    icon: IconType
  }[]
}
const LeftSideNav = ({
  listItems = [
    {
      name: 'Portfolio',
      path: '/dash',
      icon: BsFillHouseFill
    },
    {
      name: 'Search',
      path: '/dash/search',
      icon: BsSearch
    }
  ]
}: props) => {
  const { pathname } = useRouter()
  const [isLg] = useMediaQuery('(min-width: 1280px)')
  //display={`${!isLg && 'none'}`}
  const { dashLeftNavColor, dashNavHeading } = useMyColors()
  // const Styles = {
  //   aside: 'hidden lg:flex row-span-full dark:bg-normal-light bg-primary flex-col p-2 rounded-r-2xl',
  //   logo: 'flex justify-center items-center p-2',
  //   logoText: 'ml-2 hidden 2xl:block',
  //   list: 'mt-32 flex flex-col gap-4',
  //   listItem: 'rounded-3xl flex items-center justify-center xl:justify-start xl:gap-2 p-4 xl:px-2 xl:py-4 2xl:p-4',
  //   listItemIcon: 'text-normal',
  //   listItemText: 'text-normal',
  //   listItemSelected: 'border-2 border-normal'
  // }
  //bg-gradient-to-bl from-[#D1EECC] to-[#57A99A]
  return (
    <Flex as='aside' direction='column' gridRow='1 / -1' p='2' bg={dashLeftNavColor}>
      <Link to='/dash' display='flex' justifyContent='center' p='2'>
        {/* <Image src={logo} alt='logo' /> */}
        <Heading size='lg' color={dashNavHeading}>
          GreenInvesting
        </Heading>
      </Link>
      <List pl='0' mt='32' spacing={4}>
        {listItems.map((listItem) => (
          <ListItem key={listItem.name}>
            <Link
              to={listItem.path}
              display='flex'
              alignItems='center'
              justifyContent={{ base: 'center', xl: 'start' }}
              gridGap={{ xl: 2 }}
              p={{ base: 4, '2xl': 3 }}
              px={{ xl: 2 }}
              py={{ xl: 2 }}
              // color={`${pathname === listItem.path && 'green'}`}
              _hover={{
                translateY: 1,
                transform: 'auto'
              }}
              rounded={`${pathname === listItem.path && 'xl'}`}
              border={`${pathname === listItem.path && '2px'}`}
              borderColor='primary.dark'>
              <Icon as={listItem.icon} w='20px' h='20px' />

              <Text display={{ base: 'none', xl: 'block' }}>{listItem.name}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default LeftSideNav
