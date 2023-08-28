import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks } from '../../redux/tasks/tasksOperations';
import { selectTasks } from '../../redux/tasks/tasksSelectors';
import { selectSelectedDate } from '../../redux/date/selectors';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

import { Container, Title, Wrapper } from './StatisticsComp.styled';

export const StatisticsComp = () => {
  const dispatch = useDispatch();
  const toDay = useSelector(selectSelectedDate);
  const tasks = useSelector(selectTasks);

  console.log(toDay)
  console.log(tasks)

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);


  let todoByDay = 10;
  let inprogressByDay = 20;
  let doneByDay = 10;
  let todoByMonth = 30;
  let inprogressByMonth = 20;
  let doneByMonth = 10;

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;

  const data = [
    {
      name: 'To Do',
      day: todoByDay,
      month: todoByMonth,
      dayf: `${Math.round((todoByDay / allTasksByDay) * 100) || 0}%`,
      monthf: `${Math.round((todoByMonth / allTasksByMonth) * 100) || 0}%`,
    },
    {
      name: 'In Progress',
      day: inprogressByDay,
      month: inprogressByMonth,
      dayf: `${Math.round((inprogressByDay / allTasksByDay) * 100) || 0}%`,
      monthf: `${Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0}%`,
    },
    {
      name: 'Done',
      day: doneByDay,
      month: doneByMonth,
      dayf: `${Math.round((doneByDay / allTasksByDay) * 100) || 0}%`,
      monthf: `${Math.round((doneByMonth / allTasksByMonth) * 100) || 0}%`,
    },
  ];

  return (
    <Container>
      <Title>Tasks</Title>
      <Wrapper>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 24, right: 10, left: 10, bottom: 10 }}
            barGap={14}
          >
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
              <LabelList dataKey="dayf" position="top" />
            </Bar>
            <Bar dataKey="month" fill="url(#colorMonth)" barSize={27}>
              <LabelList dataKey="monthf" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </Container>
  );
};
