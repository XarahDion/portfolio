import styled from "styled-components";
import { useState, useEffect } from "react";

// interface TabProps {
//     tab: string;
//     onClick: () => void;

//   }

const Tabs = () => {
    const [tabState, setTabState] = useState("");
    console.log(tabState);
    const openTab = (e) => {
        console.log(e.currentTarget.id);
        setTabState(e.currentTarget.id);
    };

    useEffect(() => {}, [tabState]);

    return (
        <Main>
            <Div>
                <Links id="skills" onClick={(e) => openTab(e)}>
                    Skills
                </Links>
                <Links id="education" onClick={(e) => openTab(e)}>
                    Education
                </Links>
                <Links id="music" onClick={(e) => openTab(e)}>
                    Music Production
                </Links>
            </Div>
            <Skills tab={tabState}>
                <li>
                    <span>UI/UX</span>
                    <br></br>Designing Web/App interfaces
                </li>
                <li>
                    <span>Full Stack Development</span>
                    <br></br>MongoDB, Express, React, Node.js
                </li>
                <li>
                    <span>CI/CD</span>
                    <br></br>Version control and deployment
                </li>
            </Skills>
            <Education tab={tabState}>
            <li>
                    <span>2022 Concordia University</span>
                    <br></br>Diploma in Full Stack Web Development
                </li>
                <li>
                    <span>2020-2022 Collège Ahuntsic</span>
                    <br></br>D.E.C. in Natural Sciences
                </li>
                <li>
                    <span>2001-2003 Cégep Sainte-Foy</span>
                    <br></br>D.E.C. in Classical Music
                </li>
            </Education>
            <Music tab={tabState}>
            <li>
                    <span>2019 Xarah Dion - Plein Nord</span>
                    <br></br>Full length album, self-released on vinyl and digital
                </li>
                <li>
                    <span>2016 Xarah Dion - Fugitive</span>
                    <br></br>Full length album
                </li>
                <li>
                    <span>2014 Xarah Dion - Le mal nécessaire</span>
                    <br></br>Full length album, self-released on vinyl and digital
                </li>
            </Music>
        </Main>
    );
};

const Div = styled.div`
    display: flex;
    margin-bottom: 12px;
`;
const Skills = styled.ul`
    list-style: none;
    font-size: 16px;
    display: ${(props) => (props.tab === "skills" ? "block" : "none")};
    span {
        color: red;
        font-size: 14px;
    }
`;
const Education = styled(Skills)`
    display: ${(props) => (props.tab === "education" ? "block" : "none")};
`;
const Music = styled(Skills)`
    display: ${(props) => (props.tab === "music" ? "block" : "none")};
`;
const Links = styled.p`
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    &::after {
        content: "";
        width: 0%;
        height: 3px;
        background: #ff004f;
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
    .active {
        display: none;
    }
`;
const Main = styled.div`
    margin: 20px 0 40px;
`;

export default Tabs;
