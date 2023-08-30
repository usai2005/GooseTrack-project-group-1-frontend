// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import { selectReviews } from '../../redux/reviews/reviewsSelectors';
import icons from '../../images/icons.svg';

import {
  SliderContainer,
  ReviewersName,
  SliderMenuProfileWrapper,
  AvatarImage,
  NameContainer,
  SliderOccupation,
  Review,
  SliderMenuLeftSlider,
  SliderMenuRightSlider,
  AboutReviewerContainer,
  Wrapper,
  StarIcon,
  StarsList,
  ListItem,
  //   LeftArrow,
  //   RightArrow,
  //   Wrapper,
  //   SliderContentWrapper,
} from './ReviewsSlider.styled';

const allProfiles = [
  {
    id: 1,
    rating: 4,
    name: 'Kateryna Hilcher',
    comment:
      'Really helps to plan the day and visualize tasks. Exactly what I was looking for. Huge thanks to the developers! ',
  },
  {
    id: 2,
    rating: 3,
    name: 'Mykola Kapytaniuk',
    comment:
      'Very cool app, everything is clear and functional. A great program for time chronology.',
  },
  {
    id: 3,
    rating: 5,
    name: 'Ihor Dronenko',
    comment:
      'Really helps to increase productivity. The application has a clear interface and useful features. I like it at the initial stage. ',
  },
  {
    id: 4,
    rating: 2,
    name: 'Volodymyr Shvets',
    comment: 'A good, visual time planning program.',
  },
  {
    id: 5,
    rating: 1,
    name: 'Margaryta Martinova',
    comment:
      'Very useful and wonderful app. Very convenient, can be used on all my devices with the same notes without rewriting every time I switch devices. ',
  },
  {
    id: 6,
    rating: 4,
    name: 'Oleksandr Bebelyuk',
    comment:
      'Very convenient program for work and personal planning. It replaced a whole CRM system for me at work. The mobile version works great without crashes or bugs, just like the PC browser version. Instant synchronization. Very easy and convenient to use. 5/5 ',
  },
  {
    id: 7,
    rating: 2,
    name: 'Dima Babyk',
    comment:
      "Excellent app! I use it a lot and everything is great. But I can't understand why you can't put your own photo as the background of the board, it would be much better. Otherwise, I recommend it for structuring any work, projects, and more. ",
  },
  {
    id: 8,
    rating: 5,
    name: 'Pavlo Trunov',
    comment:
      "A pleasant find for me. It's exactly what I was looking for. The main advantage is the visual visualization in the form of boards and cards. I recommend it!",
  },
  {
    id: 9,
    rating: 1,
    name: 'Sergiy Kulykov',
    comment:
      'This is the best app for planning big or small goals. For the first time, I see such a convenient and understandable system where you can lay out your thoughts on shelves and understand what you want and how to achieve it, using small steps to your goal. Thank you very much💛',
  },
];

export default function ReviewsSlider(props) {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const allProfiles = useSelector(selectReviews);

  //   console.log(allProfiles);

  //   const [starsAmount, setStarsAmount] = useState('');

  //   const stars = starsAmount;

  //   console.log(starsAmount);

  useEffect(() => {
    setProfiles(allProfiles);
  }, []);

  const handleClick = action => {
    const len = profiles.length;

    if (action === 'previous') {
      if (currentIndex - 1 === -1) {
        setCurrentIndex(len - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }

    if (action === 'future') {
      if (currentIndex + 1 === len) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      handleClick('future');
    }, 4000);

    return () => clearInterval(myInterval);
  }, [currentIndex]);

  return (
    <>
      <SliderContainer>
        <SliderMenuLeftSlider onClick={() => handleClick('previous')} />
        <Wrapper>
          {profiles.map((person, index) => {
            return (
              <SliderMenuProfileWrapper
                className={(() => {
                  const len = profiles.length;

                  if (currentIndex === 0 && index === len - 1) {
                    return 'previous';
                  } else if (currentIndex === len - 1 && index === 0) {
                    return 'future';
                  } else if (index === currentIndex) {
                    return 'current';
                  } else if (currentIndex > index) {
                    return 'previous';
                  } else {
                    return 'future';
                  }
                })()}
                key={person.id}
              >
                <AboutReviewerContainer>
                  <AvatarImage src={person.image} />
                  <NameContainer>
                    <ReviewersName>{person.name}</ReviewersName>
                    <StarsList>
                      <ListItem>
                        <StarIcon>
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </ListItem>
                      <ListItem>
                        <StarIcon>
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </ListItem>
                      <ListItem>
                        <StarIcon>
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </ListItem>
                      <ListItem>
                        <StarIcon>
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </ListItem>
                      <ListItem>
                        <StarIcon>
                          <use href={icons + '#icon-grey-star'}></use>
                        </StarIcon>
                      </ListItem>
                    </StarsList>
                  </NameContainer>
                </AboutReviewerContainer>
                <SliderOccupation>{person.title}</SliderOccupation>
                <Review>{person.comment}</Review>
              </SliderMenuProfileWrapper>
            );
          })}
        </Wrapper>
        {/* <SliderMenuQuoteIcon /> */}
        <SliderMenuRightSlider onClick={() => handleClick('future')} />
      </SliderContainer>
    </>
  );
}

// if (person.rating === 1) {
//     //   console.log(person.rating);
//     setStarsAmount('oneStar');
//   } else if (person.rating === 2) {
//     //   console.log(person.rating);
//     setStarsAmount('twoStars');
//   } else if (person.rating === 3) {
//     //   console.log(person.rating);
//     setStarsAmount('threeStars');
//   } else if (person.rating === 4) {
//     //   console.log(person.rating);
//     setStarsAmount('fourStars');
//   } else if (person.rating === 5) {
//     //   console.log(person.rating);
//     setStarsAmount('fiveStars');
//   }
