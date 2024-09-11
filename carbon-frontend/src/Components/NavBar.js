import React from 'react';
import { Box, Image, Link as ChakraLink, Flex } from '@chakra-ui/react';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const links = [
        { name: "Services", link: "/" },
        { name: "Contact Us", link: "/" },
        { name: "Login", link: "/login" },
    ];

    const handleServiceScroll = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        window.scrollBy({
            top: window.innerHeight, // Scroll by 100vh
            behavior: 'smooth',      // Smooth scrolling effect
        });
    };

    const handleContactScroll = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        window.scrollBy({
            top: 2*window.innerHeight, // Scroll by 200vh
            behavior: 'smooth',      // Smooth scrolling effect
        });
    };

    const handleHomeScroll = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        window.scrollBy({
            top: 0*window.innerHeight, // Scroll by 200vh
            behavior: 'smooth',      // Smooth scrolling effect
        });
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
            <Box onClick={handleHomeScroll}>
                <Image src={logo2} alt="logo" boxSize="50px"/>
            </Box>

            {/* Navigation Links */}
            <Flex
                as="ul"
                listStyleType="none"
                spacing={4}
                alignItems="center"
                margin={0}
            >
                <Box marginX={3}>
                    <Link
                        as={Link}
                        to={'/#Services'}
                        fontSize="lg"
                        color="white"
                        _hover={{ textDecoration: "underline", color: "teal.200" }}
                        padding={2}
                    >
                        Services
                    </Link>
                </Box>

                <Box marginX={3}>
                    <Link
                        as={Link}
                        to={'/#ContactUs'}
                        fontSize="lg"
                        color="white"
                        _hover={{ textDecoration: "underline", color: "teal.200" }}
                        padding={2}
                    >
                        Contact Us
                    </Link>
                </Box>

                <Box  marginX={3}>
                    <Link
                        as={Link}
                        to={'/login'}
                        fontSize="lg"
                        color="white"
                        _hover={{ textDecoration: "underline", color: "teal.200" }}
                        padding={2}
                    >
                        Login
                    </Link>
                </Box>

            </Flex>
        </Box>
    );
}
