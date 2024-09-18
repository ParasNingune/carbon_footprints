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
    //API
    setCalculatedValue('Calculated Value: 1234');
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'form1':
        return (
          <VStack spacing={4} width="full">
            <FormControl>
              <FormLabel>State Name</FormLabel>
              <Input placeholder="Enter state name" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Energy per Time</FormLabel>
              <Input placeholder="Enter energy per time" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Responsible area</FormLabel>
              <Input placeholder="Enter responsible area" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Total area (m²)</FormLabel>
              <Input placeholder="Enter total area" bg="gray.50" />
            </FormControl>
          </VStack>
        );
      case 'form2':
        return (
          <VStack spacing={4} width="full">
            <FormControl>
              <FormLabel>Explosion Type</FormLabel>
              <Input placeholder="Enter explosion type" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Amount of explosive used</FormLabel>
              <Input placeholder="Enter amount of explosive" bg="gray.50" />
            </FormControl>
          </VStack>
        );
      case 'form3':
        return (
          <VStack spacing={4} width="full">
            <FormControl>
              <FormLabel>Fuel Type</FormLabel>
              <Input placeholder="Enter fuel type" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Volume of fuel consumed (litres)</FormLabel>
              <Input placeholder="Enter volume of fuel" bg="gray.50" />
            </FormControl>
          </VStack>
        );
      case 'form4':
        return (
          <VStack spacing={4} width="full">
            <FormControl>
              <FormLabel>Weight unit</FormLabel>
              <Input placeholder="Enter weight unit" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Weight value</FormLabel>
              <Input placeholder="Enter weight value" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Distance unit</FormLabel>
              <Input placeholder="Enter distance unit" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Distance value</FormLabel>
              <Input placeholder="Enter distance value" bg="gray.50" />
            </FormControl>
            <FormControl>
              <FormLabel>Transport Method</FormLabel>
              <Input placeholder="Enter transport method" bg="gray.50" />
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
          CARBON EMISSIONS
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
              <option value="form1">Electricity Consumption</option>
              <option value="form2">Explosion Emissions</option>
              <option value="form3">Fuel consumption</option>
              <option value="form4">Shipping Emissions</option>
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
