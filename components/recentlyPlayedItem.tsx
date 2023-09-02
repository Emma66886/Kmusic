import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import GradientBox from './gradientBox'
import {FaPlay} from 'react-icons/fa'
import { dummyRecents } from '@/utils/dummyRecents'

function RecentlyPlayedItem({image,name,id,timePlayed}:typeof dummyRecents[0]) {
  return (
    <Flex pr='3' pl='3' pt='1' pb='1' bg="#23232350" w='100%' justifyContent='space-between' alignItems='center'>
        <Flex gap="10px" alignItems='center'>
        <GradientBox p="1px" h={'max-content'} w="max-content" borderRadius='100%'>
        <Box bg='#111' h="40px" w="40px" borderRadius='100%'>
        </Box>
        </GradientBox>
            <Text fontSize='0.9em'>{name}</Text>
        </Flex>
            <Text fontSize='0.8em' fontWeight='300'>{timePlayed}m ago</Text>
        <Box _hover={{cursor:'pointer'}}>
        <FaPlay />
        </Box>
    </Flex>
  )
}

export default RecentlyPlayedItem