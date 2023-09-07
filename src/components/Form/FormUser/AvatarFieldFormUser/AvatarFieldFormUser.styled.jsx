import styled from 'styled-components';

export const DefaultAvatarSvg = styled.svg`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const PlusSvgOnAvatar = styled.svg`
  position: relative;
  border-radius: 50%;
  background-color: #3e85f3;
  content: '+';
  stroke: #ffffff;
  font-family: Inter;
  font-size: 18px;
  line-height: 1.375rem;
  align-items: center;
  width: 12px;
  height: 12px;

  top: -18px;
  right: -24px;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    pointer-events: none;

    @media screen and (min-width: 1440px) {
      pointer-events: none;
    }
  }
  @media (min-width: 1440px) {
    pointer-events: none;
  }

  @media (max-width: 768px) {
    top: -14px;
    right: -14px;
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;
  text-align: center;


  @media (max-width: 768px) {
    top: -31px;
  }
`;

export const Label = styled.label`  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;

  border-radius: 50%;
  border: 2px solid #3e85f3;
  background-color: none;
  overflow: hidden;

  & img {
    object-fit: cover;
    align-items: center;
    height: 100%;
    width: 100%;
  }


  @media screen and (min-width: 768px) {

    margin-top: 40px;
    width: 124px;
    height: 124px;  
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const HiddenInput = styled.input`
  opacity:0;
  position: relative;
  
  align-items: center;

  width: 12px;
  height: 12px;

  top: -18px;
  right: -24px;

  border-radius: 50%;
  background-color: #3e85f3;


  @media (max-width: 768px) {
    top: -14px;
    right: -14px;
  }


  @media screen and (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;     
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  > h3 {
    color: ${props => props.theme.variable.text};
    font-family: InterBold;
    font-size: 18px;
    line-height: 1.125rem;

    margin-bottom: 0.25rem;

    @media screen and (min-width: 768px) {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    color: ${props => props.theme.variable.textAvatar};
    font-family: InterSemiBold;
    font-size: 14px;
    line-height: 0.875rem;

    @media screen and (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`;
