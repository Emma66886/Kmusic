import { useMenuContext } from '@/contexts/menuCtx'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const OpenMenu = () => {
    const {open,toggleMenu} = useMenuContext()
  return (
    <Box onClick={toggleMenu}><RxHamburgerMenu size={30}/></Box>
  )
}

export default OpenMenu