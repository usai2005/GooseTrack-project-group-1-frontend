import styled from 'styled-components';

export const DefaultAvatarSvg = styled.svg`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const PlusSvgOnAvatar = styled.svg`
  position: absolute;
  border-radius: 50%;
  background-color: #3e85f3;
  content: '+';
  stroke: #ffffff;
  font-family: Inter;
  font-size: 18px;
  line-height: 1.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;

  top: 30px;
  right: 60px;
  pointer-events: none;

  @media (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    top: 9.0625rem;
    right: 45px;
    pointer-events: none;

    @media (min-width: 1440px) {
      top: 10.3125rem;
      pointer-events: none;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;

  margin-bottom: 18px;
  margin-top: -30px;

  border-radius: 50%;
  border: 2px solid #3e85f3;
  background-color: none;
  overflow: hidden;
  left: 45px;

  & img {
    object-fit: cover;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    width: 124px;
    height: 124px;

    left: 17px;
  }

  @media (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const HiddenInput = styled.input`
  position: relative;
  top: -29px;
  left: 92px;

  display: flex;
  align-items: center;

  width: 12px;
  height: 12px;
  border: 0;
  padding: 0;

  border-radius: 50%;
  background-color: #3e85f3;

  @media (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    top: -37px;
    left: 97px;
  }

  @media (min-width: 1440px) {
    top: -37px;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  > h3 {
    color: ${props => props.theme.variable.text};
    font-family: InterBold;
    font-size: 18px;
    line-height: 1.125rem;

    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    color: ${props => props.theme.variable.textAvatar};
    font-family: InterSemiBold;
    font-size: 14px;
    line-height: 0.875rem;

    @media (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`;
