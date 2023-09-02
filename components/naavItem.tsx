"use client"
import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { navs } from '@/utils/navigations'
import {IconType} from 'react-icons'
import { useNavCtx } from '@/contexts/navCtx'
export type navProps={
  text?:string,
  link:string,
  Icon:IconType,
  active?:Boolean
}
function NavItem({Icon,link,text}:navProps) {
  const {currentItem,setCurrentitem} = useNavCtx()
  const active = currentItem === link?.toLowerCase()
  return (
      <Link style={{width:'100%'}} href={link}>
    <Flex gap='5' w='100%' p="10px 20px" borderRadius='5px' onClick={e=>setCurrentitem(link?.toLowerCase() as string)} alignItems='center'  justifyContent='flex-start' bgGradient={active ? "linear(to-r,100,200)" : ''}>
      <Box><Icon /></Box>
      <Text _hover={{bgGradient:"linear(to-r,100,200)",bgClip:`${!active && "text"}`}} textAlign='left' >{text}</Text>
    </Flex>
    
      </Link>
  )
}

export default NavItem