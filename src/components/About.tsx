import styled from "styled-components";
import img from "../assets/xarah-photobooth.jpg";
import Tabs from "./Tabs";

const About = () => {
    return (
        <Main>
            <Anchor>
                <span id="about"></span>
            </Anchor>
            <div>
                <Row>
                    <Col1>
                        <Img src={img} alt="Xarah"></Img>
                    </Col1>
                    <Col2>
                        <Title>About Me.</Title>
                        <p>
                            Loving both the frontend and backend, interested in learning new technologies, frameworks
                            and methods. Meticulous about writing clean code along the software design principles.
                            Curious learner with an extensive collaborative and music production background. Currently
                            learning: TypeScript and AWS.
                        </p>
                        <div>
                            <Tabs />
                        </div>
                    </Col2>
                </Row>
            </div>
        </Main>
    );
};

const Anchor = styled.h2`
    position: relative;
    #about {
        position: absolute;
        left: 0;
        top: -120px;
        height: 0;
        width: 0;
    }
`;
const Img = styled.img`
    width: 100%;
    border-radius: 5%;
`;
const Title = styled.h1`
    padding-bottom: 2%;
`;
const Col2 = styled.div`
    flex-basis: 60%;
    p {
        color: #ababab;
        text-align: justify;
        line-height: 1.2;
    }
    @media screen and (max-width: 1000px) {
        p {
            font-size: 14px;
            line-height: 1.3;
        }
    }
    @media screen and (max-width: 800px) {
        flex-basis: 55%;
        p {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 700px) {
        flex-basis: 100%;
        text-align: right;
        p {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 500px) {
        p {
            font-size: 12px;
        }
    }
`;
const Col1 = styled.div`
    flex-basis: 35%;
    @media screen and (max-width: 800px) {
        flex-basis: 40%;
    }
    @media screen and (max-width: 700px) {
        display: none;
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Main = styled.div`
    width: 100%;
    height: 80vh;
    @media screen and (max-width: 1000px) {
        height: 70vh;
    }
    @media screen and (max-width: 500px) {
        height: 60vh;
    }
`;

export default About;
