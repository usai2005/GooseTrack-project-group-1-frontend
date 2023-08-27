import React from 'react';
import {
  InfoBox,
  InfoList,
  InfoItem,
  InfoDay,
  InfoMonth,
} from './StatisticsInfo.styled';

const StatisticsInfo = () => {
  return (
    <InfoBox>
      <InfoList>
        <InfoItem>
          <InfoDay>By Day</InfoDay>
        </InfoItem>
        <InfoItem>
          <InfoMonth>By Month</InfoMonth>
        </InfoItem>
      </InfoList>
    </InfoBox>
  );
};

export default StatisticsInfo;
