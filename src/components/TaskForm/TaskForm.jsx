import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';
import moment from 'moment';
import icons from '../../images/icons.svg';
import { selectSelectedDate } from 'redux/date/selectors';
import { addTask, updateTask } from 'redux/tasks/tasksOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  ActionButton,
  AddIcon,
  Blue,
  BlueLine,
  ButtonContainer,
  CancelButton,
  CloseButton,
  CloseIcon,
  EditIcon,
  FieldContainer,
  FormContainer,
  Label,
  Orange,
  OrangeLine,
  PriorityContainer,
  PriorityField,
  PriorityLabel,
  Red,
  RedLine,
  TimeField,
  TitleField,
} from './TaskForm.styled';

const schema = Yup.object().shape({
  title: Yup.string().max(250, 'Too Long!').required('Title is required'),
  start: Yup.string().required('Start time cannot be empty'),
  end: Yup.string()
    .required('End time cannot be empty')
    .test('is-greater', 'End time should be greater', function (value) {
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
    })
    .min(new Date(), 'Date must be in future'),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Required'),
});

export const TaskForm = ({ category, task, onClose }) => {
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

  const handleSubmit = values => {
    const payload = {
      id: values._id,
      updatedTask: {
        title: values.title,
        start: values.start,
        end: values.end,
        priority: values.priority,
        date: values.date,
        category: values.category,
      },
    };

    if (action === 'edit') {
      Notify.info('Task has been edited.');
      dispatch(updateTask(payload))
        .then(data => {
          if (data.error) {
            throw new Error(data.payload);
          }
          onClose();
        })
        .catch(error => {
          console.log(error.message);
        });
    } else {
      Notify.success('Task has been successfully created.');
      dispatch(addTask({ ...values, date, category }))
        .then(data => {
          if (data.error) {
            throw new Error(data.payload);
          }
          onClose();
        })
        .catch(error => {
          Notify.failure('Something went wrong.');
          console.log(error.message);
        });
    }
  };

  return (
    <Formik
      initialValues={task || initialValues}
      validationSchema={schema}
      onSubmit={values => {
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
              <ErrorMessage name="title" component="div" />
              <TitleField type="text" name="title" placeholder="Enter text" />
            </Label>

            <FieldContainer>
              <Label>
                Start
                <ErrorMessage name="start" component="div" />
                <TimeField type="time" name="start" />
              </Label>
              <Label>
                End
                <ErrorMessage name="end" component="div" />
                <TimeField type="time" name="end" />
              </Label>
            </FieldContainer>

            <PriorityContainer role="group">
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="low" />
                {values.priority === 'low' ? (
                  <BlueLine>
                    <use href={icons + '#icon-ellipse-blue-stroke'}></use>
                  </BlueLine>
                ) : (
                  <Blue>
                    <use href={icons + '#icon-ellipse-blue'}></use>
                  </Blue>
                )}
                Low
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="medium" />
                {values.priority === 'medium' ? (
                  <OrangeLine>
                    <use href={icons + '#icon-ellipse-orange-stroke'}></use>
                  </OrangeLine>
                ) : (
                  <Orange>
                    <use href={icons + '#icon-ellipse-orange'}></use>
                  </Orange>
                )}
                Medium
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="high" />
                {values.priority === 'high' ? (
                  <RedLine>
                    <use href={icons + '#icon-ellipse-pink-stroke'}></use>
                  </RedLine>
                ) : (
                  <Red>
                    <use href={icons + '#icon-ellipse-pink'}></use>
                  </Red>
                )}
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
