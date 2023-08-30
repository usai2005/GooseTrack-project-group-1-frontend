import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import icons from '../../images/icons.svg';
import { ReactComponent as Orange } from './EllipseOrange.svg';
import { ReactComponent as OrangeLine } from './Ellipse 281Orange.svg';
import { ReactComponent as Blue } from './EllipseBlue.svg';
import { ReactComponent as BlueLine } from './Ellipse 281Blue.svg';
import { ReactComponent as Red } from './EllipseRed.svg';
import { ReactComponent as RedLine } from './Ellipse 281Red.svg';
import {
  ActionButton,
  AddIcon,
  ButtonContainer,
  CancelButton,
  CloseButton,
  CloseIcon,
  EditIcon,
  FieldContainer,
  FormContainer,
  Label,
  PriorityContainer,
  PriorityField,
  PriorityLabel,
  TimeField,
  TitleField,
} from './TaskForm.styled';
import { parse, isDate } from 'date-fns';
import moment from 'moment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedDate } from 'redux/date/selectors';
import { addTask, updateTask } from 'redux/tasks/tasksOperations';

const schema = Yup.object().shape({
  title: Yup.string().max(250, 'Too Long!').required('Required'),
  start: Yup.string().required('start time cannot be empty'),
  end: Yup.string()
    .required('end time cannot be empty')
    .test('is-greater', 'end time should be greater', function (value) {
      const { start } = this.parent;
      return moment(value, 'HH:mm').isSameOrAfter(moment(start, 'HH:mm'));
    }),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required('Required'),
  date: Yup.date()
    .required('Required')
    .transform(function parseDateString(value, originalValue) {
      return isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'yyyy-MM-dd', new Date());
    }),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Required'),
});

export const TaskForm = ({ category = 'to-do', task, onClose }) => {
  const [action, setAction] = useState('create');
  const date = useSelector(selectSelectedDate);
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    start: '09:00',
    end: '09:30',
    priority: 'low',
    date: date,
    category: category,
  };

  useEffect(() => {
    if (task?._id) setAction('edit');
  }, [task]);
  // console.log(action, 'form action');

  const handleSubmit = values => {
    console.log(values);

    dispatch(
      action === 'edit'
        ? updateTask({ task: values, id: task._id }) // Передача id
        : addTask({ ...values, date, category })
    )
      .then(data => {
        if (data.error) {
          throw new Error(data.payload);
        }
        onClose();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <Formik
      initialValues={task || initialValues}
      validationSchema={schema}
      onSubmit={(values, action) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <FormContainer>
          <CloseButton
            type="button"
            aria-label="close button"
            onClick={onClose}
          >
            <CloseIcon>
              <use href={icons + '#icon-x-close'}></use>
            </CloseIcon>
          </CloseButton>
          <Form>
            <Label>
              Title
              <TitleField type="text" name="title" placeholder="Enter text" />
              <ErrorMessage name="title" component="div" />
            </Label>

            <FieldContainer>
              <Label>
                Start
                <TimeField type="time" name="start" />
                <ErrorMessage name="start" component="div" />
              </Label>
              <Label>
                End
                <TimeField type="time" name="end" />
                <ErrorMessage name="end" component="div" />
              </Label>
            </FieldContainer>

            <PriorityContainer role="group">
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="low" />
                {values.priority === 'low' ? <BlueLine /> : <Blue />}
                Low
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="medium" />
                {values.priority === 'medium' ? <OrangeLine /> : <Orange />}
                Medium
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="high" />
                {values.priority === 'high' ? <RedLine /> : <Red />}
                High
              </PriorityLabel>
            </PriorityContainer>

            <ButtonContainer>
              {action === 'edit' ? (
                <ActionButton type="submit">
                  <EditIcon stroke="#fff" fill="none">
                    <use href={icons + '#icon-pencil-01'}></use>
                  </EditIcon>
                  Edit
                </ActionButton>
              ) : (
                <ActionButton type="submit">
                  <AddIcon stroke="#fff">
                    <use href={icons + '#icon-plus'}></use>
                  </AddIcon>
                  Add
                </ActionButton>
              )}

              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
            </ButtonContainer>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
