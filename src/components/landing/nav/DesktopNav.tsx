import { Link, Image } from 'components/custom'
import { Heading, Button } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { Fragment } from 'react'
import ThemeToggler from 'components/custom/ThemeToggle'

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

const DesktopNav: React.FC<Props> = ({ logo, links }) => {
  const Styles = {
    nav: 'flex-1 justify-between items-center px-4 flex',
    logo: 'flex items-center ml-3',
    logoText: 'ml-8',
    navLinks: 'flex items-center gap-8',
    actionLink: 'ml-8'
  }
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.logo} to='/'>
        {/* <Image src={logo.logoImg} alt='logo' /> */}
        <GiReceiveMoney className='w-8 h-8 text-[#57a99a]' />
        <Heading size='lg' ml='2'>
          {logo.logoText}
        </Heading>
      </Link>
      <div className={Styles.navLinks}>
        {links.map((link, index) => (
          <Fragment key={index}>
            {link.primary ? (
              <Link to={link.linkRoute}>
                <Button>{link.linkText}</Button>
              </Link>
            ) : (
              <Link variant='line' className={`${link.linkText === 'Login' && Styles.actionLink}`} to={link.linkRoute}>
                {link.linkText}
              </Link>
            )}
          </Fragment>
        ))}
        <ThemeToggler />
      </div>
    </nav>
  )
}

export default DesktopNav
