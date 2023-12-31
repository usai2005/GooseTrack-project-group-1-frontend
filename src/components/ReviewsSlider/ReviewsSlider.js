import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../redux/reviews/reviewsSelectors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icons from '../../images/icons.svg';

import {
  ReviewersName,
  SliderWrapper,
  AvatarImageContainer,
  NameContainer,
  Review,
  AboutReviewerContainer,
  ArrowsContainer,
  StarIcon,
  StarsList,
  ReviewWrapper,
  Arrows,
  Arrow,
} from './ReviewsSlider.styled';

const ReviewsSlider = () => {
  const reviews = useSelector(selectReviews);
  const slide = useRef(null);

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingStars = new Array(5).fill(1);

  return (
    <>
      <Slider ref={slide} {...settings}>
        {reviews.map(review => (
          <SliderWrapper key={review._id}>
            <AboutReviewerContainer>
              <AvatarImageContainer>
                <img src={review.owner.avatarURL} alt="reviewer" />
              </AvatarImageContainer>
              <NameContainer>
                <ReviewersName>{review.owner.name}</ReviewersName>

                <StarsList>
                  {ratingStars.map((_, i) => {
                    return (
                      <li key={i + 1}>
                        <StarIcon
                          className={i < review.rating ? 'active' : undefined}
                        >
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </li>
                    );
                  })}
                </StarsList>
              </NameContainer>
            </AboutReviewerContainer>
            <ReviewWrapper>
              <Review>{review.content}</Review>
            </ReviewWrapper>
          </SliderWrapper>
        ))}
      </Slider>
      <ArrowsContainer>
        <Arrows>
          <Arrow className="arrow" onClick={() => slide?.current?.slickPrev()}>
            <use href={icons + '#icon-left-slide-arrow'}></use>
          </Arrow>

          <Arrow onClick={() => slide?.current?.slickNext()}>
            <use href={icons + '#icon-right-slide-arrow'}></use>
          </Arrow>
        </Arrows>
      </ArrowsContainer>
    </>
  );
};

export default ReviewsSlider;
