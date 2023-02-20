import styled from "styled-components";
import { Linkedin, GitHub, Facebook, Mail } from "react-feather";
import Form from "./Form";

const Contact = () => {
    return (
        <Main>
            <Anchor>
                <span id="contact"></span>
            </Anchor>
            <Container>
                <Row>
                    <Col1>
                        <Title>Contact.</Title>
                        <Icons>
                            <a href="mailto:xarahdion@gmail.com" target="_blank">
                                <Mail size={30} color="lightgrey" />
                            </a>
                            <a href="https://www.linkedin.com/in/xarahdion/" target="_blank">
                                <Linkedin size={30} color="lightgrey" />
                            </a>
                            <a href="https://github.com/XarahDion/" target="_blank">
                                <GitHub size={30} color="lightgrey" />
                            </a>
                            <a href="https://www.facebook.com/dionxarah/" target="_blank">
                                <Facebook size={30} color="lightgrey" />
                            </a>
                        </Icons>
                    </Col1>
                    <Col2>
                        <Form />
                    </Col2>
                </Row>
            </Container>
        </Main>
    );
};

const Icons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid white;
        transition: transform 0.5s;
    }
    a:hover {
        background: var(--gradient-bar);
        border: var(--gradient-bar);
        transform: translateY(-8px);
    }
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
    padding: 50px 0 80px;
`;
const Anchor = styled.h2`
    position: relative;
    #contact {
        position: absolute;
        left: 0;
        top: -80px;
        height: 0;
        width: 0;
    }
`;

export default Contact;
