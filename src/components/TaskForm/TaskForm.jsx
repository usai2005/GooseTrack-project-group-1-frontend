import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as CloseIcon } from './x-close.svg';
import { ReactComponent as AddIcon } from './plus.svg';
import { ReactComponent as Orange } from './EllipseOrange.svg';
import { ReactComponent as OrangeLine } from './EllipseOrangeLine.svg';
import { ReactComponent as Blue } from './EllipseBlue.svg';
import { ReactComponent as BlueLine } from './EllipseBlueLine.svg';
import { ReactComponent as Red } from './EllipseRed.svg';
import { ReactComponent as RedLine } from './EllipseRedLine.svg';
import {
  ButtonAction,
  ButtonContainer,
  CancelButton,
  CloseButton,
  FieldContainer,
  FormContainer,
  Label,
  PriorityContainer,
  PriorityField,
  PriorityLabel,
  TimeField,
  TitleField,
} from './TaskForm.styled';

const schema = Yup.object().shape({
  title: Yup.string().max(250, 'Too Long!').required('Required'),
  start: Yup.string().required('Required'),
  end: Yup.string()
    .required('Required')
    .test(
      'is-greater',
      'End time should be greater than start time',
      function (value) {
        const { start } = this.parent;
        if (start && value) {
          const startTime = new Date(`2000-01-01T${start}`);
          const endTime = new Date(`2000-01-01T${value}`);
          return endTime > startTime;
        }
        return true;
      }
    ),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required('Required'),
  date: Yup.date()
    .required('Required')
    .transform((value, originalValue) => {
      if (originalValue) {
        const [year, month, day] = originalValue.split('-');
        return new Date(
          `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        );
      }
      return value;
    }),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Required'),
});

export const TaskForm = ({ onClose }) => {
  const initialValues = {
    title: '',
    start: '09:00',
    end: '09:30',
    priority: 'low',
    date: '',
    category: 'to-do',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
            <CloseIcon />
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

            <div>Picked: {values.priority}</div>
            <PriorityContainer role="group">
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="low" />
                {values.priority === 'low' ? <BlueLine /> : <Blue />}
                {/* <RadioSpan value="low" /> */}
                Low
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="medium" />
                {values.priority === 'medium' ? <OrangeLine /> : <Orange />}
                {/* <RadioSpan value="medium" /> */}
                Medium
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="high" />
                {values.priority === 'high' ? <RedLine /> : <Red />}
                {/* <RadioSpan value="high" /> */}
                High
              </PriorityLabel>
            </PriorityContainer>

            <ButtonContainer>
              {/* {action === 'add' ? ( */}
              <ButtonAction type="submit">
                <AddIcon />
                Add
              </ButtonAction>
              {/* ) : (
              <ButtonAction type="submit">
                <EditIcon stroke="#fff" />
                Edit
              </ButtonAction>
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
