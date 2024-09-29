import React from 'react'
import {Box, Heading, Text, Button} from "@chakra-ui/react";
import NavBar from '../Components/NavBar2';

export default function CarbonCredits() {
  return (
    <Box
        className="main-body"
        h="100vh"
        bgGradient="linear(to-b, #f5f7fa, #c3cfe2)"
    >
        <NavBar />
        <Heading size={'lg'} position={'absolute'} mt={150} ml={680} textDecoration={'underline'} textColor={'rgb(24,121,10)'} fontWeight={1000}>Carbon Credits</Heading>
        <Box
            backgroundColor={'white'}
            height={'300px'}
            width={'80%'}
            marginTop={250}
            marginLeft={140}
            marginBottom={170}
            borderRadius={'10px'}
            boxShadow={'0 4px 12px rgba(0, 0, 0, 0.1)'}
            padding={'20px'}
            display={'flex'}
            position={'absolute'}
            flexDirection={'column'}
            //justifyContent={'center'}
            alignItems={'center'}
            >
            
            <Text fontSize={'2xl'} fontWeight={'bold'} color={'teal.600'} textAlign={'center'} marginBottom={5} marginTop={20}>
            Access the Carbon Credits Marketplace
            </Text>

            <Button
                colorScheme="teal"
                size="lg"
                boxShadow={'0 6px 12px rgba(0, 0, 0, 0.1)'}
                _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                transition="all 0.2s ease"
                onClick={() => window.open('https://ctxglobal.com/net-zero/', '_blank')}
            >
                Go to Marketplace
            </Button>
        </Box>
    </Box>
  )
}
