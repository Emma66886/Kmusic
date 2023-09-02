import { Box, Flex, Slide, Text, useDisclosure,Tooltip, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import React,{useEffect,useRef, useState} from 'react'
import GradientBox from './gradientBox'
import {TfiLineDouble,TfiControlPause,TfiControlForward,TfiVolume,TfiControlPlay,TfiControlSkipForward,TfiControlSkipBackward,TfiControlBackward,TfiControlShuffle} from 'react-icons/tfi'
import { BsHeart, BsRepeat, BsShare, BsShuffle, } from 'react-icons/bs'
import { MdGraphicEq } from 'react-icons/md'
import { useAudioPlayer,useGlobalAudioPlayer } from 'react-use-audio-player'
function MusicBar() {
    const [muteValue,setmuteValue] = useState(false)
    const [position,setPosition] = useState<number>(0)
    const [seekVal,setSeekVal] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)
   const {play,pause,duration,setVolume,volume,playing:isPlaying,stop,isLoading,fade,mute,getPosition,seek} = useGlobalAudioPlayer()
   useEffect(()=>{
    if(isPlaying){
        setInterval(()=>{
            const pos = getPosition()
            setPosition(pos)
        },1000)
    }
   },[isPlaying])
   useEffect(()=>{
       seek(seekVal)
   },[seekVal])
   const toggleHeight = () =>{
        const tgle = ref?.current?.classList.toggle("h100")
        // setTimeout(()=>{
        //     console.log({topOffSet:ref.current?.offsetTop})
        //     setBoxStartPos(ref.current?.offsetTop)
        //     console.log({height:ref.current?.style.height})
        // },2100)
        // console.log({tgle})
        }
        const controls = [
            {
                label:'Skip backward',
                Icon:TfiControlSkipBackward,
                action:()=>{}
            },
            {
                label:'Back',
                Icon:TfiControlBackward,
                action:()=>seek(position-10)
            },
            {
                label:'pause',
                Icon:isPlaying ? TfiControlPause : TfiControlPlay,
                action:()=>isPlaying ? pause() : play()
            },
            {
                label:'Forward',
                Icon:TfiControlForward,
                action:()=>seek(position+10)
            },
            {
                label:'Skip forward',
                Icon:TfiControlSkipForward,
                action:()=>{}
            }
        ]
        const actions = [
            {
                label:"Shuffle",
                Icon:BsShuffle,
                action:()=>{}
            },
            {
                label:"Repeat",
                Icon:BsRepeat,
                action:()=>{}
            },
            {
                label:"Add to Favourite",
                Icon:BsHeart,
                action:()=>{}
            },
            {
                label:"Share music",
                Icon:BsShare,
                action:()=>{}
            },
        ]
        const getTrackFormat = (track?:number)=> {
            if(!track) return `00:00`
            let sec = track % 60;
            let min = (track-sec)/60
            sec= Math.floor(sec)
            return `${(min).toString().length < 2 ? `0${min}` : min }:${(sec).toString().length < 2 ? `0${sec}` : sec}`
        }
  return (<>    
<Flex className='transit' onDragEnd={toggleHeight} ref={ref} 
 h='20px' draggable  zIndex='1'pl='5' pr='5' pt='2' pb='2' boxShadow="2px -2px 10px 0px #a5a5a550"
   w='100%' flexDir='column' bg='#111111' position='fixed' bottom='0' right='0'>
         <Box alignSelf='center' onClick={toggleHeight} _hover={{cursor:"pointer"}}>
            <TfiLineDouble />
        </Box>
        <Flex justifyContent='space-between' alignItems='center' w='100%' bg='transparent'>
                <Flex gap='5'>
                <GradientBox h='max-content' w='max-content' p='0.5' borderRadius='50%'>
                    <Box h='50px' w='50px' bg='#000' borderRadius='50%'>
                    </Box>
                </GradientBox>
                <Flex flexDir='column'>
                    <Text>Memories</Text>
                    <Text fontSize='0.93m' color='#bbb' fontWeight='300'>Maron 5</Text>
                </Flex>
                </Flex>
                <Flex gap='3' alignItems='center' h='100%'>
                   {controls.map(({Icon,action,label},i)=> { return <Box title={label} key={i+"controls"} cursor='pointer' onClick={action}>

                            {label.toLowerCase() === 'pause' ? 
                            <GradientBox height='30px' w='30px' borderRadius='50%' justifyContent='center' alignItems='center' display='flex'><Icon /></GradientBox> 
                            :<Icon />}
                    </Box>})}
                </Flex>
                <Flex alignSelf='flex-end' flexDir='column' w='40%'>
                    {/* <Progress h='5px' bgGradient='linear(to-r,100,200)' borderRadius={'20px'}/> */}
                    <Slider margin='0' onChange={e=>{
                        seek((e/100)*duration)
                    }} borderRadius={'20px'} aria-label='slider-ex-4' value={(position / duration) * 100} defaultValue={30}>
                        <SliderTrack  borderRadius={'20px'}bg='#464646'>
                            <SliderFilledTrack borderRadius={'20px'} bgGradient='linear(to-r,100,200)' />
                        </SliderTrack>
                        <SliderThumb boxSize={4}>
                            <Box  color='200' as={MdGraphicEq} />
                        </SliderThumb>
                    </Slider>
                    <Flex w='100%' justifyContent='space-between'>
                        <Text fontSize='0.9m' color='#bbb' fontWeight='300'>{getTrackFormat(position)}</Text>
                        <Text fontSize='0.9m' color='#bbb' fontWeight='300'>{getTrackFormat(duration)}</Text>
                    </Flex>
                </Flex>
                <Flex w='100px'  alignItems='center' gap='2'>
                    <Box cursor='pointer' onClick={e=>{
                        mute(muteValue)
                        console.log({muteValue})
                        setmuteValue(v=>!v)
                        }} as={TfiVolume}/>
                    {/* <Progress h='5px' bgGradient='linear(to-r,100,200)' w='100%' borderRadius={'20px'}/> */}
                    <Slider borderRadius={'20px'} aria-label='slider-ex-4' onChange={e=>setVolume(e/100)} defaultValue={volume*100}>
                        <SliderTrack  borderRadius={'20px'}bg='#464646'>
                            <SliderFilledTrack borderRadius={'20px'} bgGradient='linear(to-r,100,200)' />
                        </SliderTrack>
                        <SliderThumb boxSize={2}>
                            <Box  color='200' as={MdGraphicEq} />
                        </SliderThumb>
                    </Slider>
                </Flex>
                <Flex gap='5' alignItems='center' h='100%'>
                   {actions.map(({Icon,action,label},i)=> { return <Box title={label} key={i+"controls"} cursor='pointer' onClick={action}>

                            {label.toLowerCase() === 'pause' ? 
                            <GradientBox height='30px' w='30px' borderRadius='50%' justifyContent='center' alignItems='center' display='flex'><Icon /></GradientBox> 
                            :<Icon />}
                    </Box>})}
                </Flex>
            </Flex>
  </Flex>

  </>
  )
}

export default MusicBar