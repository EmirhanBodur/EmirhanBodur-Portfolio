import React from "react";
import {
    FooterContainer,
    FooterWrapper,
    Logo,
    Nav,
    NavLink,
    SocialMediaIcons,
    SocialMediaIcon,
    Copyright,
    EmirhanLink,
} from './FooterStyled'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';


function Footer() {
    return(
        <FooterContainer>
            <FooterWrapper>
                <Logo>Emirhan Bodur</Logo>
                <Nav>
                    <NavLink href="#about">Hakkımda</NavLink>
                    <NavLink href="#skills">Yetenekler</NavLink>
                    <NavLink href="#experience">Deneyim</NavLink>
                    <NavLink href="#projects">Projeler</NavLink>
                    <NavLink href="#education">Eğitim</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.instagram} target="_blank"><InstagramIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.twitter} target="_blank"><TwitterIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="_blank"><LinkedInIcon /></SocialMediaIcon>
                   
                </SocialMediaIcons>
                <Copyright>
        &copy; 2024 <EmirhanLink href="https://emirhanbodur.dev" target="_blank" >Emirhan Bodur</EmirhanLink>. Tüm hakları saklıdır.
      </Copyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer