import React from 'react';
import { Box, Image, Heading, Text, Container } from '@chakra-ui/react';
import NavBar from '../Components/NavBar';

export default function HomePage() {
  return (
    <Box
      className="main-body"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background Image */}
      <Image
        src="https://www.cedars-digital.com/wp-content/uploads/2024/03/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88-24.jpg"
        alt="Background"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
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
        zIndex={1}>
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
    </Box>
  );
}
