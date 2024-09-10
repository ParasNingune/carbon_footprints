import React from 'react';
import { Box, Image, Link as ChakraLink, Flex } from '@chakra-ui/react';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const links = [
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contactus" },
        { name: "Login", link: "/login" },
    ];

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
            <Box>
                <Image src={logo2} alt="logo" boxSize="50px" />
            </Box>

            {/* Navigation Links */}
            <Flex
                as="ul"
                listStyleType="none"
                spacing={4}
                alignItems="center"
                margin={0}
            >
                {links.map((link, index) => (
                    <Box key={index} marginX={3}>
                        <Link
                            as={Link}
                            to={link.link}
                            fontSize="lg"
                            color="white"
                            _hover={{ textDecoration: "underline", color: "teal.200" }}
                            padding={2}
                        >
                            {link.name}
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
