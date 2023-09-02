"use client"
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { dummyGenre } from '@/utils/dummyGenre'
import { useAudioPlayer, useGlobalAudioPlayer } from 'react-use-audio-player'
import { pathToFileURL } from 'url'
import MusicList,{ MusicItemListType } from './musicList'
function LoadMusics() {
    const {image,link,name,trackNumber} = dummyGenre[0]
    const [musics,setMusics] = useState<any>()
    const [parsedMusics,setparsedMusics] = useState<any[]>()
    
    const ref = useRef<HTMLInputElement>(null)
    const {load,play} = useGlobalAudioPlayer()

    useEffect(()=>{
        console.log({musics})
        if(musics && musics.length > 0){
          //   console.log("Loading musics")
          //  const processsedMusics = musics.map((val:any)=>{
          //   let returnValue:MusicItemListType
          //     const reader = new FileReader();
          //     reader.onload = (e) => {
          //     //   img.src = e.target.result;
          //       // load(e.target?.result as string)
          //       // play()
          //       returnValue.musicData = e.target?.result as string
          //       returnValue.trackName = val.name
                 
          //     };
          //     reader.readAsDataURL(val);
          //     return returnValue
          //   })
          //   setparsedMusics(processsedMusics)
        }
    },[musics])
  return (
    <>
    <Box mb='5' borderRadius='20px' h='200px' w='200px'  position='relative'>
    <Image style={{borderRadius:'20px'}} src={image} alt='' fill/>
    <Flex bg='#45454570' borderBottomRadius='20px' bottom='0' left='0' position='absolute' w='100%' 
    justifyContent='space-between' alignItems='center' backdropFilter={'blur(10px)'} p='5px 10px'>
        <Flex flexDir='column'>
        <Text>LOCAL MUSICS</Text>
        <Text color='#DEDEDE' fontSize='0.8em'>{trackNumber} Tracks</Text>
        </Flex>
    <Box position='relative' h='50px' w='50px'>
        <Image src={image} alt='' fill/>
    </Box>
    </Flex>
    <Input onChange={e=>setMusics(e.target.files)} accept='.mp3' ref={ref} h='100%' w='100%' type='file' multiple opacity='0' position='absolute' inset={0} zIndex='1'/>
    </Box>
    <MusicList isDashboard={false} musicList={parsedMusics} musicListHeight='55vh'/>
    </>
  )
}

export default LoadMusics