import React from 'react';
import { Box, Image, Tabs, TabList, TabPanels, Tab, TabPanel, textDecoration } from '@chakra-ui/react';
import NavBar from '../Components/NavBar2';
import photo from "../assets/photo.jpg"
import Chart from "react-apexcharts";

export default function Visualize() {

  const emissions_series = [
    {
      xaxis: {categories: ['Electricity', 'Explosion', 'Fuel', 'Transportation']},
      series: [
        {
          name: 1,
          data: [470, 264, 127, 223]
        },
        {
          name: 2,
          data: [409, 316, 169, 178]
        },
        {
          name: 3,
          data: [447, 307, 139, 194]
        },
        {
          name: 4,
          data: [565, 346, 156, 245]
        },
        {
          name: 5,
          data: [495, 330, 123, 186]
        },
        {
          name: 6,
          data: [540, 271, 166, 234]
        },
        {
          name: 7,
          data: [587, 346, 160, 187]
        },
        {
          name: 8,
          data: [547, 346, 160, 187]
        },
        {
          name: 9,
          data: [547, 350, 152, 215]
        },
        {
          name: 10,
          data: [419, 293, 124, 241]
        },
        {
          name: 11,
          data: [526, 261, 159, 229]
        },
        {
          name: 12,
          data: [455, 346, 149, 172]
        },
        {
          name: 13,
          data: [416, 277, 164, 233]
        },
        {
          name: 14,
          data: [522, 263, 120, 188]
        },
        {
          name: 15,
          data: [428, 338, 161, 206]
        }
      ]
    }
  ]

  const sink_series = [
    {
      factors: ['Forests', 'CCS', 'BioFuel', 'Mineralization'],
      data: [
        {
          name: 1,
          data: [70, 24, 127, 23]
        },
        {
          name: 2,
          data: [49, 36, 19, 18]
        },
        {
          name: 3,
          data: [47, 37, 19, 14]
        },
        {
          name: 4,
          data: [55, 36, 16, 25]
        },
        {
          name: 5,
          data: [45, 30, 13, 16]
        },
        {
          name: 6,
          data: [50, 21, 16, 24]
        },
        {
          name: 7,
          data: [57, 36, 10, 17]
        },
        {
          name: 8,
          data: [57, 36, 10, 17]
        },
        {
          name: 9,
          data: [57, 30, 12, 25]
        },
        {
          name: 10,
          data: [49, 23, 14, 21]
        },
        {
          name: 11,
          data: [56, 21, 19, 29]
        },
        {
          name: 12,
          data: [45, 36, 19, 12]
        },
        {
          name: 13,
          data: [46, 27, 14, 23]
        },
        {
          name: 14,
          data: [52, 23, 10, 18]
        },
        {
          name: 15,
          data: [38, 38, 11, 26]
        }
      ]
    }
  ]
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
                      src={'https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2021/06/bar_chart_clustered.png?fit=576%2C384&ssl=1'}
                      alt="Graph 2 - Emission Analysis"
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
