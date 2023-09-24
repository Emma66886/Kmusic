"use client"
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { dummyGenre } from '@/utils/dummyGenre'
import MusicList,{ MusicItemListType } from './musicList'
import { readFile } from 'fs'
function LoadMusics() {
  type returnedData = {musicData:string,trackName:string,duration?:string | string}
    const {image,link,name,trackNumber} = dummyGenre[0]
    const [parsedMusics,setparsedMusics] = useState<returnedData[]>()
    const ref = useRef<HTMLInputElement>(null)
    const loadMusics = async(musics:FileList)=>{
        if(musics && musics.length > 0){
            console.log("Loading musics")
           
          //  console.log(musics.length)
          
          let processsedMusics:any = Array.prototype.map.call(musics,async(file)=>{
            try{
            const readFile =  new Promise((resolve,reject)=>{
              const reader = new FileReader();
              reader.onload = (e) => {
               let musicData = e.target?.result as string
               let trackName = file?.name
               resolve({musicData,trackName})
             };
              reader.readAsDataURL(file);
            })
            console.log({readFile})
            return readFile
          }catch(e){return {}}
            // console.log({file}) 
          })
          const totalMusics = await Promise.all(processsedMusics) as any
          // Array.prototype.forEach.call()
          console.log({totalMusics})
          setparsedMusics( totalMusics)
        }

    }
  return (
    <>
    <Box mb='5' borderRadius='20px' h='200px' w='200px'  position='relative'>
    <Image style={{borderRadius:'20px'}} src={image} alt='' fill/>
    <Flex bg='#45454570' borderBottomRadius='20px' bottom='0' left='0' position='absolute' w='100%' 
    justifyContent='space-between' alignItems='center' backdropFilter={'blur(10px)'} p='5px 10px'>
        <Flex flexDir='column'>
        <Text>LOCAL MUSICS</Text>
        {(parsedMusics && parsedMusics?.length > 0) ?<Text color='#DEDEDE' fontSize='0.8em'>{parsedMusics && parsedMusics?.length} Tracks picked</Text>:
        <Text color='#DEDEDE' fontSize='0.8em'>Select Musics</Text>}
        </Flex>
    <Box position='relative' h='50px' w='50px'>
        <Image src={image} alt='' fill/>
    </Box>
    </Flex>
    <Input onChange={e=>loadMusics(e.target.files as FileList)} accept='.mp3' ref={ref} h='100%' w='100%' type='file' multiple opacity='0' position='absolute' inset={0} zIndex='1'/>
    </Box>
    <MusicList isDashboard={false} musicList={parsedMusics} musicListHeight='55vh'/>
    </>
  )
}

export default LoadMusics