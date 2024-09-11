import React from 'react';
import { Box, Image, Tabs, TabList, TabPanels, Tab, TabPanel, textDecoration } from '@chakra-ui/react';
import NavBar from '../Components/NavBar2';
import photo from "../assets/photo.jpg"

export default function Visualize() {
  return (
    <Box className="main-body" width={'100vw'}>
      <NavBar />
      {/* Tabs Navigation */}
      <Box width={'100%'} padding={6} bgGradient="linear(to-b, #f5f7fa, #c3cfe2)" position={'absolute'} top={'85px'}>
        <Tabs variant="soft-rounded" colorScheme="green" isFitted >
          <TabList>
            <Tab>Emission Analysis</Tab>
            <Tab>Sink Analysis</Tab>
            <Tab>Gap Analysis</Tab>
          </TabList>

          {/* Tab Panels (Content changes based on the selected tab) */}
          <TabPanels>
            {/* Emission Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, green.600, green.100)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two graphs */}
                  <Box className="graph-1" marginRight={5}>
                    <Image
                      src={'https://cdn1.byjus.com/wp-content/uploads/2019/11/Line-Graph.png'}
                      alt="Graph 1 - Emission Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>

                  <Box className="graph-2">
                    <Image
                      src={'https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2021/06/bar_chart_clustered.png?fit=576%2C384&ssl=1'}
                      alt="Graph 2 - Emission Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>
                </Box>
                <Box display={'flex'} padding={5}>
                  {/* Second two graphs */}
                  <Box className="graph-3" marginRight={5}>
                    <Image
                      src={'https://cdn.ttgtmedia.com/rms/onlineimages/histogram_of_test_scores-h_half_column_mobile.png'}
                      alt="Graph 3 - Emission Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>

                  <Box className="graph-4">
                    <Image
                      src={'https://media.geeksforgeeks.org/wp-content/uploads/20220920123646/Piechartexample2.png'}
                      alt="Graph 4 - Emission Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            {/* Sink Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, green.600, green.100)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two graphs for Sink Analysis */}
                  <Box className="graph-1" marginRight={5}>
                    <Image
                      src={photo}
                      alt="Graph 1 - Sink Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>

                  <Box className="graph-2">
                    <Image
                      src={photo}
                      alt="Graph 2 - Sink Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>
                </Box>
                <Box display={'flex'} padding={5}>
                  {/* Second two graphs for Sink Analysis */}
                  <Box className="graph-3" marginRight={5}>
                    <Image
                      src={photo}
                      alt="Graph 3 - Sink Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>

                  <Box className="graph-4">
                    <Image
                      src={photo}
                      alt="Graph 4 - Sink Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            {/* Gap Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, green.600, green.100)" padding={5} borderRadius={25}>
                <Image
                  src={'https://media.geeksforgeeks.org/wp-content/uploads/20220920123646/Piechartexample2.png'}
                  alt="Gap Analysis Graph"
                  height={'500px'}
                  width={'800px'}
                  margin={25}
                  marginLeft={275}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
