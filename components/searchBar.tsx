import { useMenuContext } from '@/contexts/menuCtx'
import { Box, Input, InputGroup, InputLeftAddon, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import {CiSearch} from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import OpenMenu from './OpenMenu'
function SearchBar() {
 
  const [isLargerThan500px] = useMediaQuery('(min-width:500px)')
  return (
    <Box w='100%' display='flex' alignItems='center' gap='3'>
      {!isLargerThan500px && <OpenMenu />}
        <InputGroup borderColor='transparent' borderRadius='20px' bg='#41414165'>
        <InputLeftAddon borderColor='transparent' bg='transparent'>
        <CiSearch />
        </InputLeftAddon>
        <Input bg='transparent' focusBorderColor='transparent' borderColor='transparent'
         _hover={{}} _focusWithin={{}} placeholder='Search Music, Artist, Genre'/>
        </InputGroup>
    </Box>
  )
}

export default SearchBar