import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import GradientBox from './gradientBox'
import {BsThreeDotsVertical} from 'react-icons/bs'
type Prop = {
    image?:string,
    name?:string,
    albumCount?:number,

}
function ArtistsItem({albumCount,image,name}:Prop) {
  return (
    <Flex pr='3' pl='3' pt='1' pb='1' bg="#23232350" w='100%' justifyContent='space-between' alignItems='center'>
        <Flex gap="10px" alignItems='center'>
        <GradientBox p="1px" h={'max-content'} w="max-content" borderRadius='100%'>
        <Box bg='#111' h="40px" w="40px" borderRadius='100%'>
        </Box>
        </GradientBox>
        <Flex flexDir='column' justifyContent='space-between'>
            <Text>{name}</Text>
            <Text fontSize='0.9em' fontWeight='300'>{albumCount} Album</Text>
        </Flex>
        </Flex>
        <Box _hover={{cursor:'pointer'}}>
        <BsThreeDotsVertical />
        </Box>
    </Flex>
  )
}

export default ArtistsItem