import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import { Container } from '../../styles/container';
import { Title, Wrapper } from './StatisticsComp.styled';

const data = [
  {
    name: 'To Do',
    day: 4000,
    month: 2400,
  },
  {
    name: 'In Progress',
    day: 3000,
    month: 1398,  
  },
  {
    name: 'Done',
    day: 2000,
    month: 9800, 
  },
];

export const StatisticsComp = () => {
  return (
    <Container>
      <Title>Tasks</Title>
      <Wrapper>
        <ResponsiveContainer  height={300} width={500}>
      
          <BarChart data={data} margin={{ top: 24, }} barGap={14} >
            <defs>
              <linearGradient id="colorDay" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
                <stop offset="95%" stopColor="#FFD2DD" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
                <stop offset="95%" stopColor="#3E85F3" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#E3F3FF" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              height={40}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={40}
              allowDecimals={false}
              tickMargin={20}
            />
            <Tooltip />
            <Bar dataKey="day" fill="url(#colorDay)" barSize={27}>
              <LabelList dataKey="day" position="top" />
            </Bar>
            <Bar dataKey="month" fill="url(#colorMonth)" barSize={27}>
              <LabelList dataKey="month" position="top" />
            </Bar>
          </BarChart>

        </ResponsiveContainer>
      </Wrapper>
    </Container>
  );
};
