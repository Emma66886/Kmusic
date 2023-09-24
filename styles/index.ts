import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    linearGrad :'#B5179E,#7209B7',
    "100":'#B5179E',
    "200":'#7209B7'
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
export const theme = extendTheme({ colors,config })