import { Box,BoxProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

function GradientBox({h,w,p,children,...otherProps}:BoxProps) {
  return (
    <Box h={h||'50px'} w={w || '50px'} p={p || '1px'} {...otherProps} bgGradient='linear(to-r,100,200)'>
        {children}
    </Box>
  )
}

export default GradientBox