"use client"
import React from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles'
import { NavCtx } from '@/contexts/navCtx'
import { MusicCtx } from '@/contexts/musicCtx'
import GeneralWrapper from '@/pages/generalWrapper'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <NavCtx>
        <MusicCtx>
          <GeneralWrapper>
        {children}
          </GeneralWrapper>
        </MusicCtx>
        </NavCtx>
      </ChakraProvider>
    </CacheProvider>
  )
}