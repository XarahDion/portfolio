import styled from "styled-components";
import img from "../assets/xarah-photobooth.jpg";
import Tabs from "./Tabs";

const About = () => {
    return (
        <Main id="about">
            <Container>
                <Row>
                    <Col1>
                        <Img src={img} alt="Xarah"></Img>
                    </Col1>
                    <Col2>
                        <Title>About Me</Title>
                        <Text>
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.{" "}
                        </Text>
                        <Contents>
                            <Tabs/>
                        </Contents>
                    </Col2>
                </Row>
            </Container>
        </Main>
    );
};

const Contents = styled.div``;
const Text = styled.p`
    color: #ababab;
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
`;
const Col1 = styled.div`
    flex-basis: 35%;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Container = styled.div``;
const Main = styled.div`
    padding-bottom: 80px;
`;

export default About;
