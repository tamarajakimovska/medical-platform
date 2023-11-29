import { Box, styled } from "@mui/material";
import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const EducationInfoTitle = styled('div')({
    fontWeight: '500',
    letterSpacing: '.2px',
    fontSize: '32px',
    marginBottom: '26px',
    background: '#D8E8F2',
    padding: '8px',
    borderRadius: '4px'
})

export const UserEducation = () => {
    return <Box style={{ backgroundColor: '#FBFBFB', boxShadow: '0 18px 34px rgba(0, 0, 0, .12)' }} width={'100%'} height={'42vh'} borderRadius={'2%'} px={2}>
        <Box pt={2}>
            <EducationInfoTitle>Education</EducationInfoTitle>
        </Box>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2008-2017
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Primary School </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2017-2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Technical School Nace Bugjoni </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>State Exam/Nurse Practitioner License</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>SheCodes Coding Bootcamp</TimelineContent>
            </TimelineItem>
        </Timeline>
    </Box>
}