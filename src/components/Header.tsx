import styled from "styled-components";
import img from "../assets/xarah-linkedin.jpg";

const Header = () => {
    return (
        <Main id="home">
            <Text>
                <p>Full Stack Web Developer</p>
                <h1>
                    Hi, I'm <span>Xarah </span> Dion from Quebec, Canada.
                </h1>
            </Text>
            <Img src={img} alt="Xarah" />
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
    overflow-x: hidden;
`;

const Img = styled.img`
    max-width: 30vw;
    border-radius: 6%;
    position: absolute;
    right: 16%;
    animation: 2s ease-out 1s 1 slideInRight;
    @keyframes slideInRight {
        0% {
            transform: translateX(60%);
            opacity: 0.1;
        }
        100% {
            transform: translateX(0);
        }
    }
`;

export default Header;
