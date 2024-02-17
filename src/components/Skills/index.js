import React from "react";
import {
    Container,
    Wrapper,
    Title,
    Desc,
    SkillsContainer,
    Skill,
    SkillTitle,
    SkillList,
    SkillItem,
    SkillImage
  } from './SkillsStyled';
import {skills} from "../../data/constants";




const Skills = () => {
    return (
      <Container id="skills">
        <Wrapper>
          <Title>Yetenekler</Title>
          <Desc>İşte 1 yıldır üzerinde çalıştığım bazı yeteneklerim.</Desc>
          <SkillsContainer>
            {skills.map((item, index) => (
              <Skill key={index}>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill, subIndex) => (
                    <SkillItem key={subIndex}>
                      <SkillImage src={skill.image} />
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    );
  };
  
  export default Skills;