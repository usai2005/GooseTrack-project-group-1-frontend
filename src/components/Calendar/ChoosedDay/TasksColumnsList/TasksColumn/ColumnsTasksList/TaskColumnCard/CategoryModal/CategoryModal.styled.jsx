import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;

  position: absolute;
  top: 100;
  right: 50;

  width: 115px;
  background-color: ${props => props.theme.variable.bgCalendar};
  /* transition: ${props => props.theme.defaultTransition}; */
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
    width: 147px;
  }
`;

export const CategoriesList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;

    width: 87px;
    color: black;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    @media screen and (min-width: 768px) {
      width: 99px;
    }
  }
`;

export const BtnIcon = styled.button`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.mainTextColor};

  transition: stroke 250ms ease-in-out;
`;

export const ControModalBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  font-family: 'InterNormal', sans-serif;
  font-size: 12px;
  line-height: 1.17;
  /* color: ${props => props.theme.mainTextColor}; */
  width: 100%;
  background-color: white;
  border: 0;
  cursor: pointer;
  fill: none;

  transition: color 250ms ease-in-out;

  & svg {
    background-color: ${props => props.theme.variable.bgCalendar};
  }

  stroke: ${props => props.theme.variable.arrowIconColor};
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

// export const ControModalBtn = styled.button`
// font-size: 12px;
//   padding: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: none;
//   fill: none;
//   cursor: pointer;
//   background-color: ${props => props.theme.variable.bgCalendar};

//   & svg {
//     background-color: ${props => props.theme.variable.bgCalendar};
//   }

//   stroke: ${props => props.theme.variable.arrowIconColor};
//   &:hover,
//   &:focus {
//     stroke: #3e85f3;
//   }
// `;
