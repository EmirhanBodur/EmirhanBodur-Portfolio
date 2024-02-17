import React, { useState } from "react";
import { Nav, NavLink, NavBarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, LogoImage } from './NavbarStyled'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <LogoImage src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /> <Span>Emirhan Bodur</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Hakkımda</NavLink>
          <NavLink href="#skills">Yetenekler</NavLink>
          <NavLink href="#experience">Deneyimler</NavLink>
          <NavLink href="#projects">Projeler</NavLink>
          <NavLink href="#education">Eğitim</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profil</GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>Hakkımda</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Yetenekler</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Deneyimler</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projeler</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Eğitim</MobileLink>
            <GitHubButton
             style={{
                padding: '10px 16px',
                background: `white`,
                color: 'black',
                width: 'max-content' }}
                href={Bio.github}
                target="_blank"
                >
                 Github Profil
            </GitHubButton>
          </MobileMenu>
        )}
      </NavBarContainer>
    </Nav>
  );
}

export default Navbar;