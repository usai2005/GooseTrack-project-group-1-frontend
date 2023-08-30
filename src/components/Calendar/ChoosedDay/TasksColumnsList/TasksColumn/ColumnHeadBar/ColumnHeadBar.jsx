export const ColumnHeadBar = ({ title, setIsOpen }) => {
  const normalizedTitle = title.split('-').join(' ');
  const capitalizetTitle =
    normalizedTitle[0].toUpperCase() + normalizedTitle.slice(1);

  return (
    <div>
      <h2>{capitalizetTitle}</h2>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        +
      </button>
    </div>
  );
};

// import { useSelector } from 'react-redux';

// const tasks = useSelector(state => state.tasks);

// const toDoTasks = tasks.filter(task => task.status === 'To do');
// const inProgressTasks = tasks.filter(task => task.status === 'In progress');
// const doneTasks = tasks.filter(task => task.status === 'Done');

// export const ColumnHeadBar = (todoTasks, inProgressTasks, doneTasks) => {
//   return (
//     <div>
//       <div>
//         <h3>To Do</h3>
//         <ul>
//           {todoTasks.length > 0
//             ? todoTasks.map(task => <li key={task.id}>{task.name}</li>)
//             : null}
//         </ul>
//       </div>
//       <div>
//         <h3>In Progress</h3>
//         <ul>
//           {inProgressTasks.length > 0
//             ? inProgressTasks.map(task => <li key={task.id}>{task.name}</li>)
//             : null}
//         </ul>
//       </div>
//       <div>
//         <h3>Done</h3>
//         <ul>
//           {doneTasks.length > 0
//             ? doneTasks.map(task => <li key={task.id}>{task.name}</li>)
//             : null}
//         </ul>
//       </div>
//     </div>
//   );
// };
