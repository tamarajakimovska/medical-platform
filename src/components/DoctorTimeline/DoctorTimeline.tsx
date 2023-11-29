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
        {/* <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ backgroundColor: "#677DEA" }}>
                    <AccountCircleIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    New prescription
                </Typography>
                <Typography>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ backgroundColor: "#EC63A6" }}>
                    <CalendarMonthIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    Appointment
                </Typography>
                <Typography> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam. </p></Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                Now
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ backgroundColor: "#F56565" }}>
                    <MedicationIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    Medication
                </Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                25 July
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{}} />
                <TimelineDot style={{ backgroundColor: "green" }}>
                    <VaccinesIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Operation
                </Typography>
                <Typography>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                4h ago
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ backgroundColor: "#EBC94A" }}>
                    <PersonAddIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    New patient
                </Typography>
                <Typography>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                20 Sep
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ backgroundColor: "#EC8C3C" }}>
                    <SearchIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Examination
                </Typography>
                <Typography>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</Typography>
            </TimelineContent>
        </TimelineItem> */}
    </Timeline>
}
