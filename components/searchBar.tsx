import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'
import {CiSearch} from 'react-icons/ci'
function SearchBar() {
  return (
    <Box w='100%'>
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