"use client"
import LoadMusics from '@/components/loadMusics'
import { Box } from '@chakra-ui/react'
import React from 'react'

function LocalMusics() {
  return (
    <Box w='58vw' pt='5'>
        <LoadMusics />
    </Box>
  )
}

export default LocalMusics