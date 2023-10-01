import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import GradientBox from './gradientBox'
import Image from 'next/image'
import pauseIcon from '@/assets/pause.png'
import musicTrack from '@/assets/musictrack.png'
import {FaPlay} from 'react-icons/fa'
import { useMusicCtx } from '@/contexts/musicCtx'
import {useAudioPlayer, useGlobalAudioPlayer,} from 'react-use-audio-player'
import disc from '@/assets/disc.png'
type Prop ={
    number?:string | number,
    image?:any,
    name?:string,
    singer?:string
    duration?:number,
    isActive?:boolean,
    id:string,
    musicData?:any
}
function MusicListItem({number,image,name,singer,duration,id,musicData}:Prop) {
    const {currentItem,setCurrentitem} = useMusicCtx()
    const {load:loadGlobal,play,playing,pause} = useGlobalAudioPlayer()
    const {duration:audDuration,load} = useAudioPlayer()
    const isActive = id === currentItem?.id
    const isPlaying = isActive && playing
    const getTrackFormat = (track?:number)=> {
        track = Math.floor(track as number)
        const hours = Math.floor(track as number / 3600);
        const remainingSeconds = track as number % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
      
        // Format the result as a string (e.g., "1:30:45" for 1 hour, 30 minutes, and 45 seconds)
        const trackTime = `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
        return trackTime;    
    }
    const textGrad = isActive ? {
        bgGradient:'linear(to-r,#B5179E,#7209B7)', bgClip:'text',fontWeight:'500'
    } : {}
    useEffect(()=>{
        if(musicData){
            load(musicData)
        }
    },[musicData])
  return (
    <Flex w='100%' alignItems='center' borderRadius='15px' p={5} justifyContent='space-between' h='65px' bg={isActive ? '#1D1D1D' : '#23232330'}>
        <Flex alignItems='center' gap={[3,3,'5']}>
        <Text>{number}</Text>
        {isActive ?<GradientBox h={"max-content"} p={"2px"} w={"max-content"} borderRadius='50%'>
        <Box h={['30px','30px','50px']} w={['30px','30px','50px']} borderRadius='50%' position='relative'>
            <Image style={{borderRadius:'50%'}} fill alt='' src={image || disc}/>
        </Box>
        </GradientBox>
        :
        <Box h={['30px','30px','50px']} w={['30px','30px','50px']} borderRadius='50%' position='relative'>
            <Image style={{borderRadius:'50%'}} fill alt='' src={image || disc}/>
        </Box>}
        <Text {...textGrad} fontWeight='300' fontSize={['0.7em','0.7em  ',"0.9em"]}>{singer} - {name}</Text>
        </Flex>
        <Text {...textGrad} fontWeight='300' fontSize={['0.7em','0.7em  ',"0.9em"]}>{getTrackFormat(duration || audDuration )}</Text>
        <Flex ml='2' gap={['2','2',5]}>
            {isPlaying && <Box cursor='pointer' position='relative' h={['15px','15px','25px']} w={['15px','15px','25px']}>
                <Image src={ musicTrack} alt='' fill/>
            </Box>}
            {isPlaying ? <Box cursor='pointer' onClick={e=>pause()} position='relative' h={['15px','15px','25px']} w={['15px','15px','25px']}>
                <Image src={ pauseIcon} alt='' fill/>
            </Box> : <FaPlay onClick={()=>{
                loadGlobal(musicData)
                play()
                setCurrentitem({
                    trackName:name as string,id,source:musicData,track:duration||audDuration
                })
                // console.log({id})
                }} style={{color:"#fff",cursor:'pointer'}}/>}
        </Flex>
    </Flex>
  )
}

export default MusicListItem