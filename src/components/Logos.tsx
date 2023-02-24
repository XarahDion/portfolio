import styled from "styled-components";

const Logos = () => {
    return (
        <Slider>
            <SlideTrackL>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                        alt="express"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                        alt="mongodb"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                        alt="aws"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                    />
                </Slide>
                <Slide>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                        alt="python"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                        alt="postgresql"
                    />
                </Slide>
                <Slide>
                    <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" />
                </Slide>
                <Slide>
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" />
                </Slide>
            </SlideTrackL>
            <SlideTrackR>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                        alt="express"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                        alt="mongodb"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                        alt="aws"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                    />
                </Slide>
                <Slide>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                        alt="python"
                    />
                </Slide>
                <Slide>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                        alt="postgresql"
                    />
                </Slide>
                <Slide>
                    <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" />
                </Slide>
                <Slide>
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" />
                </Slide>
            </SlideTrackR>
        </Slider>
    );
};

const SlideTrackL = styled.div`
    width: 100vw;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    animation: scroll 30s linear infinite;
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    @media screen and (max-width: 500px) {
        width: 200vw;
    }
`;
const SlideTrackR = styled(SlideTrackL)`
    left: 100%;
    @media screen and (max-width: 500px) {
        left: 200%;
    }
`;
const Slide = styled.div`
    margin: 1%;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 700px) {
        
    }
`;
const Slider = styled.div`
overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(-140deg, rgba(255, 249, 249, 0.552), #9000ff40);
    margin: 10% 0;
    width: 100vw;
    height: 14vh;
    box-shadow: inset -6px 0px 6px white;
    @media screen and (max-width: 800px) {
        height: 12vh;
    }
    @media screen and (max-width: 700px) {
        height: 9vh;
    }
    @media screen and (max-width: 700px) {
        height: 9vh;
    }
`;
export default Logos;
