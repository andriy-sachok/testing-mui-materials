import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

const MuiTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem position='left'>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Your location</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MuiTimeline;
