import React from 'react';
import { Box, Image, Heading, Text, Container, Stack, IconButton, Flex, Divider } from '@chakra-ui/react';
import { Card, CardBody, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import photo from "../assets/Bg.jpg";

export default function HomePage() {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/emissions'); // Navigate to the specified route
  };
  return (
    <Box className="main-body" color="white" overflowY="auto">
      {/* Background Image */}
      <Image
        src={photo}
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
            fontSize={{ base: '4xl', md: '6xl' }}
            lineHeight="short"
            color="yellow.400"
            textShadow="2px 2px 6px rgba(0, 0, 0, 0.7)"
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
          boxShadow="2xl"
          padding={8}
          mt={10}
        >
          <Heading as="h1" fontSize="3xl" mb={4} color="teal.200">
            Team Neutral: Shaping a Greener Future with Every Choice!
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color="gray.300">
            Our mission is to help India's coal mining industry reduce carbon emissions, promote sustainable practices, and secure a cleaner energy future.
          </Text>

          {/*Get started Button*/}
          <Button
            onClick={handleGetStarted}
            colorScheme="teal"
            size="lg"
            mt={8}
            px={8}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        id="Services"
        bgGradient="linear(to-b, teal.500, green.300)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={10}
        mt={10}
        minHeight="80vh"
      >
        <Heading as="h2" fontSize="4xl" fontWeight="bold" color="white" mb={8}>
          Our Services
        </Heading>
        <Flex wrap="wrap" gap={8} justifyContent="center" alignItems="center">
          {[
            { title: "Estimate Emissions", desc: "Estimate your carbon emissions by filling certain values." },
            { title: "Estimate Sink", desc: "Estimate your carbon sink by filling certain values." },
            { title: "Gap Analysis", desc: "Analyze the gap between carbon emissions and carbon sink." },
            { title: "Solutions", desc: "Find solutions to minimize the gap between emissions and sink." },
          ].map((service, index) => (
            <Card key={index} width="40vw" bg="whiteAlpha.900" borderRadius="xl" boxShadow="2xl" transition="0.3s" _hover={{ transform: 'scale(1.05)' }}>
              <CardBody>
                <Stack mt={4} spacing={3}>
                  <Heading size="md" color="teal.600" textAlign="center">
                    {service.title}
                  </Heading>
                  <Text color="gray.700" textAlign="center">{service.desc}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>

      {/* Contact Us Section */}
      <Box
        id="ContactUs"
        bgGradient="linear(to-b, green.600, green.300)"
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
              _hover={{ color: "teal.300", transform: "scale(1.2)" }}
              transition="0.3s"
            />
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Divider borderColor="gray.400" mt={8} />
      <Box textAlign="center" py={6} color="gray.400">
        © 2024 Team Neutral | All Rights Reserved
      </Box>
    </Box>
  );
}
