import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import musicIcon from '@/assets/music.png'
import Image from 'next/image'
import { dummyGenre } from '@/utils/dummyGenre'
import DiscoverItem from './discoverItem'
function Discover() {
  return (
    <Flex flexDir='column' w='100%' gap='5'>
        <Flex gap='5'>
            <Box h='25px' w='25px' position='relative'>
            <Image fill alt='' src={musicIcon}/>
            </Box>
            <Text fontSize='1.2em' fontWeight='700'>Discover Genre</Text>
        </Flex>
        <Box overflowX='scroll' w='100%' className='hideScrollBar'>
        <Flex justifyContent='space-between' w='max-content' gap='5'>
            {dummyGenre.map(({name,trackNumber,image,link},i)=><DiscoverItem key={i+"discoverItem"} image={image} link={link} genreType={name} trackNumber={trackNumber}/>)}
        </Flex>
        </Box>
    </Flex>
  )
}

export default Discover