import { useColorModeValue } from '@chakra-ui/react'

export const useMyColors = () => {
  const primary = useColorModeValue('primary.light', 'primary.dark')
  const primaryDark = useColorModeValue('primary.dark', 'primary.light')
  const bg = useColorModeValue('bg.light', 'bg.dark')
  const bgDark = useColorModeValue('bg.dark', 'bg.light')
  const bgLight = useColorModeValue('bg-light.light', 'bg-light.dark')
  const bgLightDark = useColorModeValue('bg-light.dark', 'bg-light.light')
  const dashLeftNavColor = useColorModeValue('primary.500', 'bg-light.dark')
  const whiteBlackColor = useColorModeValue('white', 'black')
  const blackWhiteColor = useColorModeValue('black', 'white')
  const RawBg = useColorModeValue('#f3f8f7', '#0d1f23')

  return {
    primary,
    primaryDark,
    bg,
    RawBg,
    bgDark,
    bgLight,
    bgLightDark,
    dashLeftNavColor,
    whiteBlackColor,
    blackWhiteColor
  }
}
