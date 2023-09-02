import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import GradientBox from './gradientBox'
import Image from 'next/image'
import pauseIcon from '@/assets/pause.png'
import musicTrack from '@/assets/musictrack.png'
import {FaPlay} from 'react-icons/fa'
import { useMusicCtx } from '@/contexts/musicCtx'
import {useAudioPlayer,} from 'react-use-audio-player'
type Prop ={
    number?:string | number,
    image?:any,
    name?:string,
    singer?:string
    duration?:number,
    isActive?:boolean,
    id:string
}
function MusicListItem({number,image,name,singer,duration,id}:Prop) {
    const {currentItem,setCurrentitem} = useMusicCtx()
    const {duration:audDuration} = useAudioPlayer()
    const isPlaying = false
    const isActive = id === currentItem?.id
    const getTrackFormat = (track?:number)=> {
        if(!track) return `00:00`
        const sec = track % 60;
        const min = (track-sec)/60
        return `${(min).toString().length < 2 ? `0${min}` : min }:${(sec).toString().length < 2 ? `0${sec}` : sec}`
    }
    const textGrad = isActive ? {
        bgGradient:'linear(to-r,100,200)', bgClip:'text',fontWeight:'500'
    } : {}
  return (
    <Flex w='100%' alignItems='center' p={5} justifyContent='space-between' h='65px' bg={isActive ? '#1D1D1D' : '#23232330'}>
        <Flex alignItems='center' gap='5'>
        <Text>{number}</Text>
        {isActive ?<GradientBox h={"max-content"} p={"2px"} w={"max-content"} borderRadius='50%'>
        <Box h='50px' w='50px' borderRadius='50%' position='relative'>
            <Image style={{borderRadius:'50%'}} fill alt='' src={image}/>
        </Box>
        </GradientBox>
        :
        <Box h='50px' w='50px' borderRadius='50%' position='relative'>
            <Image style={{borderRadius:'50%'}} fill alt='' src={image}/>
        </Box>}
        <Text {...textGrad} fontWeight='300' fontSize="0.9em">{singer} - {name}</Text>
        </Flex>
        <Text {...textGrad} fontWeight='300' fontSize="0.9em">{getTrackFormat(duration )}</Text>
        <Flex gap={5}>
            {isPlaying && <Box position='relative' h='25px' w='25px'>
                <Image src={ musicTrack} alt='' fill/>
            </Box>}
            {isPlaying ? <Box position='relative' h='25px' w='25px'>
                <Image src={ pauseIcon} alt='' fill/>
            </Box> : <FaPlay style={{color:"#fff"}}/>}
        </Flex>
    </Flex>
  )
}

export default MusicListItem