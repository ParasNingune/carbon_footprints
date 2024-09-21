import NavBar2 from "../Components/NavBar2";
import React, { useState } from "react";

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


export default function CalEmissions() {
  const [selectedForm, setSelectedForm] = useState('');
  const [calculatedCO2Value, setCalculatedCO2Value] = useState('');
  const [calculatedNO2Value, setCalculatedNO2Value] = useState('');
  const [calculatedCH4Value, setCalculatedCH4Value] = useState('');
  const [calculatedTotalValue, setCalculatedTotalValue] = useState('');

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
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
        <Tabs orientation="vertical"  isFitted variant={'enclosed'} colorScheme='green' flex="1" display="flex" flexDirection="column">
          <TabList display={'flex'} flexDirection={'column'} flex={'1'} gap={4} padding={2}> 
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Afforestation</Tab>
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Direct Air Capture</Tab>
            <Tab flex={'1'} _selected={{ bg: "grey" }} fontSize={20} fontWeight={600} textColor={'white'}>Carbon Mineralization</Tab>
           
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
                {/* Vegetation Types */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Select Vegetation
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Vegetation options */}
                    <option>Forest</option>
                    <option>Grassland</option>
                    <option>Wetland</option>
                    <option>Agricultural</option>
                    <option>Mangrove</option>
                  </Select>
                </FormControl>

                {/* Area Covered */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Area Covered (Hectares)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Area Covered"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Carbon Sequestration Rate */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  Carbon Sequestration Rate (Tones CO2/Hectares/Years)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Sequestration Rate"
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

               
              </Box>
            </TabPanel>


            {/* Direct Air capture*/}
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
                {/* Design Capacity*/}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Design Capacity(Tons/Year)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Capacity(Tons/Year)"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Operational Efficiency */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  Operational Efficiency(%)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Efficiency"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Operational Hours */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  Operational Hours(Hrs)
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Time"
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

               
              </Box>
            </TabPanel>


            {/* Carbon Mineralization*/}
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
                {/* Mineral Selection */}
                <FormControl isRequired padding={3}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                    Mineral Type
                  </FormLabel>
                  <Select 
                    onChange={handleFormChange} 
                    borderColor="gray.300" 
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                    transition="all 0.3s ease"  // Smooth focus and hover transitions
                  >
                    {/* Mineral options */}
                    <option>Olivine (Mg₂SiO₄)</option>
                    <option>Serpentine(Mg₃Si₂O₅(OH)₄)</option>
                    <option>Basalt</option>
                  </Select>
                </FormControl>

                {/* CO2 Emissions captured */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  CO2 Emissions captured
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="CO2 Emission (Tons)"
                    transition="all 0.3s ease"
                  />
                </FormControl>

                {/* Stoichiometric Ratio */}
                <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  Stoichiometric Ratio
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Ratio (Mineral type: CO2)"
                    transition="all 0.3s ease"
                  />
                </FormControl>
                 {/* Reaction efficiency*/}
                 <FormControl isRequired padding={3} mt={4}>
                  <FormLabel padding={2} fontSize="lg" fontWeight="bold" color="gray.700">
                  Reaction efficiency
                  </FormLabel>
                  <Input 
                    type="number" 
                    borderColor="gray.300"
                    borderRadius="10px"
                    _hover={{ borderColor: 'teal.400' }} 
                    _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }} 
                    placeholder="Efficiency(%)"
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
