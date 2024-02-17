import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import {
    Container,
    Wrapper,
    Title,
    Desc,
    TimelineSection
  } from './ExperienceStyled';


const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
            <Title>Deneyim</Title>
            <Desc>İş deneyimlerim ve farklı şirket ve projelerde çalışmam.</Desc>
            <TimelineSection>
                <Timeline>
                    {experiences.map((experience,index) => (
                        <TimelineItem key={experience.id}>
                            <TimelineSeparator> 
                                <TimelineDot variant="outlined" colors="secondary" />
                                {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <ExperienceCard experience={experience}/>
                            </TimelineContent>
                        </TimelineItem>

                    ))}
                </Timeline>
            </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience