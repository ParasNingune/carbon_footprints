import React from 'react';
import { Box, Image, Flex, Link as ChakraLink } from '@chakra-ui/react';
import logo2 from '../assets/logo2.png';
import icon from '../assets/icon.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={4}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={1000}
    >
      {/* Logo */}
      <Box onClick={() => handleScroll('Home')} cursor="pointer">
        <Image src={icon} alt="logo" boxSize="50px" />
      </Box>

      {/* Navigation Links */}
      <Flex as="ul" listStyleType="none" spacing={4} alignItems="center" margin={0}>
        <Box marginX={3}>
          <ChakraLink
            onClick={() => handleScroll('Services')}
            fontSize="lg"
            color="white"
            _hover={{ textDecoration: 'underline', color: 'teal.200' }}
            padding={2}
          >
            Services
          </ChakraLink>
        </Box>

        <Box marginX={3}>
          <ChakraLink
            onClick={() => handleScroll('ContactUs')}
            fontSize="lg"
            color="white"
            _hover={{ textDecoration: 'underline', color: 'teal.200' }}
            padding={2}
          >
            Contact Us
          </ChakraLink>
        </Box>

        <Box marginX={3}>
          <Link
            to="/emissions"
            fontSize="lg"
            color="white"
            _hover={{ textDecoration: 'underline', color: 'teal.200' }}
            padding={2}
          >
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
