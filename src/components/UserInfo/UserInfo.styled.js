import styled from 'styled-components';

export const UserName = styled.h2`
  margin-right: 8px;

  color: #343434;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-right: 14px;

    font-size: 18px;
    line-height: calc(18 / 18);
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 50%;
  border: 2px solid #3e85f3;
  background-image: ${props => `url(${props.img})`};
  background-size: contain;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
