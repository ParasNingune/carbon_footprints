import React from 'react';
import {
  Box,
  Image,
  Link as ChakraLink,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import icon from '../assets/icon.png'

export default function NavBar() {
  const links = [
    { name: 'Carbon Emissions', link: '/emissions' },
    { name: 'Carbon Sink', link: '/sink' },
    { name: 'Gap Closure', link: '/solutions' },
    { name: 'Visualizations', link: '/visualization' },
    {name: 'Credits', link: '/carbon-credit'},
  ];

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = '/';
  };

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={4}
      backgroundColor="rgba(0, 0, 0, 0.8)"
      boxShadow="lg"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={1000}
    >
      {/* Logo and Home Link */}
      <Box>
        <ChakraLink as={Link} to="/">
        <Image src={icon} alt="logo" boxSize="50px" />
        </ChakraLink>
      </Box>

      {/* Desktop Navigation Links */}
      <Flex
        as="ul"
        listStyleType="none"
        alignItems="center"
        display={{ base: 'none', md: 'flex' }}
      >
        {links.map((item, index) => (
          <Box key={index} marginX={3}>
            <ChakraLink
              as={Link}
              to={item.link}
              fontSize="lg"
              color="white"
              _hover={{ textDecoration: 'underline', color: 'teal.200' }}
              _active={{textDecoration: 'underline', color: 'teal.200' }}
              padding={2}
            >
              {item.name}
            </ChakraLink>
          </Box>
        ))}
        <Spacer />
        <IconButton
          icon={<FiLogOut />}
          aria-label="Logout"
          colorScheme="teal"
          onClick={handleLogout}
          marginLeft={3}
        />
      </Flex>

      {/* Mobile Navigation */}
      <Flex display={{ base: 'flex', md: 'none' }} alignItems="center">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FiMenu />}
            variant="outline"
            colorScheme="teal"
          />
          <MenuList>
            {links.map((item, index) => (
              <MenuItem as={Link} to={item.link} key={index}>
                {item.name}
              </MenuItem>
            ))}
            <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
