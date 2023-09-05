// import React, { useEffect } from 'react';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
// import { getAllTasks } from '../../redux/tasks/tasksOperations';
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

import {
  Container,
  LabelContainer,
  LabelTitle,
  Title,
  Wrapper,
} from './StatisticsComp.styled';
import { selectCurrentTheme } from 'redux/theme/themeSelectors';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <LabelContainer className="custom-tooltip">
        <LabelTitle className="label">{`All tasks for the ${payload[0].name}: ${payload[0].value}`}</LabelTitle>
        <LabelTitle className="label">{`All tasks for a ${payload[1].name}: ${payload[1].value}`}</LabelTitle>
      </LabelContainer>
    );
  }
  return null;
};

export const StatisticsComp = () => {
  const theme = useSelector(selectCurrentTheme);
  // const dispatch = useDispatch();
  const toDay = useSelector(selectSelectedDate);
  const tasks = useSelector(selectTasks);

  // useEffect(() => {
  //   dispatch(getAllTasks());
  // }, [dispatch]);

  let filteredTasksByDay = null;
  let filteredTasksByMonth = null;
  let todoByDay = 0;
  let inprogressByDay = 0;
  let doneByDay = 0;
  let todoByMonth = 0;
  let inprogressByMonth = 0;
  let doneByMonth = 0;
  // let allTasks = 0;

  function filteredTasks(tasks) {
    filteredTasksByDay = tasks.filter(
      task => new Date(task.date).getDate() === new Date(toDay).getDate()
    );
    filteredTasksByMonth = tasks.filter(
      task => new Date(task.date).getMonth() === new Date(toDay).getMonth()
    );
    todoByDay = filteredTasksByDay.filter(
      task => task.category === 'to-do'
    ).length;
    inprogressByDay = filteredTasksByDay.filter(
      task => task.category === 'in-progress'
    ).length;
    doneByDay = filteredTasksByDay.filter(
      task => task.category === 'done'
    ).length;
    todoByMonth = filteredTasksByMonth.filter(
      task => task.category === 'to-do'
    ).length;
    inprogressByMonth = filteredTasksByMonth.filter(
      task => task.category === 'in-progress'
    ).length;
    doneByMonth = filteredTasksByMonth.filter(
      task => task.category === 'done'
    ).length;
  }
  filteredTasks(tasks);
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
      monthf: `${
        Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0
      }%`,
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
              <linearGradient
                id="colorDay"
                viewBox="0 0 27 211"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
                <stop offset="95%" stopColor="#FFD2DD" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
                <stop offset="95%" stopColor="#3E85F3" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              style={{
                stroke:
                  theme === 'light' ? '#E3F3FF' : 'rgba(227, 243, 255, 0.15)',
              }}
            />
            <XAxis
              stroke={theme === 'light' ? '#343434' : '#fff'}
              dataKey="name"
              axisLine={false}
              tickLine={false}
              height={40}
            />
            <YAxis
              stroke={theme === 'light' ? '#343434' : '#fff'}
              axisLine={false}
              tickLine={false}
              width={40}
              allowDecimals={false}
              tickMargin={20}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="day" fill="url(#colorDay)" barSize={27}>
              <LabelList
                stroke={theme === 'light' ? '#343434' : '#fff'}
                dataKey="dayf"
                position="top"
              />
            </Bar>
            <Bar dataKey="month" fill="url(#colorMonth)" barSize={27}>
              <LabelList
                stroke={theme === 'light' ? '#343434' : '#fff'}
                dataKey="monthf"
                position="top"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </Container>
  );
};

//-------------------------------------------------------------------

// import React, { useEffect }  from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllTasks } from '../../redux/tasks/tasksOperations';
// import { selectTasks } from '../../redux/tasks/tasksSelectors';
// import { selectActiveDate } from '../../redux/date/selectors';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList,
//   ResponsiveContainer,
// } from 'recharts';

// import { Container, Title, Wrapper } from './StatisticsComp.styled';

// export const StatisticsComp = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllTasks());
//   }, [dispatch]);

//   const toDay = useSelector(selectActiveDate);
//   const tasksByMonth = useSelector(selectTasks);

//   console.log("tasksByMonth", tasksByMonth)
//   console.log("toDay", toDay)

//   const tasksByDay = tasksByMonth.filter(task => task.date === toDay);

//   const allTasksByDay = tasksByDay.length;
//   const allTasksByMonth = tasksByMonth.length;
//   const todoByDay = tasksByDay.filter(task => task.category === 'to-do').length;
//   const inprogressByDay = tasksByDay.filter(
//     task => task.category === 'in-progress'
//   ).length;
//   const doneByDay = tasksByDay.filter(task => task.category === 'done').length;
//   const todoByMonth = tasksByMonth.filter(
//     task => task.category === 'to-do'
//   ).length;
//   const inprogressByMonth = tasksByMonth.filter(
//     task => task.category === 'in-progress'
//   ).length;
//   const doneByMonth = tasksByMonth.filter(
//     task => task.category === 'done'
//   ).length;

//   const data = [
//     {
//       name: 'To Do',
//       day: todoByDay,
//       month: todoByMonth,
//       dayf: `${Math.round((todoByDay / allTasksByDay) * 100) || 0}%`,
//       monthf: `${Math.round((todoByMonth / allTasksByMonth) * 100) || 0}%`,
//     },
//     {
//       name: 'In Progress',
//       day: inprogressByDay,
//       month: inprogressByMonth,
//       dayf: `${Math.round((inprogressByDay / allTasksByDay) * 100) || 0}%`,
//       monthf: `${Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0}%`,
//     },
//     {
//       name: 'Done',
//       day: doneByDay,
//       month: doneByMonth,
//       dayf: `${Math.round((doneByDay / allTasksByDay) * 100) || 0}%`,
//       monthf: `${Math.round((doneByMonth / allTasksByMonth) * 100) || 0}%`,
//     },
//   ];

//   return (
//     <Container>
//       <Title>Tasks</Title>
//       <Wrapper>
//         <ResponsiveContainer>
//           <BarChart
//             data={data}
//             margin={{ top: 24, right: 10, left: 10, bottom: 10 }}
//             barGap={14}
//           >
//             <defs>
//               <linearGradient id="colorDay" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
//                 <stop offset="95%" stopColor="#FFD2DD" stopOpacity={0.8} />
//               </linearGradient>
//               <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
//                 <stop offset="95%" stopColor="#3E85F3" stopOpacity={0.8} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid vertical={false} stroke="#E3F3FF" />
//             <XAxis
//               dataKey="name"
//               axisLine={false}
//               tickLine={false}
//               height={40}
//             />
//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               width={40}
//               allowDecimals={false}
//               tickMargin={20}
//             />
//             <Tooltip />
//             <Bar dataKey="day" fill="url(#colorDay)" barSize={27}>
//               <LabelList dataKey="dayf" position="top" />
//             </Bar>
//             <Bar dataKey="month" fill="url(#colorMonth)" barSize={27}>
//               <LabelList dataKey="monthf" position="top" />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </Wrapper>
//     </Container>
//   );
// };
