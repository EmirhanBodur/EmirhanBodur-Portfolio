import React from "react";
import {
    Document,
    Span,
    Card,
    Top,
    Image,
    Body,
    Role,
    Company,
    Date,
    Description,
    Skills,
    ItemWrapper,
    Skill
} from './ExperienceCardStyled';

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                {/* <Image src={experience.img} /> */}
                <Body>
                    <Company>{experience.company}</Company>
                    <Role>{experience.role}</Role>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience?.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    );
}

export default ExperienceCard;
