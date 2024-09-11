import React from 'react';
import { Box, Image, Heading, Text, Container, Stack, IconButton, Flex } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import NavBar from '../Components/NavBar';
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import photo from "../assets/background.jpg";

export default function HomePage() {
  return (
    <Box className="main-body" color="white" overflowY="auto">
      {/* Background Image */}
      <Image
        src="https://www.cedars-digital.com/wp-content/uploads/2024/03/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88-24.jpg"
        alt="Background"
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        objectFit="cover"
        filter="brightness(0.3)"
        zIndex={-1}
      />

      {/* NavBar */}
      <NavBar />

      <Box
        display="flex"
        id='Home'
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        padding={10}
        minHeight="100vh"  
        mt={10}            
      >
        {/* Main Heading */}
        <Container maxW="container.md" textAlign="center" padding={6} mt={10}>
          <Text
            fontSize="6xl"
            lineHeight="short"
            color="yellow.400"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            letterSpacing="wider"
            fontWeight="bold"
          >
            BUILD A CARBON NEUTRAL <Box as="span" color="gray.500" fontWeight="bolder">COAL</Box> MINE
          </Text>
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
        >
          <Heading as="h1" fontSize="3xl" mb={4} color="teal.200">
            Project Kasukabe helps you understand how your daily choices impact climate change.
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color="gray.300">
            A carbon footprint is a measure of the total greenhouse gas emissions, primarily carbon dioxide (CO₂), caused by human activities. In
            the context of coal mining in India, it accounts for emissions generated during the extraction, processing, transportation, and
            combustion of coal. These emissions significantly contribute to global warming and climate change. By understanding the carbon
            footprint of mining operations, companies and individuals can identify ways to reduce environmental impact. Our carbon footprint
            calculator for Indian coal mines helps measure these emissions, providing insights that can guide sustainable practices and cleaner
            energy transitions.
          </Text>
        </Container>
      </Box>

        {/* Services Section */}
      <Box
          className="Services-Container"
          id="Services"
          bgGradient="linear(to-r, green.900, green.700)"

          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={10}
          mt={10}
          minHeight="70vh"
        >
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="white" mb={8}>
            Our Services
          </Heading>
          <Flex wrap="wrap" gap={8} justifyContent="center" alignItems="center">
            {[
              { title: "Estimate Emissions", desc: "Estimate your carbon emissions by filling certain values." },
              { title: "Estimate Sink", desc: "Estimate your carbon sink by filling certain values." },
              { title: "Gap Analysis", desc: "Analyze the gap between carbon emissions and carbon sink." },
              { title: "Solutions", desc: "Providing solutions to minimize the gap between emissions and sink." },
            ].map((service, index) => (
              <Card key={index} width="42vw" bg="whiteAlpha.800" borderRadius="lg" boxShadow="2xl" height="10vw">
                <CardBody>
                  {/* <Image src={photo} alt={service.title} borderRadius="lg" /> */}
                  <Stack mt={6} spacing={3}>
                    <Heading size="md" color="teal.600">
                      {service.title}
                    </Heading>
                    <Text color="gray.700">{service.desc}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </Box>

        {/* Contact Us Section */}
        <Box
          className="ContactUsContainer"
          id="ContactUs"
          bgGradient="linear(to-r, yellow.500, yellow.300)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={10}
          mt={10}
          minHeight="50vh"
        >
          <Heading as="h1" fontSize="4xl" fontWeight={800} color="white" mb={6}>
            Contact Us
          </Heading>
          <Flex gap={6}>
            {[IoMail, MdMessage, FaLinkedin, FaInstagram].map((Icon, index) => (
              <IconButton
                key={index}
                icon={<Icon size={50} />}
                aria-label="Contact Icon"
                variant="ghost"
                color="white"
                _hover={{ color: "teal.300", transform: "scale(1.1)" }}
                transition="0.2s"
              />
            ))}
          </Flex>
        </Box>
      </Box>
      );
}
