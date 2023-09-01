import styled from 'styled-components';
// import allProfiles from './data';
// export const LeftArrow = styled.div`
//   width: 100px;
//   height: 30px;
//   background-color: red;
// `;

// export const RightArrow = styled.div`
//   width: 100px;
//   height: 30px;
//   background-color: green;
// `;

// export const Wrapper = styled.div`
//   position: relative;
//   display: flex;
// `;

// export const SliderContentWrapper = styled.div`
//   text-align: center;
//   padding: 1rem 0;
//   display: flex;
//   flex-direction: column;
//   &.current {
//     transition: all 0.5s linear;
//     position: relative;
//     top: 0;
//     left: 0;
//     opacity: 1;
//   }
//   &.previous {
//     position: absolute;
//     top: 0;
//     left: -120%;
//     transition: all 0.3s linear;
//     opacity: 0;
//   }
//   &.next {
//     position: absolute;
//     top: 0;
//     left: 120%;
//     transition: all 0.3s linear;
//     opacity: 0;
//   }
// `;

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  ${'' /* height: 194px; */}
  ${'' /* max-height: 194px; */}

  ${'' /* box-sizing: border-box; */}
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    height: 187px;
    max-height: 187px;
    background-color: green;
  }
`;

export const SliderWrapper = styled.div`
  text-align: left;
  ${'' /* padding: 1rem 0; */}
  display: flex;
  flex-direction: column;

  height: 194px;
  max-height: 194px;

  padding: 24px 20px;

  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;

  /* &.current {
    transition: all 0.5s linear;
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
  }
  &.previous {
    position: absolute;
    top: 0;
    left: -120%;
    transition: all 0.3s linear;
    opacity: 0;
  }
  &.future {
    position: absolute;
    top: 0;
    left: 120%;
    transition: all 0.3s linear;
    opacity: 0;
  } */
`;
export const AvatarImageContainer = styled.div`
  width: 50px;
  height: 50px;

  margin-right: 18px;

  border-radius: 50%;

  background-color: aquamarine;

  ${'' /* background-image: url(${({ src }) => src}); */}
  ${'' /* background-repeat: no-repeat; */}
  ${'' /* background-size: cover; */}
  ${'' /* background-position: top; */}
  ${'' /* border: 2px solid #abd3f2; */}
  ${'' /* box-shadow: 0px 0px 5px grey; */}
  ${'' /* margin: auto; */}
`;

export const AboutReviewerContainer = styled.div`
  display: flex;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }

  ${
    '' /* @media screen and (min-width: 1440px) {
    background-color: red;
    width: 50%;
  } */
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewersName = styled.h3`
  margin-bottom: 13px;

  font-weight: 700;
  color: #343434;
  font-size: 18px;
  line-height: 1;
`;

export const SliderOccupation = styled.h4`
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
  font-weight: 300;
  color: #636363;
  letter-spacing: 0.7px;
  font-family: sans-serif;
  text-transform: capitalize;
`;

export const Review = styled.p`
  margin-left: 68px;
  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const SliderMenuLeftSlider = styled(AiOutlineDoubleLeft)`
  position: absolute;
  left: 0;
  top: 215px;
  transform: translateY(-50%);
  padding: 10px;
  z-index: 10;
  &:hover {
    color: #ba5d2c;
    cursor: pointer;
    border: 1px solid #ba5d2c;
    border-radius: 10px;
    padding: 9px;
  }
`;

export const SliderMenuRightSlider = styled(AiOutlineDoubleRight)`
  position: absolute;
  right: 0;
  top: 215px;
  transform: translateY(-50%);
  padding: 10px;
  &:hover {
    color: #ba5d2c;
    cursor: pointer;
    border: 1px solid #ba5d2c;
    border-radius: 10px;
    padding: 9px;
  }
  z-index: 10;
`;

export const StarIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: #cec9c1;
  &.active {
    fill: #ffac33;
  }
`;

export const StarsList = styled.ul`
  display: flex;

  justify-content: flex-end;

  flex-direction: row-reverse;

  li {
    &:not(:first-child) {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  li {
    &:not(:last-child) {
      margin-left: 0;
      margin-right: 10px;
    }
  }
`;

export const ListItem = styled.li`
  /* &.slide {
    text-align: left !important;
  } */
`;
