import React, { useState } from 'react';
import {
  Box,
  Select,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Flex,
  Container,
  Button,
  Text,
} from '@chakra-ui/react';
import NavBar2 from "../Components/NavBar2";

export default function CalEmissions() {
  const [selectedForm, setSelectedForm] = useState('');
  const [calculatedValue, setCalculatedValue] = useState('');

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    setCalculatedValue('Calculated Value: 1234');
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'form1':
        return (
          <VStack spacing={4} width="full">
            <FormControl>
              <FormLabel>Name of Tree</FormLabel>
              <Input placeholder="Enter state name" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Vegetation Type</FormLabel>
              <Input placeholder="Enter energy per time" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Area Covered(hectares)</FormLabel>
              <Input placeholder="Enter responsible area" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Carbon Sequestration Rate(tons CO2/hectares/year)</FormLabel>
              <Input placeholder="Enter total area" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Additional Details</FormLabel>
              <Input placeholder="Enter Details" bg="gray.50" />
            </FormControl>
          </VStack>
        );
      default:
        return <Box>Please select a form.</Box>;
    }
  };

  return (
    <Box
      className="main-body"
      minH="100vh"
      bgGradient="linear(to-r, #f5f7fa, #c3cfe2)"
    >
      <NavBar2 />
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        padding={6}
        color="black"
      >
        <Heading as="h2" size="lg" mb={6} color="gray.800">
          CARBON SINK
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="flex-start"
          justify="center"
          gap={10}
        >
          <Container
            maxW="md"
            bg="white"
            borderRadius="lg"
            boxShadow="2xl"
            p={8}
            backdropFilter="blur(10px)"
          >
            <Select
              placeholder="Select a form"
              onChange={handleFormChange}
              mb={5}
              bg="gray.100"
              color="black"
              _hover={{ bg: 'gray.200' }}
            >
              <option value="form1">Afforestration</option>
            </Select>
            {renderForm()}
            {selectedForm && (
              <Button
                mt={6}
                colorScheme="teal"
                width="full"
                onClick={handleSubmit}
                boxShadow="md"
                _hover={{ boxShadow: 'lg' }}
              >
                Calculate
              </Button>
            )}
          </Container>

          {/* Calculated Value Box */}
          <Container
            maxW="sm"
            bg="white"
            borderRadius="lg"
            boxShadow="2xl"
            p={8}
            backdropFilter="blur(10px)"
            minW={{ base: 'full', md: 'sm' }}
          >
            <Heading as="h3" size="md" mb={4} color="gray.800">
              Calculated Value
            </Heading>
            <Text fontSize="xl" color="teal.600">
              {calculatedValue || 'No calculation yet.'}
            </Text>
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
}
