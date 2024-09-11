import React from 'react';
import { Box, Image, Heading, Text, Container, Flex, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import NavBar from '../Components/NavBar';
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import photo from "../assets/background.jpg"

export default function HomePage() {
  return (
    <Box
      className="main-body"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      overflowY={'auto'}
    >
      {/* Background Image */}
      <Image
        src="https://www.cedars-digital.com/wp-content/uploads/2024/03/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88-24.jpg"
        alt="Background"
        position="absolute"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        objectFit="cover"
        // zIndex={-2}
        filter="brightness(0.3)"
        opacity={10}
      />

      {/* Gradient Overlay
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-r, rgba(0, 139, 139, 0.7), rgba(0, 128, 128, 0.5), rgba(0, 100, 100, 0.7))"
      /> */}

      {/* NavBar */}
      <NavBar />

      <Container
        maxW="container.md"
        textAlign="center"
        padding={6}
        paddingInline={1}
        mt={10}
        zIndex={1}
        position={'absolute'}
        top={'50px'}
        >
        <Text
          fontSize="6xl" 
          lineHeight="short" 
          color="yellow.400" 
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          letterSpacing="wider" 
          fontWeight="bold" 
        >BUILD A CARBON NEUTRAL <Box as="span" color="gray.500" fontWeight="bolder">COAL</Box> MINE</Text>
      </Container>

      {/* Content Box */}
      <Container
        maxW="container.md"
        textAlign="center"
        bg="rgba(0, 0, 0, 0.7)"
        borderRadius="lg"
        boxShadow="xl"
        padding={8}
        mt={10}
        zIndex={1}
        position={'absolute'}
        top={'300px'}
      >
        <Heading as="h1" fontSize="3xl" mb={4} color="teal.200">
          Project Kasukabe helps you understand how your daily choices impact climate change.
        </Heading>

        <Text fontSize="lg" lineHeight="tall" color="gray.300">
          A carbon footprint is a measure of the total greenhouse gas emissions, primarily carbon dioxide (CO₂), caused by human activities.
          In the context of coal mining in India, it accounts for emissions generated during the extraction, processing, transportation, and
          combustion of coal. These emissions significantly contribute to global warming and climate change. By understanding the carbon footprint
          of mining operations, companies and individuals can identify ways to reduce environmental impact. Our carbon footprint calculator for
          Indian coal mines helps measure these emissions, providing insights that can guide sustainable practices and cleaner energy transitions.
        </Text>
      </Container>

      {/*Services container*/}
      <Container
        className='Services-Container'
        id='Services'
        height={'100vh'}
        width={'100vw'}
      >
        <Image
          src='https://visiblegain.in/our-service.jpg'
          alt='background image'
          top={'100vh'}
          width={'100vw'}
          height={'100vh'}
          left={0}
          position={'absolute'}
        />

        <Card
            width={'24vw'}
            left={4}
            top={'160vh'}
            position={'absolute'}

          >
            <CardBody>
              <Image
                src={photo}
                alt='estimate carbon image'
                borderRadius={'lg'}
                />
              <Stack mt={6} spacing={3}>
                <Heading size={32}>Estimate Emissions</Heading>
                <Text>Estimate your carbon emissions by filling certain values</Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            width={'24vw'}
            left={380}
            top={'160vh'}
            position={'absolute'}
          >
            <CardBody>
              <Image
                src={photo}
                alt='estimate carbon image'
                borderRadius={'lg'}
                />
              <Stack mt={6} spacing={3}>
                <Heading size={32}>Estimate Sink</Heading>
                <Text>Estimate your carbon sink by filling certain values</Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
          width={'24vw'}
          right={375}
          top={'160vh'}
          position={'absolute'}
          >
            <CardBody>
              <Image
                src={photo}
                alt='estimate carbon image'
                borderRadius={'lg'}
                />
              <Stack mt={6} spacing={3}>
                <Heading size={32}>Gap Analysis</Heading>
                <Text>Analyze the gap between carbon  emissions and carbon sink</Text>
              </Stack>
            </CardBody>
          </Card>

          <Card
            width={'24vw'}
            right={4}
            top={'160vh'}
            position={'absolute'}
          >
            <CardBody>
              <Image
                src={photo}
                alt='estimate carbon image'
                borderRadius={'lg'}
                />
              <Stack mt={6} spacing={3}>
                <Heading size={32}>Solutions</Heading>
                <Text>Providing solutions to minimize the gap between emissions and sink</Text>
              </Stack>
            </CardBody>
          </Card>

      </Container>

      {/*Contact Us container*/}
      <Container 
        className='ContactUsContainer'
        id='ContactUs'
      >
        <Image
        src='https://static.vecteezy.com/system/resources/previews/044/764/760/non_2x/businesswoman-looking-through-a-telescope-business-concept-vector.jpg'
        alt='background image'
        top={'200vh'}
        width="100vw"
        height="100vh"
        left={0}
        position={'absolute'}

        />
        <Heading 
          as="h1" 
          fontSize="50px" 
          fontWeight={800} 
          color="black"
          position={'absolute'}
          top={'220vh'}
          right={'180px'}
        >
          Contact Us
        </Heading>
      </Container>

      <Container
        position={'absolute'}
        top={'231vh'}
        height={'120px'}
        width={'600px'}
        right={'80px'}
        display={'flex'}
        spa
      >
          <IoMail size={120} color='black' spacing={100}/>
          <MdMessage size={120} color='black'/>
          <FaLinkedin size={120} color='black'/>
          <FaInstagram size={120} color='black'/>
      </Container>
    </Box>
  );
}
