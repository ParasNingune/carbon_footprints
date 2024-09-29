import React from 'react'
import { Box, Tabs, TabList, Tab, TabPanels, Image, Card, CardBody, Text, Stack, Heading, TabPanel, Center, Flex , Button } from '@chakra-ui/react';

import NavBar from '../Components/NavBar2';

export default function Solutions() {
  return (
    <Box className='main-body' height={'100vh'} width={'100vw'}>
      <NavBar />

      <Box width={'100%'} padding={6} bgGradient="linear(to-b, #f5f7fa, #c3cfe2)" position={'absolute'} top={'85px'}>
        <Tabs variant={'soft-rounded'} colorScheme='green' isFitted>
          <TabList bgGradient="linear(to-b, black.400, black.100)">
            <Tab>Trees & Forests</Tab>
            <Tab>Biomass Carbon Removal & Storage</Tab>
            <Tab>Direct Air Capture</Tab>
            <Tab>Carbon Mineralization</Tab>
            <Tab>Ocean-based Approaches</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading marginTop={5} textDecoration={'underline'} marginLeft={7}>
                Trees & Forests
              </Heading>
              <Card borderRadius={15} margin={5} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgGradient="linear(to-l, green.600, green.100)" marginTop={8}>
                <Image src='https://cff2.earth.com/uploads/2024/01/30073039/Reforestation-scaled.jpg' height={'150px'} width={'200px'} />
                <CardBody>
                  <Stack mt={'6'} spacing={3}>
                    <Heading>Reforestation</Heading>
                    <Text>Restoring forest ecosystems after they’ve been damaged by wildfire or cleared for agricultural or commercial uses.</Text>
                  </Stack>
                </CardBody>
              </Card>

              <Card borderRadius={15} margin={5} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgGradient="linear(to-r, green.600, green.100)">
                <CardBody>
                  <Stack mt={'6'} spacing={3}>
                    <Heading>Restocking</Heading>
                    <Text>Increasing the density of forests where trees have been lost due to disease or disturbances.</Text>
                  </Stack>
                </CardBody>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EAV7Totptq_1jXhcn63L8kV1GFR9rnrAzQ&s' height={'150px'} width={'200px'} />

              </Card>

              <Card borderRadius={15} margin={5} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgGradient="linear(to-l, green.600, green.100)">
                <Image src='https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2023/07/silvopasture.jpg' height={'150px'} width={'200px'} />
                <CardBody>
                  <Stack mt={'6'} spacing={3}>
                    <Heading>Silvopasture</Heading>
                    <Text>Incorporating trees into animal agriculture systems.</Text>
                  </Stack>
                </CardBody>
              </Card>

              <Card borderRadius={15} margin={5} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgGradient="linear(to-r, green.600, green.100)">
                <CardBody>
                  <Stack mt={'6'} spacing={3}>
                    <Heading>Cropland agroforestry</Heading>
                    <Text>Incorporating trees into row crop agriculture systems.</Text>
                  </Stack>
                </CardBody>
                <Image src='https://static.wixstatic.com/media/28fcc4_5fdc7dfe7bdb495495da4b1e076ad3ec~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/28fcc4_5fdc7dfe7bdb495495da4b1e076ad3ec~mv2.png' height={'150px'} width={'200px'} />
              </Card>

              <Card borderRadius={15} margin={5} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bgGradient="linear(to-l, green.600, green.100)">
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGvPy-WaSzGrJt5n31OBpg3hqumaPUbN6iQ&s' height={'150px'} width={'200px'} />
                <CardBody>
                  <Stack mt={'6'} spacing={3}>
                    <Heading>Urban reforestation</Heading>
                    <Text>Increasing tree cover in urban areas.</Text>
                  </Stack>
                </CardBody>
              </Card>
            </TabPanel>

            <TabPanel padding={6}>
              <Heading textDecoration={'underline'} marginTop={5}>
                Biomass carbon removal and storage (BiCRS)
              </Heading>
              <Text marginTop={8}>
                Includes a range of processes that use biomass from plants or algae to remove carbon dioxide from the air and then store it for long periods of time. These methods aim to leverage the carbon storage capacity of plants beyond their natural lifecycles: Whereas trees remove and store carbon only until they die and decompose, biomass carbon removal and storage aims to sequester the CO2 that plants capture more permanently.
                There are many different methods for removing carbon using biomass.<br />These include:-
                <br />1. Creation of biochar, which is made by heating biomass in low-oxygen environments to produce a charcoal-like soil additive that sequesters carbon.
                <br />2. Bio-oil, which uses a similar process to produce a liquid that gets injected underground; and permanent storage of carbon-rich biomass in vaults.
                <br />3. Bioenergy carbon capture and storage (BECCS) is another carbon removal pathway which involves generating energy using biomass and then capturing and sequestering the resulting CO2 emissions.
                <br />4. Converting biomass to hydrogen, which could result in a carbon-negative fuel.
                <br />
                <br />While biomass carbon removal and storage can offer long-term CO2 removal.
              </Text>
              <Flex justifyContent="center" marginTop={10}>
                <Image
                  src="https://a.storyblok.com/f/287364/999x666/13cbb6f55f/bicrs-pathway.jpeg"
                  height={500}
                  width={900}
                />
              </Flex>
            </TabPanel>

            <TabPanel>
              <Heading marginTop={5} textDecoration={'underline'}>
                Direct Air Capture
              </Heading>
              <Text marginTop={8}>
                Direct air capture is the process of chemically scrubbing carbon dioxide from the ambient air and then sequestering it either underground or in long-lived products like concrete.<br /><br />This technology is similar to the carbon capture and storage technology used to reduce emissions from sources like power plants and industrial facilities.<br />The difference is that direct air capture removes excess carbon that’s already been emitted into the atmosphere, instead of capturing it at the source.
              </Text>
              <Flex justifyContent="center" marginTop={10}>
                <Image
                  src="https://files.wri.org/d8/s3fs-public/styles/1575_wide/s3/2023-03/direct-air-capture-carbon-removal-wri.png?VersionId=lHsRmjJsvbLjR_.ERGbgF738EDLhOOzS&itok=fkto6A9Y"
                  height={500}
                  width={900}
                />
                </Flex>
            </TabPanel>

            <TabPanel>
              <Heading marginTop={5} textDecoration={'underline'}>
                Carbon Mineralization
              </Heading>
              <Text marginTop={8}>
                Some minerals naturally react with CO2, turning carbon dioxide from a gas into a solid and keeping it out of the atmosphere permanently. This process is commonly referred to as “carbon mineralization” or “enhanced weathering,” and it naturally happens very slowly, over hundreds or thousands of years.
                <br /><br />To speed up the carbon mineralization process, especially by enhancing the exposure of these minerals to CO2 in the air or ocean. Which means moving air through large deposits of mine tailings (rocks left over from mining operations) that contain the right mineral composition, crushing or developing enzymes that chew up mineral deposits to increase their surface area, spreading certain types of ground rock on croplands or coastal areas where it reacts with and locks away carbon dioxide, and finding ways for certain industrial byproducts, like fly ash, kiln dust or iron and steel slag, that are reactive with CO2 to sequester it.
              </Text>
              <Flex justifyContent="center" marginTop={10}>
                <Image
                  src="https://files.wri.org/d8/s3fs-public/styles/1575_wide/s3/2023-03/carbon-mineralization-carbon-removal-wri.png?VersionId=QeY6oiC.5Ze0V4ioR5kYpV46v_K5R38Q&itok=WmxoyuBj"
                  height={500}
                  width={900}
                />
              </Flex>
            </TabPanel>

            <TabPanel>
              <Heading marginTop={5} textDecoration={'underline'}>
                Ocean-Based-Approaches
              </Heading>
              <Text marginTop={8}>
                A number of ocean-based carbon removal approaches have been proposed to leverage the ocean’s capacity to sequester carbon and expand the portfolio of options beyond land-based applications. However, nearly all of these strategies are at early stages of development and require more research, and in some cases field testing, to understand whether they are appropriate for investment given potential ecological, social and governance impacts.
                <br /> <br />Each approach aims to accelerate natural carbon cycles in the ocean. Potential solutions include leveraging photosynthesis in coastal plants, seaweed, or phytoplankton; adding certain minerals to seawater that react with dissolved CO2 and lock it away; or running an electric current through seawater to accelerate reactions that ultimately help extract CO2.
              </Text>
              <Flex justifyContent="center" marginTop={10}>
                <Image
                  src="https://oceanvisions.org/wp-content/uploads/2023/08/Ocean-Based-Carbon-Dioxide-Removal-1024x665.png"
                  height={500}
                  width={900}
                />
                </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
