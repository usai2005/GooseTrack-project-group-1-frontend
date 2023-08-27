import React from 'react';
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
    .transform((value, originalValue) => {
      const values = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'yyyy-MM-dd', new Date());

      return values;
    }),
  // date: Yup.date()
  //   .required('Date is required')
  //   .transform((value, originalValue) => {
  //     if (originalValue) {
  //       const [year, month, day] = originalValue.split('-');
  //       return new Date(
  //         `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  //       );
  //     }
  //     return value;
  //   }),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Required'),
});

const initialValues = {
  title:  '',
  start: '09:00',
  end: '09:30',
  priority: 'low',
  date: new Date(),
  category: 'to-do',
};


export const TaskForm = ({ onClose }) => {
  const [createTask, setCreateTask] = useState(initialValues);

  const { title, start, end, priority, date } = createTask;

  const handleSubmit = (values, {resetForm}) => {
    // console.log(values);
    setCreateTask(values);
    console.log(createTask);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
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
              {/* {action === 'add' ? ( */}
              <ActionButton type="submit">
                <AddIcon>
                  <use href={icons + '#icon-plus'}></use>
                </AddIcon>
                Add
              </ActionButton>
              {/* ) : (
              <ActionButton type="submit">
                <EditIcon stroke="#fff" />
                Edit
              </ActionButton>
            )} */}

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
