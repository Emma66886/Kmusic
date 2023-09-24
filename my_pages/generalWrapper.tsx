"use client"
import React, { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'
import Navigations from './home/navigations'
import Notification from './home/notification'
import MusicBar from '@/components/musicBar'

function GeneralWrapper({children}:PropsWithChildren) {
  return (
    <Flex bg='#000' position='relative' justifyContent='space-between' w='100vw'>
    <Navigations />
    {children}
    <Notification />
    <MusicBar />
    </Flex>
  )
}

export default GeneralWrapper