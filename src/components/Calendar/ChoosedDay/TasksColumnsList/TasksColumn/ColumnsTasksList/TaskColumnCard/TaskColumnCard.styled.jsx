import { styled } from 'styled-components';

export const ContainerColumnCard = styled.div`
  width: 100%;
  padding: 14px 14px 18px;
  border-radius: 8px;
  margin-bottom: 18px;
  background-color: ${props => props.theme.variable.bgColorTask};
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  // bordercalendarcolor: 'rgba(220,	227,	229, 0.80)';
`;

export const TextCard = styled.div`
  margin-bottom: 28px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  color: ${props => props.theme.variable.textAvatar};
`;

export const ContainerAvatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 2px solid rgb(62, 133, 243);
  border-radius: 50%;
`;

export const ContainerData = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  justify-content: space-between;
`;

export const WrapperData = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  justify-content: space-between;
`;

export const Priority = styled.p`
  padding: 2px 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  color: rgb(255, 255, 255);
  background-color: rgb(114, 194, 248);
  border-radius: 4px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ea3d6533;
  stroke: #ea3d65;
  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #ea3d65;
  }
`;

export const MoveBtn = styled.button`
  display: flex;
  -webkit-box-align: end;
  align-items: end;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  color: rgb(0, 0, 0);
`;
