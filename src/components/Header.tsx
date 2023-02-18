import styled from "styled-components";
import img from "../assets/matt-wang.jpg";

const Header = () => {
    return (
        <Main>
            <Text>
                <p>Full Stack Web Developer</p>
                <h1>
                    Hi, I'm <span>Xarah </span> Dion from Quebec, Canada.
                </h1>
            </Text>
            <Img src={img} alt="Matt Wang" />
        </Main>
    );
};

const Text = styled.div`
    margin-top: 15%;
    font-size: 30px;
    position: absolute;
    max-width: 40%;
    h1 {
        font-size: 40px;
        margin-top: 20px;
    }
    span {
        color: red;
    }
`;
const Main = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0 10%;
    overflow-x: hidden;
`;

const Img = styled.img`
    max-width: 70vw;
    position: absolute;
    z-index: -2;
    background-size: cover;
    left: 70%;
    transform: translate(-50%, 0);
`;

export default Header;
