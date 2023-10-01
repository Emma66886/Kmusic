"use client"
import OpenMenu from '@/components/OpenMenu'
import LoadMusics from '@/components/loadMusics'
import { Box } from '@chakra-ui/react'
import React from 'react'

function LocalMusics() {
  return (
    <Box w='58vw' pt='5' ml='5'>
        <OpenMenu />
        <LoadMusics />
    </Box>
  )
}

export default LocalMusics