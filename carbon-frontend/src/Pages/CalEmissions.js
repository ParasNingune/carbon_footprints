import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Select,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  Flex,
  Container,
  TabPanel,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
} from '@chakra-ui/react';
import {
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import NavBar2 from "../Components/NavBar2";

export default function CalEmissions() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedForm, setSelectedForm] = useState('');
  const [calculatedCO2Value, setCalculatedCO2Value] = useState('');
  const [calculatedNO2Value, setCalculatedNO2Value] = useState('');
  const [calculatedCH4Value, setCalculatedCH4Value] = useState('');
  const [calculatedTotalValue, setCalculatedTotalValue] = useState('');  
  const navigate = useNavigate();
  const handleTabChange = (index) => {
    setActiveTab(index);
    // Reset calculated values on tab change
    setCalculatedCO2Value('');
    setCalculatedNO2Value('');
    setCalculatedCH4Value('');
    setCalculatedTotalValue('');
  };

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const handleVisualize = () => {
    navigate('/visualization');  // Route to visualization page
  };

  const handleSubmit = () => {
    //API
    setCalculatedCO2Value('12345');
    setCalculatedNO2Value('54321');
    setCalculatedCH4Value('1122');
    setCalculatedTotalValue('67778');
  };

  return (
    <Box
      className="main-body"
      minH="100vh"
      bgGradient="linear(to-b, #f5f7fa, #c3cfe2)"
    >
      <NavBar2 />

      <Box width={'15%'} height={'90vh'}  position={'absolute'} left={0} top={'83px'} backgroundColor="rgba(0, 0, 0, 0.8)"  display={'flex'} flexDirection={'column'}>
        <Tabs orientation="vertical"  isFitted variant={'enclosed'} colorScheme='green' flex="1" display="flex" flexDirection="column" onChange={handleTabChange}>
          <TabList display={'flex'} flexDirection={'column'} flex={'1'} gap={4} padding={2}> 
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Electricity Consumption</Tab>
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Explosion Emissions</Tab>
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Fuel consumption</Tab>
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Shipping Emissions</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box 
                top={45} 
                left={300} 
                position={'absolute'} 
                backgroundColor={'white'} 
                height={'80vh'} 
                width={'30vw'} 
                borderRadius={'15px'} 
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'} 
                padding={'30px'} 
                transition={'all 0.3s ease'}  // Added smooth transition for hover effects
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }} // Elevate on hover
              >
                {/* State Selection */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Select State
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* State options */}
                    <option>Jharkhand</option>
                    <option>West Bengal</option>
                    <option>Chhattisgarh</option>
                    <option>Odisha</option>
                    <option>Telangana/ Andhra Pradesh</option>
                    <option>Tamil Nadu</option>
                    <option>Maharashtra</option>
                    <option>Assam</option>
                    <option>Madhya Pradesh</option>
                    <option>Meghalaya</option>
                  </Select>
                </FormControl>

                {/* Energy Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Energy Usage (KW/h)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter energy consumption"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Responsible Area Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Responsible Area (sq. km)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter responsible area"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Total Area Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Total Area (sq. km)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter total area"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Calculate Button */}
                <Box display="flex" justifyContent="center" mt={8} flexDirection={'column'}>
                  <Button 
                    colorScheme="teal" 
                    size="lg" 
                    alignSelf={'center'}
                    onClick={handleSubmit} 
                    boxShadow={'0 6px 12px rgba(0, 0, 0, 0.1)'}
                    _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                    _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                    transition="all 0.2s ease"
                  >
                    Calculate
                  </Button>
                </Box>
              </Box>

              {/* Results Box */}
              <Box
                backgroundColor={'white'}
                top={'45px'} 
                left={850} 
                position={'absolute'} 
                borderRadius={'15px'}
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'}
                padding={'30px'}
                height={'80vh'} 
                width={'30vw'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                transition={'all 0.3s ease'}  // Smooth hover effect
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }}  // Elevate on hover
              >
                <Text fontWeight="bold" color="gray.700" mb={4} fontSize={36} position="absolute" top={120}>
                  Calculated Results
                </Text>

                {/* Dynamic Results Data */}
                <Text fontSize={24} color="gray.600" padding={3}>
                  CO2 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  N2O Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedNO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  CH4 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCH4Value}</span>
                </Text>
                <Text fontSize={28} color="gray.600" padding={2} position={'absolute'} bottom={100} fontWeight={'bold'}>
                  Total Carbon Emitted: <span style={{ color: 'teal', fontWeight: 'bold' }}>{calculatedTotalValue}</span>
                </Text>

                {/* Visualize Button */}
                {calculatedTotalValue && (
                  <Button
                    colorScheme="teal"
                    size="lg"
                    bottom={10}
                    position={'absolute'}
                    mt={10}
                    onClick={handleVisualize}  // Route to visualization page
                    _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                    _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                    transition="all 0.2s ease"
                  >
                    Visualize
                  </Button>
                )}
              </Box>
            </TabPanel>


            {/* Explosion Emissions*/}
            <TabPanel>
              <Box 
                top={'45px'} 
                left={300} 
                position={'absolute'} 
                backgroundColor={'white'} 
                height={'80vh'} 
                width={'30vw'} 
                borderRadius={'15px'} 
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'} 
                padding={'30px'} 
                transition={'all 0.3s ease'}  // Added smooth transition for hover effects
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }} // Elevate on hover
              >
                {/* State Selection */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Explosive Type
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* State options */}
                    <option>Dynamite</option>
                    <option>Smokeless Powder</option>
                    <option>Black Powder</option>
                    <option>TNT</option>
                    <option>RDX</option>
                    <option>ANFO</option>
                  </Select>
                </FormControl>

                {/* Units Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Units Used
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Unit options select*/}
                    <option>Kilograms</option>
                    <option>Grams</option>
                    <option>Pounds</option>
                    <option>Tons</option>
                  </Select>
                </FormControl>

                {/* Explosive used  Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Amount of Explosives used
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter amount of explossives"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                

                {/* Calculate Button */}
                <Box display="flex" justifyContent="center" mt={8}>
                  <Button 
                    colorScheme="teal" 
                    size="lg" 
                    onClick={handleSubmit} 
                    boxShadow={'0 6px 12px rgba(0, 0, 0, 0.1)'}
                    _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                    _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                    transition="all 0.2s ease"
                  >
                    Calculate
                  </Button>
                </Box>
              </Box>

              {/* Results Box */}
              <Box
                backgroundColor={'white'}
                top={'45px'} 
                left={850} 
                position={'absolute'} 
                borderRadius={'15px'}
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'}
                padding={'30px'}
                height={'80vh'} 
                width={'30vw'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                transition={'all 0.3s ease'}  // Smooth hover effect
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }}  // Elevate on hover
              >
                <Text fontWeight="bold" color="gray.700" mb={4} fontSize={36} position="absolute" top={120}>
                  Calculated Results
                </Text>

                {/* Dynamic Results Data */}
                <Text fontSize={24} color="gray.600" padding={3}>
                  CO2 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  N2O Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedNO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  CH4 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCH4Value}</span>
                </Text>
                <Text fontSize={28} color="gray.600" padding={2} position={'absolute'} bottom={100} fontWeight={'bold'}>
                  Total Carbon Emitted: <span style={{ color: 'teal', fontWeight: 'bold' }}>{calculatedTotalValue}</span>
                </Text>

                {/* Visualize Button */}
                {calculatedTotalValue && (
                  <Button
                  colorScheme="teal"
                  size="lg"
                  bottom={10}
                  position={'absolute'}
                  mt={10}
                  onClick={handleVisualize}  // Route to visualization page
                  _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                  _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                  transition="all 0.2s ease"
                >
                    Visualize
                  </Button>
                )}
              </Box>
            </TabPanel>


            {/* Fuel Consumption*/}
            <TabPanel>
              <Box 
                top={'45px'} 
                left={300} 
                position={'absolute'} 
                backgroundColor={'white'} 
                height={'80vh'} 
                width={'30vw'} 
                borderRadius={'15px'} 
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'} 
                padding={'30px'} 
                transition={'all 0.3s ease'}  // Added smooth transition for hover effects
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }} // Elevate on hover
              >
                {/* State Selection */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Fuel Type
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Fuel options */}
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>LPG</option>
                    <option>CNG</option>
                  </Select>
                </FormControl>

                {/* Units Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Units Used
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Unit options select*/}
                    <option>litres</option>
                    <option>Mili-Litres</option>
                    <option>Galons</option>
                  </Select>
                </FormControl>

                {/* Fuel used  Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Amount of Fuel used
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter amount of fuel"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                

                {/* Calculate Button */}
                <Box display="flex" justifyContent="center" mt={8}>
                  <Button 
                    colorScheme="teal" 
                    size="lg" 
                    onClick={handleSubmit} 
                    boxShadow={'0 6px 12px rgba(0, 0, 0, 0.1)'}
                    _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                    _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                    transition="all 0.2s ease"
                  >
                    Calculate
                  </Button>
                </Box>
              </Box>

              {/* Results Box */}
              <Box
                backgroundColor={'white'}
                top={'45px'} 
                left={850} 
                position={'absolute'} 
                borderRadius={'15px'}
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'}
                padding={'30px'}
                height={'80vh'} 
                width={'30vw'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                transition={'all 0.3s ease'}  // Smooth hover effect
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }}  // Elevate on hover
              >
                <Text fontWeight="bold" color="gray.700" mb={4} fontSize={36} position="absolute" top={120}>
                  Calculated Results
                </Text>

                {/* Dynamic Results Data */}
                <Text fontSize={24} color="gray.600" padding={3}>
                  CO2 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  N2O Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedNO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  CH4 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCH4Value}</span>
                </Text>
                <Text fontSize={28} color="gray.600" padding={2} position={'absolute'} bottom={100} fontWeight={'bold'}>
                  Total Carbon Emitted: <span style={{ color: 'teal', fontWeight: 'bold' }}>{calculatedTotalValue}</span>
                </Text>

                {/* Visualize Button */}
                {calculatedTotalValue && (
                  <Button
                  colorScheme="teal"
                  size="lg"
                  bottom={10}
                  position={'absolute'}
                  mt={10}
                  onClick={handleVisualize}  // Route to visualization page
                  _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                  _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                  transition="all 0.2s ease"
                >
                    Visualize
                  </Button>
                )}
              </Box>
            </TabPanel>


            {/* Shipping Consumption*/}
            <TabPanel>
              <Box 
                top={'45px'} 
                left={300} 
                position={'absolute'} 
                backgroundColor={'white'} 
                height={'80vh'} 
                width={'30vw'} 
                borderRadius={'15px'} 
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'} 
                padding={'30px'} 
                transition={'all 0.3s ease'}  // Added smooth transition for hover effects
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }} // Elevate on hover
              >
                {/* Transportation type Selection */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Transport Method
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Fuel options */}
                    <option>Truck</option>
                    <option>Ship</option>
                    <option>Rail</option>
                    <option>Plane</option>
                  </Select>
                </FormControl>

                {/* Weight Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Weight of cargo (kg)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter amount shipped"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Distance Input */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Distance Travelled
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Enter distance travelled"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                

                {/* Calculate Button */}
                <Box display="flex" justifyContent="center" mt={8}>
                  <Button 
                    colorScheme="teal" 
                    size="lg" 
                    onClick={handleSubmit} 
                    boxShadow={'0 6px 12px rgba(0, 0, 0, 0.1)'}
                    _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                    _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                    transition="all 0.2s ease"
                  >
                    Calculate
                  </Button>
                </Box>
              </Box>

              {/* Results Box */}
              <Box
                backgroundColor={'white'}
                top={'45px'} 
                left={850} 
                position={'absolute'} 
                borderRadius={'15px'}
                boxShadow={'0 8px 16px rgba(0, 0, 0, 0.1)'}
                padding={'30px'}
                height={'80vh'} 
                width={'30vw'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                transition={'all 0.3s ease'}  // Smooth hover effect
                _hover={{ boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }}  // Elevate on hover
              >
                <Text fontWeight="bold" color="gray.700" mb={4} fontSize={36} position="absolute" top={120}>
                  Calculated Results
                </Text>

                {/* Dynamic Results Data */}
                <Text fontSize={24} color="gray.600" padding={3}>
                  CO2 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  N2O Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedNO2Value}</span>
                </Text>
                <Text fontSize={24} color="gray.600" padding={3}>
                  CH4 Emitted: <span style={{ fontWeight: 'bold', color: 'teal' }}>{calculatedCH4Value}</span>
                </Text>
                <Text fontSize={28} color="gray.600" padding={2} position={'absolute'} bottom={100} fontWeight={'bold'}>
                  Total Carbon Emitted: <span style={{ color: 'teal', fontWeight: 'bold' }}>{calculatedTotalValue}</span>
                </Text>

                {/* Visualize Button */}
                {calculatedTotalValue && (
                  <Button
                  colorScheme="teal"
                  size="lg"
                  bottom={10}
                  position={'absolute'}
                  mt={10}
                  onClick={handleVisualize}  // Route to visualization page
                  _hover={{ backgroundColor: 'teal.600', boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)' }}
                  _active={{ backgroundColor: 'teal.700', transform: 'scale(0.98)' }}
                  transition="all 0.2s ease"
                >
                    Visualize
                  </Button>
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box
          display="flex"
          flexDirection="column"  // Ensures the ads are stacked vertically
          justifyContent="space-between"  // Distributes space between the ads
          height="90vh"  // Full height of the viewport
          width="15%"  // Adjust width as needed
          backgroundColor="gray.800"  // Background color for the sidebar
          borderRadius="15px"
          boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)"
          right={0}
          top={83}
          position={'absolute'}
        >
          {/* Ad Section 1 */}
          <Box
            flexGrow={1}  // Ensures this box takes equal vertical space
            backgroundColor="gray.100"
            borderRadius="15px"
            display="flex"
            width={'93%'}
            left={5}
            justifyContent="center"
            alignItems="center"
            ml={2}
            mb={3}
            mt={3}
            height={'14%'}
          >
            <Text color="gray.600">Ad Section 1</Text>
          </Box>

          {/* Ad Section 2 */}
          <Box
            flexGrow={1}  // Ensures this box takes equal vertical space
            backgroundColor="gray.100"
            borderRadius="15px"
            display="flex"
            width={'93%'}
            left={5}
            justifyContent="center"
            alignItems="center"
            ml={2}
            mb={3}
            height={'14%'}
          >
            <Text color="gray.600">Ad Section 2</Text>
          </Box>

          {/* Ad Section 3 */}
          <Box
            flexGrow={1}  // Ensures this box takes equal vertical space
            backgroundColor="gray.100"
            borderRadius="15px"
            display="flex"
            width={'93%'}
            left={5}
            justifyContent="center"
            alignItems="center"
            ml={2}
            mb={3}
            height={'14%'}
          >
            <Text color="gray.600">Ad Section 3</Text>
          </Box>

          {/* Ad Section 4 */}
          <Box
            flexGrow={1}  // Ensures this box takes equal vertical space
            backgroundColor="gray.100"
            borderRadius="15px"
            display="flex"
            width={'93%'}
            left={5}
            justifyContent="center"
            alignItems="center"
            ml={2}
            mb={3}
            height={'14%'}
          >
            <Text color="gray.600">Ad Section 4</Text>
          </Box>
        </Box>
    </Box>
  );
}
