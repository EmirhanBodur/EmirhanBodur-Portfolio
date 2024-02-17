import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from '../../data/constants';

const Container = styled.div`
background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);

`;

const Wrapper = styled.div`
    max-width:1100px;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    width:100%;
    gap:12px;
    padding: 10px 0px 100px 0px;

`;

const Title = styled.div`
    font-size:42px;
    font-weight:600;
    text-align:center;
    margin-top:12px;
    color: ${({theme}) => theme.text_primary};

    @media (max-width:768px) {
        margin-top:12px;
        font-size:32px;
    }

`;

const Desc = styled.div`
    font-size:18px;
    max-width:600px;
    text-align:center;
    color: ${({theme}) => theme.text_secondary};

    @media (max-width:768px) {
        font-size:16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display:flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size:16px;
    border-radius:12px;
    font-weight:500;
    margin: 22px 0;

    @media (max-width:768px) {
        font-size: 12px;
    }

`;

const Toggle = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    &.active {
        background: ${({ theme }) => theme.primary + 20};
    }
    @media (max-width:768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;



const Divider = styled.div`
    width:1.5px;
    background-color: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   gap:28px;
   flex-wrap:wrap;

`;



const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState("all");

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projelerim</Title>
                <Desc>
                    Web uygulamalarından android uygulamalarına kadar çok çeşitli projeler üzerinde çalıştım.
                    İşte projelerimden bazıları
                </Desc>

                <ToggleButtonGroup>
                    {/* {toggle === 'all' ? (
                       <Toggle className={toggle === 'all' ? 'active' : ''} onClick={() => setToggle('all')}>All</Toggle>
                    ) : (
                        <Toggle onClick={() => setToggle('all')}>All</Toggle>
                    )} */}
                    {/* <Divider /> */}
                    {toggle === 'web app' ? (
                        <Toggle className={toggle === 'web app' ? 'active' : ''} onClick={() => setToggle('web app')}>Web</Toggle>
                    ) : (
                        <Toggle onClick={() => setToggle('web app')}>Web</Toggle>
                    )}
                    {/* <Divider />
                    {toggle === 'android app' ? (
                        <Toggle className={toggle === 'android app' ? 'active' : ''} onClick={() => setToggle('android app')}>Mobile APP</Toggle>
                    ) : (
                        <Toggle onClick={() => setToggle('android app')}>Mobile APP</Toggle>
                    )}
                    <Divider />
                    {toggle === 'machine' ? (
                        <Toggle className={toggle === 'machine' ? 'active' : ''} onClick={() => setToggle('machine')}>Machine Learning</Toggle>
                    ) : (
                        <Toggle onClick={() => setToggle('machine')}>Machine Learning</Toggle>
                    )}
                    <Divider /> */}
                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === 'all' ? (
                        projects.map((project) => <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />)
                    ) : (
                        projects
                            .filter((item) => item.category === toggle)
                            .map((project) => <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />)
                    )}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
