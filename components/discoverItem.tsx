import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import genereIcon from '@/assets/genre.png'
type Prop={
 link:string,
 image:any,
 genreType?:string,
 trackNumber?:number | string
}
function DiscoverItem({link,image,genreType,trackNumber}:Prop) {

  return (
    <Link style={{width:'200px',height:'200px'}} href={link}>
    <Box  borderRadius='20px' h='100%' w='100%'  position='relative'>
    <Image style={{borderRadius:'20px'}} src={image} alt='' fill/>
    <Flex bg='#45454570' borderBottomRadius='20px' bottom='0' left='0' position='absolute' w='100%' 
    justifyContent='space-between' alignItems='center' backdropFilter={'blur(10px)'} p='5px 10px'>
        <Flex flexDir='column'>
        <Text>{genreType}</Text>
        <Text color='#DEDEDE' fontSize='0.8em'>{trackNumber} Tracks</Text>
        </Flex>
    <Box position='relative' h='50px' w='50px'>
        <Image src={genereIcon} alt='' fill/>
    </Box>
    </Flex>
    </Box>
    </Link>
  )
}

export default DiscoverItem