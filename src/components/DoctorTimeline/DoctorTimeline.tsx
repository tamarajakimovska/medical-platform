import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { getTimelineIcon, getTimelineIconColor } from '../../utils';

interface Props {
    timeline: any[];
}

export const DoctorTimeline = ({ timeline }: Props) => {
    return <Timeline position="alternate">
        {timeline?.map((item) => {
            return <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {item.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ backgroundColor: getTimelineIconColor(item.icon) }}>
                        {getTimelineIcon(item.icon)}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                </TimelineContent>
            </TimelineItem>
        })}
    </Timeline>
}
