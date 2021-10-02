import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'components/custom'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure
} from '@chakra-ui/react'

export type Props = {
  logo: {
    logoText: string
    logoImg: any
  }
  links: {
    linkText: string
    linkRoute: string
    primary?: boolean
    secondary?: boolean
  }[]
}

const MobileNav: React.FC<Props> = ({ logo, links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Styles = {
    nav: 'flex lg:hidden flex-1 justify-between items-center px-4 overflow-hidden',
    sideNav: 'navShadow h-full w-2/3 fixed top-0 right-0 z-20 bg-primary py-8 px-4 rounded-l-2xl sm:w-1/3',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-normal',
    navLinks: 'flex flex-col items-start gap-4 h-full px-8 pb-8',
    actionLink: 'mt-auto w-full text-center',
    'close-nav': 'fixed top-0 left-0 bottom-0 z-20 w-1/3 bg-transparent px-4 sm:w-2/3'
  }
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.logo} to='/'>
        <Image src={logo.logoImg} alt='logo' />
        <Heading size='lg' ml='2'>
          {logo.logoText}
        </Heading>
      </Link>
      {!isOpen && (
        <div onClick={onOpen}>
          <FiMenu />
        </div>
      )}
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mb='8'></DrawerHeader>
          <DrawerBody>
            <div className={Styles.navLinks}>
              {links.map((link, index) => (
                <div key={index}>
                  {link.primary ? null : link.secondary ? null : <Link to={link.linkRoute}>{link.linkText}</Link>}
                </div>
              ))}
            </div>
          </DrawerBody>
          <DrawerFooter justifyContent='center' experimental_spaceX='4'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default MobileNav
