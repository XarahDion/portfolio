import styled from "styled-components";
import { useState, useEffect } from "react";

interface TabProps {
    tab: string;
    onClick?: () => void;
}

const Tabs = () => {
    const [tabState, setTabState] = useState<string>("");

    const openTab = (e: React.MouseEvent<HTMLAnchorElement>): void => {
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
                <li>
                    <span>CMS</span>
                    <br></br>Freelance services with WordPress
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
                    <br></br>Full length album, released on Visage Musique
                </li>
                <li>
                    <span>2014 Xarah Dion - Le mal nécessaire</span>
                    <br></br>Full length album, self-released on vinyl and digital
                </li>
                <a href="https://xarahdion.com/" target="_blank">
                    See more
                </a>
            </Music>
        </Main>
    );
};

const Div = styled.div`
    display: flex;
    margin-bottom: 2%;
`;
const Skills = styled.ul<TabProps>`
    color: #ababab;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    display: ${(props) => (props.tab === "skills" ? "block" : "none")};
    span {
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 18px;
        font-weight: 700;
    }
    li {
        margin: 10px 0;
    }
`;
const Education = styled(Skills)`
    display: ${(props) => (props.tab === "education" ? "block" : "none")};
`;
const Music = styled(Skills)`
    display: ${(props) => (props.tab === "music" ? "block" : "none")};
    a {
        display: block;
        width: fit-content;
        box-shadow: 0 0 0 1px #FB286B ;
        padding: 10px 28px;
        border-radius: 10px;
        font-weight: 500;
        font-size: 16px;
        transition: background 0.8s;
    }
    a:hover {
        background: var(--gradient-bar);
        border: none;
        box-shadow: 0 0 0 1px var(--gradient-bar);
    }
`;
const Links = styled.a`
    margin: 0 50px 10px 0;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    &::after {
        content: "";
        width: 0%;
        height: 3px;
        background: var(--gradient-bar);
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
    margin: 4% 0 0;
`;

export default Tabs;
