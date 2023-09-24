"use client"
import { Box, Input, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React,{useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
function Localmusics() {

  return (
    <Box w='max-content' position='relative'>
        <Link href='/localmusics' style={{display:'flex',flexDirection:'column'}}>
                <Text bgGradient='linear(to-r,#B5179E,#7209B7)' bgClip='text'>Play from local files {">>"}</Text>
                <Box bgGradient={'linear(to-r,#B5179E,#7209B7)'} w='100%' h='1px'/>
            </Link>
    </Box>
  )
}

export default Localmusics