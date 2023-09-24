"use client"
import NavDisplay from '@/components/navDisplay'
import { navs } from '@/utils/navigations'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Navigations() {
  return (
    <Box w='20%' overflowY='scroll' className='hideScrollBar' pt='10'p='5' pb='20' h='100vh' bg="#111111">
        <Box display='flex' alignItems='center' justifyContent='center' gap={10}>
            <Box h='50px' w='50px' borderRadius='100%' border='1px solid #fff'></Box>
            <Text fontWeight='900' fontSize='1.5em' bgGradient='linear(to-r,#B5179E,#7209B7)' bgClip='text'>KMUSIC</Text>
        </Box>
        <Flex mt='10' w='100%' flexDir='column' gap={5}>
            <NavDisplay header='Menu' navItems={navs.menu}/>
            <NavDisplay header='Help' navItems={navs.help}/>
        </Flex>
    </Box>
  )
}

export default Navigations