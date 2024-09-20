import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Container,
  Text,
  Divider,
} from '@chakra-ui/react';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/emissions');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-b, green.600, green.100)"

    >
      <Container
        centerContent
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="2xl"
        maxWidth="400px"
        width="100%"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={2} color="teal.600">
          A STEP TOWARDS CARBON NEUTRALITY!
        </Heading>
        <Text color="gray.500" fontSize="inherit" mb={6}>
          Log in to continue to your dashboard
        </Text>
        <Divider mb={4} />
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl id="username">
              <FormLabel color="gray.600">Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                focusBorderColor="teal.400"
                variant="filled"
                bg="gray.100"
                _hover={{ bg: 'gray.200' }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color="gray.600">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                focusBorderColor="teal.400"
                variant="filled"
                bg="gray.100"
                _hover={{ bg: 'gray.200' }}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              type="submit"
              width="full"
              mt={4}
              _hover={{ bg: 'teal.500' }}
              _active={{ bg: 'teal.600', transform: 'scale(0.98)' }}
              boxShadow="md"
              transition="all 0.3s ease"
            >
              Login
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
}
