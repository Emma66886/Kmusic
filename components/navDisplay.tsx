import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import NavItem, { navProps } from './naavItem'
import { navs } from '@/utils/navigations'
type Props = {
    header?:string,
    navItems: typeof navs.menu
}
function NavDisplay({navItems,header}:Props) {
  return (
    <Flex  flexDir='column' w='100%' minH='max-content'>
        <Flex w='100%' flexDir='column'  gap={5}>
        <Text>{header}</Text>
        <Box w='100%' h='1px' bgGradient={'linear(to-r,#B5179E,#7209B7)'}></Box>
        <Flex gap={5} flexDir='column' w='100%' alignItems='center'  justifyContent='center'>
        {/* <Flex flexDir='column' gap='5'> */}
        {navItems?.map(({link,icon,text},i)=><NavItem key={i+"navItem"} link={link} Icon={icon} text={text}/>)}
            {/* </Flex> */}
        </Flex>
        </Flex>

    </Flex>
  )
}

export default NavDisplay