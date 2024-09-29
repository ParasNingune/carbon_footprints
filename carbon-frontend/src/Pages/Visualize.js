import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer , Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
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

const data_radar = [
  {
    subject: 'Electricity',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Fuel',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Shipping',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Explosion',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Other Factors',
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Visualize() {
  return (
    <Box className="main-body" width={'100vw'}>
      <NavBar />
      <Box width={'100%'} padding={6} bgGradient="linear(to-b, #d3d3d3, #f0f0f0)" position={'absolute'} top={'85px'}>
        <Tabs variant="soft-rounded" colorScheme="yellow" isFitted>
          <TabList>
            <Tab fontWeight="bolder">Emission Analysis</Tab>
            <Tab fontWeight="bolder">Sink Analysis</Tab>
            <Tab fontWeight="bolder">Gap Analysis</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-1" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={data_emissions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#FFF000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-2" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data_radar}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#FFF000" fill="#FFF000" fillOpacity={0.7} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>

                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-3" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie data={data_sink} dataKey="value" nameKey="name" fill="#FFF000" label>
                          {data_sink.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-4" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
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
                        <Area type="monotone" dataKey="uv" stroke="#FFF000" fill="#FFF000" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-1" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={data_sink}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#FF5733" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-2" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data_radar}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#FF5733" fill="#FF5733" fillOpacity={0.7} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>

                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-3" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie data={data_sink} dataKey="value" nameKey="name" fill="#FFF000" label>
                          {data_sink.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-4" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
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
                        <Area type="monotone" dataKey="uv" stroke="#FF5733" fill="#FF5733" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box bgGradient="linear(to-b, #000000, #434343)" padding={5} borderRadius={25}>
                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-1" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={data_sink}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#AAFF00" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-2" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data_radar}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#AAFF00" fill="#AAFF00" fillOpacity={0.7} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>

                <Box display={'flex'} padding={5} flexWrap="wrap">
                  <Box className="graph-3" marginRight={5} flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie data={data_sink} dataKey="value" nameKey="name" fill="#AAFF00" label>
                          {data_sink.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>

                  <Box className="graph-4" flex={1}>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
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
                    </ResponsiveContainer>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
