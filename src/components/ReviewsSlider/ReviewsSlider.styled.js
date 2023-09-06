import styled from 'styled-components';

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 335px;
  max-width: 335px;

  padding: 24px 20px;

  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;

  text-align: left;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    min-width: 580px;
    max-width: 580px;

    padding: 32px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 24px;
    margin-bottom: 32px;
  }
`;
export const AvatarImageContainer = styled.div`
  width: 50px;
  height: 50px;

  margin-right: 18px;

  border-radius: 50%;

  overflow: hidden;
`;

export const AboutReviewerContainer = styled.div`
  display: flex;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
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

export const ReviewWrapper = styled.div`
  height: 72px;
  max-height: 72px;

  overflow: auto;
`;

export const Review = styled.p`
  margin-left: 68px;

  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const Arrow = styled.svg`
  width: 50px;
  height: 50px;

  border-radius: 6px;

  &:hover {
    background-color: #dcebf7;

    transition: background-color 250ms;
  }

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;

    border-radius: 10px;
  }
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

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;

  width: 125px;

  margin-top: 0 auto;

  @media screen and (min-width: 768px) {
    width: 147px;
  }
`;
