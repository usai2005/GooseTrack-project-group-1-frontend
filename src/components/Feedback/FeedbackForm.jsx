import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnReview } from '../../redux/reviews/reviewsSelectors';
import { changeRating } from '../../redux/reviews/reviewsSlice';
import {
  addReview,
  deleteReview,
  updateReview,
} from '../../redux/reviews/reviewsOperations';

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
  .min(10, 'This review is significantly short, it should be more than 10 characters.')
  .max(300, 'This review is excessively long, it should not exceed 300 characters.')
  .required('Review is required'),
});

const rateIcon = (
  <path d="M791.706 1024c-12.164 0-24.269-3.906-34.692-11.681l-245.007-183.662-245.007 183.662c-10.151 7.636-22.35 11.717-34.855 11.674s-24.677-4.22-34.777-11.922c-10.109-7.665-17.65-18.461-21.549-30.866-3.899-12.398-3.956-25.768-0.166-38.21l91.377-308.266-242.807-178.847c-10.063-7.763-17.536-18.636-21.363-31.082s-3.813-25.835 0.039-38.272c3.883-12.407 11.397-23.225 21.482-30.925s22.229-11.892 34.717-11.984l300.724-0.473 95.743-300.619c3.951-12.384 11.53-23.155 21.662-30.787s22.304-11.739 34.793-11.739c12.489 0 24.662 4.107 34.794 11.739s17.71 18.403 21.661 30.787l94.117 300.619 302.263 0.473c12.5 0.074 24.664 4.263 34.757 11.975s17.605 18.552 21.475 30.982c3.862 12.429 3.884 25.816 0.051 38.257-3.825 12.442-11.308 23.306-21.38 31.049l-242.805 178.847 91.37 308.266c3.803 12.434 3.752 25.805-0.139 38.21-3.899 12.398-11.432 23.201-21.541 30.866-10.13 7.768-22.374 11.944-34.94 11.93v0z"></path>
);

const rateStyled = {
  itemShapes: rateIcon,
  activeFillColor: '#FFAC33',
  inactiveFillColor: '#CEC9C1',
};

export const FeedbackForm = ({ onClose }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  // console.log(isEditActive);

  const userReview = useSelector(selectOwnReview);
  const dispatch = useDispatch();

  const ratingChanged = newRating => {
    dispatch(changeRating(newRating));
  };

  const handleSubmit = (values, actions) => {
    values.rating = Number(userReview.rating);
    console.log(values.rating)

    if (isEditActive) {
      const reviewRequest = { id: userReview._id, review: values };
      dispatch(updateReview(reviewRequest));
    } else {
      dispatch(addReview(values));
    }
    actions.resetForm();
    if (userReview.rating) {
      onClose();
    }
  };

  const handleEdit = () => {
    setIsEditActive(!isEditActive);
  };

  const handleDelete = () => {
    dispatch(deleteReview(userReview._id));
    onClose();
  };

  return (
    <Contain>
      <Formik
        initialValues={{
          rating: userReview.rating || '',
          review: userReview.review || '',
        }}
        validationSchema={ReviewSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label name="rating">Rating</Label>
          <Rating
            name="rating"
            component="div"
            value={Number(userReview.rating)}
            itemStyles={rateStyled}
            style={{ maxWidth: 110, gap: 4, marginBottom: '20px' }}
            onChange={ratingChanged}
            readOnly={Boolean(userReview.rating) && !isEditActive}
          />
          <FormWrapper>
            <AreaReview>
              <Label htmlFor="review">Review</Label>
              {Boolean(userReview.review) && (
                <AreaEdit>
                  <EditBtn
                    onClick={handleEdit}
                    isActive={isEditActive}
                    type="button"
                  >
                    <IconEdit />
                  </EditBtn>
                  <DeleteBtn type="button" onClick={handleDelete}>
                    <IconTrash />
                  </DeleteBtn>
                </AreaEdit>
              )}
            </AreaReview>

            <Input
              type="text"
              placeholder="Enter text"
              id="review"
              name="review"
              component="textarea"
              disabled={!isEditActive && Boolean(userReview.review)}
            />
            <ErrorMessage name="review" component="div" />
          </FormWrapper>

          {(!Boolean(userReview.review) || isEditActive) && (
            <AreaBtn>
              <SubmitBtn type="submit">
                {isEditActive ? 'Edit' : 'Save'}
              </SubmitBtn>
              <CancelBtn type="button" onClick={onClose}>
                Cancel
              </CancelBtn>
            </AreaBtn>
          )}
          <Close type="button" aria-label="close button" onClick={onClose}>
            <IconClose style={{ width: 24, height: 24 }} />
          </Close>
        </Form>
      </Formik>
    </Contain>
  );
};
