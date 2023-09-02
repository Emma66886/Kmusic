"use client"
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Loading() {
  return (
    <Box w='60vw' h='100vh' bg='#000' display='flex' alignItems='center' justifyContent='center'>
        <Text fontSize='2.5em' fontWeight='800' textAlign='center'>LOADING...</Text>
    </Box>
  )
}

export default Loading