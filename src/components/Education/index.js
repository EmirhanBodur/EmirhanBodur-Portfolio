import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

import {
    Container,
    Wrapper,
    Title,
    Desc,
    TimelineSection,
} from './EducationStyled'

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
            <Title>Eğitim</Title>
            <Desc>"Eğitimim, kendimi keşfetme ve büyüme yolculuğum oldu. Eğitim detaylarım şu şekildedir:"</Desc>
            <TimelineSection>
                <Timeline>
                    {education.map((education,index) => (
                        <TimelineItem key={education.id}>
                           
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <EducationCard education={education} />
                            </TimelineContent>
                            <TimelineSeparator> 
  <TimelineDot variant="outlined" color="secondary" />
  {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />}
</TimelineSeparator>

                        </TimelineItem>

                    ))}
                </Timeline>
            </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education