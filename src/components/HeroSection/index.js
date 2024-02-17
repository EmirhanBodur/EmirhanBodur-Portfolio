import React from "react";
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyled'
import HeroImg from '../../ımages/profil.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';


const HeroSection = () => {
    return(
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                      <Title>
                        Merhaba, Ben <br />
                         {Bio.name}
                      </Title>
                      <TextLoop>
                        Ben bir
                        <Span>
                        <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                        </Span>
                      </TextLoop>
                      <SubTitle>{Bio.description}</SubTitle>
                      <ResumeButton href={Bio.resume} target="_blank">Devamını Kontrol Et</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
     )
};

export default HeroSection;