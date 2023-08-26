import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as IconEdit } from '../../images/feedback/edit.svg';
import { ReactComponent as IconTrash } from '../../images/feedback/trash.svg';
import { ReactComponent as IconClose } from '../../images/feedback/close.svg';

import {
  Contain,
  Input,
  Label,
  FormWrapper,
  AreaReview,
  AreaEdit,
  AreaBtn,
  SubmitBtn,
  CancelBtn,
  EditBtn,
  DeleteBtn,
  Close,
  ErrorMessage,
} from './FeedbackForm.styled';

const ReviewSchema = Yup.object().shape({
  review: Yup.string()
    .min(10, 'review short')
    .max(300, 'review long')
    .required('review is required'),
});

const handleSubmit = () => {};

const handleEdit = () => {};

const handleDelete = () => {};

export const FeedbackForm = ({ onClose }) => {
  return (
    <Contain>
      <Formik
        initialValues={{}}
        validationSchema={ReviewSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label name="rating">Rating</Label>
          <FormWrapper>
            
            <AreaReview>
              <Label htmlFor="review">Review</Label>
              <AreaEdit>
                <EditBtn onClick={handleEdit} type="button">
                  <IconEdit />
                </EditBtn>
                <DeleteBtn type="button" onClick={handleDelete}>
                  <IconTrash />
                </DeleteBtn>
              </AreaEdit>
            </AreaReview>

            <Input
              type="text"
              placeholder="Enter text"
              id="review"
              name="review"
              component="textarea"
            />
            <ErrorMessage name="review" component="div" />
          </FormWrapper>

          <AreaBtn>
            <SubmitBtn type="submit">Save</SubmitBtn>
            <CancelBtn type="button" onClick={onClose}>
              Cancel
            </CancelBtn>
          </AreaBtn>

          <Close
            type="button"
            aria-label="close button"
            onClick={onClose}
          >
            <IconClose style={{ width: 24, height: 24 }} />
          </Close>
        </Form>
      </Formik>
    </Contain>
  );
};
