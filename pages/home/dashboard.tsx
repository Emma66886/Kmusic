import Discover from '@/components/discover'
import Localmusics from '@/components/localmusics'
import MusicList from '@/components/musicList'
import SearchBar from '@/components/searchBar'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import Notification from './notification'
import { dummyMusics } from '@/utils/dummyMusics'

function Dashboard() {
  return (
    <Flex flexDir='column' gap='10' h='100vh'
     overflowY='scroll' className='hideScrollBar'  w='57vw' p='5'>
        <SearchBar />
        <Discover />
        <Localmusics />
        <MusicList musicList={dummyMusics} count={5} isDashboard={true}/>
    </Flex>
  )
}

export default Dashboard