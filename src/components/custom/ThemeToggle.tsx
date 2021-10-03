import { useColorMode } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className='p-4 rounded-full bg-[#3a83f1c0] fixed bottom-5 right-5 z-10' onClick={() => toggleColorMode()}>
      {colorMode === 'light' ? <BsMoon /> : <BsSun />}
    </div>
  )
}

export default ThemeToggler
