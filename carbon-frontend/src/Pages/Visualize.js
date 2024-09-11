import React from 'react'
import { Box, Image, Heading, Text, Container, Flex, Stack } from '@chakra-ui/react';
import NavBar from '../Components/NavBar';
export default function Visualize() {
  return (
    <Box
      className='main-body'
      backgroundColor={'black'}
      height={'100vh'}
      width={'100vw'}
    >
      <NavBar />

      <Container
        className='mutli-options'
         maxW="container.md"
         padding={6}
         backgroundColor={'White'}
         left={0}
         position={'absolute'}
         top={21}
      >
        
      </Container>
    </Box>
  )
}
