import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, AreaChart, Area, ResponsiveContainer } from 'recharts';
import NavBar from '../Components/NavBar2';

// Sample data for the bar graphs
const data_emissions = [
  { name: 'Electricity', value: 4000 },
  { name: 'Fuel', value: 3000 },
  { name: 'Shipping', value: 2000 },
  { name: 'Explosion', value: 2780 },
  { name: 'Other Factors', value: 1890 },
];

const data_sink = [
  { name: 'Afforestation', value: 4000 },
  { name: 'Carbon Removal & Storage', value: 3000 },
  { name: 'Direct Air Capture', value: 2000 },
  { name: 'Ocean Based Approaches', value: 2780 },
  { name: 'Other Factors', value: 1890 },
];

const data2 = [
  { x: 10, y: 20 },
  { x: 30, y: 70 },
  { x: 50, y: 100 },
  { x: 70, y: 120 },
  { x: 90, y: 150 },
];

const data3 = [
  {
    name: 'Electricity',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fuel',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Shipping',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Explosion',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Other Factors',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Visualize() {
  return (
    <Box className="main-body" width={'100vw'} height={'95vh'}>
      <NavBar />
      {/* Tabs Navigation */}
      <Box width={'100vw'} height={'95vh'} padding={6} bgGradient="linear(to-b, #d3d3d3, #f0f0f0)" position={'absolute'} top={'85px'}>
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
              <Box bgGradient="linear(to-b, #000000, #434343)" borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two bar graphs */}
                  <Box className="graph-1" marginTop={5}>
                    <BarChart width={600} height={500} data={data_emissions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#FFFF00" />
                    </BarChart>
                  </Box>

                  <Box className="graph-2" marginTop={5}>
                    <LineChart width={750} height={500} data={data_emissions}>
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
                    <PieChart width={600} height={500}>
                      <Pie data={data_emissions} dataKey="value" nameKey="name" fill="#ffc658" label>
                        {data_emissions.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </Box>

                  <ResponsiveContainer>
                    <Box className="graph-4" marginRight={5}>
                      <AreaChart
                        width={725}
                        height={500}
                        data={data3}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="uv" stroke="#AAFF00" fill="#FFFF00" />
                      </AreaChart>
                    </Box>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </TabPanel>

            {/* Sink Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" borderRadius={25}>
                <Box display={'flex'} padding={5}>
                  {/* First two bar graphs */}
                  <Box className="graph-1" marginTop={5}>
                    <BarChart width={600} height={500} data={data_sink}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#AAFF00" />
                    </BarChart>
                  </Box>

                  <Box className="graph-2" marginTop={5}>
                    <LineChart width={750} height={500} data={data_sink}>
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
                    <PieChart width={600} height={500}>
                      <Pie data={data_sink} dataKey="value" nameKey="name" fill="#ffc658" label>
                        {data_sink.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </Box>

                  <ResponsiveContainer>
                    <Box className="graph-4" marginRight={5}>
                      <AreaChart
                        width={725}
                        height={500}
                        data={data3}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="uv" stroke="#AAFF00" fill="#AAFF00" />
                      </AreaChart>
                    </Box>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </TabPanel>

            {/* Gap Analysis Panel */}
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                  {/* Second two bar graphs */}
                  <Box className="graph-3" marginLeft={250}>
                    <PieChart width={750} height={500}>
                      <Pie data={data_sink} dataKey="value" nameKey="name" fill="#ffc658" label>
                        {data_sink.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </Box>
                </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
