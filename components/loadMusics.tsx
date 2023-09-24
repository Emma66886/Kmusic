"use client"
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { dummyGenre } from '@/utils/dummyGenre'
import { useAudioPlayer, useGlobalAudioPlayer } from 'react-use-audio-player'
import { pathToFileURL } from 'url'
import MusicList,{ MusicItemListType } from './musicList'
function LoadMusics() {
  type returnedData = {musicData:string,trackName:string,duration?:string | string}
    const {image,link,name,trackNumber} = dummyGenre[0]
    const [musics,setMusics] = useState<FileList>()
    const [parsedMusics,setparsedMusics] = useState<returnedData[]>()
    
    const ref = useRef<HTMLInputElement>(null)
    const {load,play,duration} = useAudioPlayer()
    useEffect(()=>{
        console.log({musics})
        if(musics && musics.length > 0){
            console.log("Loading musics")
           let processsedMusics:returnedData[] = [];
          //  console.log(musics.length)
          Array.prototype.forEach.call(musics,(file)=>{
            const reader = new FileReader();
            let returnValue: returnedData;
            reader.onload = (e) => {
              let musicData = e.target?.result as string
              let trackName = file?.name
              processsedMusics.push({musicData,trackName})
            };
            reader.readAsDataURL(file);
            console.log({file}) 
          })
          // const item = processsedMusics.map(({musicData,...args},i)=>{
          //    load(musicData)
          //    console.log({musicData})
          //     return {
          //       musicData,
          //       duration :duration as any,
          //       ...args
          //     }
          // })
          setparsedMusics(processsedMusics)
        }

    },[musics])

    useEffect(()=>{
      console.log(parsedMusics)
    },[parsedMusics])
  return (
    <>
    <Box mb='5' borderRadius='20px' h='200px' w='200px'  position='relative'>
    <Image style={{borderRadius:'20px'}} src={image} alt='' fill/>
    <Flex bg='#45454570' borderBottomRadius='20px' bottom='0' left='0' position='absolute' w='100%' 
    justifyContent='space-between' alignItems='center' backdropFilter={'blur(10px)'} p='5px 10px'>
        <Flex flexDir='column'>
        <Text>LOCAL MUSICS</Text>
        <Text color='#DEDEDE' fontSize='0.8em'>{parsedMusics && parsedMusics?.length} Tracks picked</Text>
        </Flex>
    <Box position='relative' h='50px' w='50px'>
        <Image src={image} alt='' fill/>
    </Box>
    </Flex>
    <Input onChange={e=>setMusics(e.target.files as FileList)} accept='.mp3' ref={ref} h='100%' w='100%' type='file' multiple opacity='0' position='absolute' inset={0} zIndex='1'/>
    </Box>
    <MusicList isDashboard={false} musicList={parsedMusics} musicListHeight='55vh'/>
    </>
  )
}

export default LoadMusics