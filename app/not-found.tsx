"use client"
import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  const [isLargerThan500px] = useMediaQuery('(min-width:500px)')
  return (
    <Box w={['100%','100%','100%','60vw']} h='100vh' pt='5'>
        <Text fontSize='2.5em' fontWeight='800' textAlign='center'>PAGE UNDER CONSTRUCTION</Text>
        {!isLargerThan500px && <Link href='/' style={{textAlign:'center',width:'100%'}}>Click here to visit Dashboard</Link>}
    </Box>
  )
}

export default NotFound