import { useHistoryContext } from '@/contexts/historyCtx'
import { Box, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { LuHistory } from 'react-icons/lu'

const OpenHist = () => {
    const {toggleHistory} = useHistoryContext()
  return (
    <IconButton position='fixed' bottom='5' opacity='0.8' backdropFilter={'blur(10px)'}
     right='5' bgGradient='linear(100,200)'
      onClick={toggleHistory} aria-label='' h='50px'
       width='50px' borderRadius='100%' icon={<LuHistory />}/>
  )
}

export default OpenHist