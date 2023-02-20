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
                            Focused on evaluating user needs and problems and applying actionable strategies. Curious
                            learner with an extensive collaborative and music production background. Currently learning:
                            TypeScript and AWS.
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
    padding-bottom: 12px;
`;
const Col2 = styled.div`
    flex-basis: 60%;
    p {
        color: #ababab;
    }
`;
const Col1 = styled.div`
    flex-basis: 35%;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Main = styled.div`
    padding-bottom: 10%;
`;

export default About;
