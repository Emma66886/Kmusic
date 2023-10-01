"use client"
import React, { PropsWithChildren } from 'react'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import Navigations from './home/navigations'
import Notification from './home/notification'
import MusicBar from '@/components/musicBar'
import { useMenuContext } from '@/contexts/menuCtx'
import OpenHist from '@/components/openHist'
import { useHistoryContext } from '@/contexts/historyCtx'

function GeneralWrapper({children}:PropsWithChildren) {
  const [isLargerThan500px] = useMediaQuery("(min-width:500px)")
  const {open,toggleMenu} = useMenuContext()
  const {openHisoty,toggleHistory} = useHistoryContext()
  return (
    <Flex bg='#000' position='relative' justifyContent='space-between' w='100vw' maxW='100vw'>
    {(!isLargerThan500px && open) &&
    <Box  zIndex='100' display='flex' h='100%' w='100%' position='fixed' inset='0'>
      <Navigations />
      <Box h='100%' flex='1' onClick={toggleMenu}  bg='rgba(0,0,0,0.8)'/>
    </Box>}
    {(!isLargerThan500px && openHisoty) &&
    <Box  zIndex='100' display='flex' h='100%' w='100%' position='fixed' inset='0'>
      <Box h='100%' flex='1' onClick={toggleHistory}  bg='rgba(0,0,0,0.8)'/>
      <Notification />
    </Box>}
    {isLargerThan500px && <Navigations />}
    {children}
    {isLargerThan500px && <Notification />}
    <MusicBar />
    {!isLargerThan500px && <OpenHist />}
    </Flex>
  )
}

export default GeneralWrapper