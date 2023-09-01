import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectReviews } from '../../redux/reviews/reviewsSelectors';
import { fetchReviews } from '../../redux/reviews/reviewsOperations';

import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import reviewsArr from './data';
import icons from '../../images/icons.svg';

import {
  // SliderContainer,
  ReviewersName,
  SliderWrapper,
  AvatarImageContainer,
  NameContainer,
  // SliderOccupation,
  Review,
  // SliderMenuLeftSlider,
  // SliderMenuRightSlider,
  AboutReviewerContainer,
  // Wrapper,
  StarIcon,
  StarsList,
  ListItem,
  //   LeftArrow,
  //   RightArrow,
  //   Wrapper,
  //   SliderContentWrapper,
} from './ReviewsSlider.styled';

export const ReviewsSlider = () => {
  const dispatch = useDispatch();

  const receivedReviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const reviews = receivedReviews.reviews;
  console.log(reviews);
  // console.log(receivedReviews);

  const ratingStars = new Array(5).fill(1);

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {reviewsArr.map(review => (
        <SliderWrapper>
          <AboutReviewerContainer>
            <AvatarImageContainer>
              {/* <img src={review.image} /> */}
            </AvatarImageContainer>
            <NameContainer>
              <ReviewersName>{review.name}</ReviewersName>

              <StarsList>
                {ratingStars.map((_, i) => {
                  return (
                    <ListItem>
                      <StarIcon
                        className={i < review.rating ? 'active' : undefined}
                      >
                        <use href={icons + '#icon-grey-star'}></use>
                      </StarIcon>
                    </ListItem>
                  );
                })}
              </StarsList>
            </NameContainer>
          </AboutReviewerContainer>
          <Review>{review.comment}</Review>
        </SliderWrapper>
      ))}
    </Carousel>
  );
};
