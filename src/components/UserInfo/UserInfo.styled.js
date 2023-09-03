import styled from 'styled-components';

export const UserName = styled.h2`
  margin-right: 8px;

  color: ${props => props.theme.variable.calendarTextColor};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-right: 14px;

    font-size: 18px;
    line-height: calc(18 / 18);
  }
`;





export const UserAvatarImg = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 50%;
  border: 2px solid #3e85f3;
  background-size: contain;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;



export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  // background-image: ${props => `url(${props.img})`};
  background-size: contain;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;


export const  DefaultAvatarSvg = styled.svg`
padding:6px;
width: 32px;
height: 32px;
flex-shrink: 0;
border-radius: 50%;
border: 2px solid #3e85f3;
border-radius: 50%;
// background-image: ${props => `url(${props.img})`};
background-size: contain;

@media screen and (min-width: 768px) {
  width: 44px;
  height: 44px;
}
`;