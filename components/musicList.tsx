import { Box, Flex, Text,ResponsiveValue } from '@chakra-ui/react'
import React, { PropsWithChildren, ReactNode, useEffect, useMemo } from 'react'
import musicIcon from '@/assets/Group.png'
import Image from 'next/image'
import Link from 'next/link'
import { dummyMusics } from '@/utils/dummyMusics'
import MusicListItem from './musicListItem'

export type MusicItemListType ={
    id?:string,
    name?:string,
    track?:number,
    trackName?:string,
    source?:string,
    duration?: string,
    musicData?:any,
    artist?:any,
    title?:any
}

type Prop = {
    isDashboard?:boolean,
    children?:ReactNode,
    count?:Number,
    musicListHeight?:string,
    musicList?:MusicItemListType[]
}
function MusicList({isDashboard,children,count,musicListHeight,musicList}:Prop) {
    const allMusicItems = useMemo(()=>{
        if(musicList&&musicList.length > 0){
            return musicList.map(({trackName,id,name,source,track,duration,artist,title,musicData},i)=>
            <MusicListItem musicData={musicData}  key={i+"musicLisiItem"} id={i.toString()} number={(i+1).toString().length > 1 ?i+1 :`0${i+1}`} 
        image={artist?.picture_big} name={title} duration={parseInt(duration as string)} singer={trackName || "artist.name"}/>)
        }
        // if(musicList && musicList?.length === 0){
            return [<Flex key={"musicListItem"} alignItems='center' justifyContent='center' w='100%'>
                <Text>NO ITEM HERE</Text>
            </Flex>]
        // }
        // return dummyMusics.map(({artist,title,duration},i)=>
        // <MusicListItem key={i+"musicLisiItem"} id={i.toString()} number={(i+1).toString().length > 1 ?i+1 :`0${i+1}`} 
        // image={artist.picture_big} name={title} duration={parseInt(duration)} singer={artist.name}/>)
    },[count,musicList,musicList?.length])
    useEffect(()=>{
       if(musicList) console.log({musicList:musicList})
    },[musicList])
  return (
    <Flex flexDir='column' w='100%' gap='5' h='max-content'>
        {isDashboard  && <Flex justifyContent='space-between' w='100%' alignItems='flex-end'>
            <Flex gap='5' >
                <Box position='relative' h='25px' w='25px'>
                    <Image src={musicIcon} fill alt=''/>
                </Box>
                <Text fontSize='1.2em' fontWeight='700'>Top Musics</Text>
            </Flex>
            <Link href='' style={{display:'flex',flexDirection:'column'}}>
                <Text bgGradient='linear(to-r,#B5179E,#7209B7)' bgClip='text'>Show More {">>"}</Text>
                <Box bgGradient={'linear(to-r,#B5179E,#7209B7)'} w='100%' h='1px'/>
            </Link>
        </Flex> }
        {!isDashboard && children}
        <Flex h={musicListHeight || "45vh"} className='hideScrollBar' overflowY='scroll' flexDir='column' gap={5}>
           {(count && allMusicItems?.length > 0) ? allMusicItems?.splice(0, +count) : allMusicItems} 
        </Flex>
    </Flex>
  )
}

export default MusicList