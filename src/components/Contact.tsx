import styled from "styled-components";
import { Linkedin, GitHub, Facebook, Mail } from "react-feather";
import Form from "./Form";

const Contact = () => {
    return (
        <Main>
            <Anchor>
                <span id="contact"></span>
            </Anchor>
            <Row>
                <Col1>
                    <Title>Contact.</Title>
                    <Icons>
                        <a href="mailto:xarahdion@gmail.com" target="_blank">
                            <Mail size={25} color="lightgrey" />
                        </a>
                        <a href="https://www.linkedin.com/in/xarahdion/" target="_blank">
                            <Linkedin size={25} color="lightgrey" />
                        </a>
                        <a href="https://github.com/XarahDion/" target="_blank">
                            <GitHub size={25} color="lightgrey" />
                        </a>
                        <a href="https://www.facebook.com/dionxarah/" target="_blank">
                            <Facebook size={25} color="lightgrey" />
                        </a>
                    </Icons>
                </Col1>
                <Col2>
                    <Form />
                </Col2>
            </Row>
        </Main>
    );
};

const Icons = styled.div`
    display: flex;
    gap: 8%;
    margin-top: 5%;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        padding: 4%;
        border-radius: 50%;
        border: 1px solid white;
        transition: transform 0.5s;
    }
    a:hover {
        background: var(--gradient-bar);
        border: var(--gradient-bar);
        transform: translateY(-8px);
    }
    @media screen and (max-width: 700px) {
        justify-content: center;
        align-items:center;
        margin: 8%;
        a {
            padding: 6%;
        }
    }
    @media screen and (max-width: 500px) {
        margin-right: 20%;
    } 
`;
const Title = styled.h1`
    padding-bottom: 12px;
    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;
const Col2 = styled.div`
    flex-basis: 60%;
    @media screen and (max-width: 800px) {
        flex-basis: 100%;
    }
`;
const Col1 = styled.div`
    flex-basis: 35%;
    @media screen and (max-width: 700px) {
        align-items:center;
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Main = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    margin-bottom: 5%;
    @media screen and (max-width: 1000px) {
        height: 60vh;
    }
    @media screen and (max-width: 900px) {
        height: 80vh;
    }
    @media screen and (max-width: 500px) {
        height: 100vh;
    }
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
