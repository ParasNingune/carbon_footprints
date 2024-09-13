import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import NavBar from '../Components/NavBar2';
import { GiHistogram } from 'react-icons/gi';
import { FcHeatMap } from 'react-icons/fc';

// Sample data for the bar graphs
const data = [
  { name: 'Electricity', value: 4000 },
  { name: 'Fuel', value: 3000 },
  { name: 'Shipping', value: 2000 },
  { name: 'Explosion', value: 2780 },
  { name: 'Other Factors', value: 1890 },
];

const data2 = [
  { x: 10, y: 20 },
  { x: 30, y: 70 },
  { x: 50, y: 100 },
  { x: 70, y: 120 },
  { x: 90, y: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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
      <Box width={'100%'} padding={6} bgGradient="linear(to-b, #d3d3d3, #f0f0f0)" position={'absolute'} top={'85px'}>
        <Tabs variant="soft-rounded" colorScheme="yellow" isFitted>
          <TabList>
            <Tab fontWeight="bolder">Emission Analysis</Tab>
            <Tab fontWeight="bolder">Sink Analysis</Tab>
            <Tab fontWeight="bolder">Gap Analysis</Tab>
          </TabList>

          {/* Tab Panels (Content changes based on the selected tab) */}
          <TabPanels>
            {/* Emission Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two bar graphs */}
                  <Box className="graph-1" marginRight={5}>
                    <Image
                      src={'https://cdn1.byjus.com/wp-content/uploads/2019/11/Line-Graph.png'}
                      alt="Graph 1 - Emission Analysis"
                      height={'500px'}
                      width={'800px'}
                    />
                  </Box>

                  <Box className="graph-2">
                    <LineChart width={750} height={500} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line dataKey="value" fill="#ffcc00" />
                    </LineChart>
                  </Box>
                </Box>
                <Box display={'flex'} padding={5}>
                  {/* Second two bar graphs */}
                  <Box className="graph-3" marginRight={5}>
                    <PieChart width={750} height={500}>
                      <Pie data={data} dataKey="value" nameKey="name" fill="#ffc658" label>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </Box>

                  <Box className="graph-4" marginRight={5}>
                    <ScatterChart width={750} height={500}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="x" name="X Axis" />
                      <YAxis dataKey="y" name="Y Axis" />
                      <Tooltip />
                      <Legend />
                      <Scatter data={data2} fill="#ffcc00" />
                    </ScatterChart>
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            {/* Sink Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two bar graphs */}
                  <Box className="graph-1" marginRight={5}>
                    <BarChart width={750} height={500} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </Box>

                  <Box className="graph-2">
                    <LineChart width={750} height={500} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line dataKey="value" fill="#82ca9d" />
                    </LineChart>
                  </Box>
                </Box>
                <Box display={'flex'} padding={5}>
                  {/* Second two bar graphs */}
                  <Box className="graph-3" marginRight={5}>
                    <PieChart width={750} height={500}>
                      <Pie data={data} dataKey="value" nameKey="name" fill="#ffc658" label>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </Box>

                  <Box className="graph-4" marginRight={5}>
                    <ScatterChart width={750} height={500}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="x" name="X Axis" />
                      <YAxis dataKey="y" name="Y Axis" />
                      <Tooltip />
                      <Legend />
                      <Scatter data={data2} fill="#8884d8" />
                    </ScatterChart>
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            {/* Gap Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, green.600, green.100)" padding={5} borderRadius={25}>
                <BarChart width={800} height={500} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
