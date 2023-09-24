"use client"
import ArtistsItem from '@/components/artistsItem'
import GradientBox from '@/components/gradientBox'
import RecentlyPlayedItem from '@/components/recentlyPlayedItem'
import { dummyArtists } from '@/utils/dummyArtists'
import { dummyRecents } from '@/utils/dummyRecents'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
function Notification() {
  return (
    <Flex flexDir='column' overflowY='scroll' className='hideScrollBar' alignItems='center' gap={10} h='100vh' pb='20' p={5} bg="#111111" w='20%'>
        <Flex gap={5} alignItems='center' justifyContent='center' w='95%'>
            <Box border='1px solid #fff' h="40px" w='40px' borderRadius='50%'></Box>
            <Flex flex='1' flexDir='column' h='initital' justifyItems='space-between'>
                <Text fontSize='1em'>News</Text>
                <Text fontSize='0.9em' fontWeight="300">Kmusic news</Text>
            </Flex>
            <Box position='relative'>
                <IoMdNotificationsOutline style={{height:'30px',width:'30px'}} />
                <GradientBox h='10px' w='10px' borderRadius='100%' bottom='1' right='0' position='absolute'/>
            </Box>
        </Flex>
        <Box w='95%'>
        <Text mb='3' fontSize='1.2em' color='#B8B8B8' fontWeight='600'>Top Artists</Text>
        <Flex flexDir='column'  gap='2'>
            {dummyArtists.map(({albumCount,image,name},i)=><ArtistsItem name={name} key={i+"artist"} albumCount={albumCount} image={image}/>)}
        </Flex>
        </Box>
        <Box w='95%'>
        <Text mb='3' fontSize='1.2em' color='#B8B8B8' fontWeight='600'>Recently played</Text>
        <Flex flexDir='column'  gap='2'>
            {dummyRecents.map(({id,image,name,timePlayed},i)=><RecentlyPlayedItem id={id} timePlayed={timePlayed} name={name} key={i+"recentlyPlayedItem"} 
             image={image}/>)}
        </Flex>
        </Box>
    </Flex>
  )
}

export default Notification