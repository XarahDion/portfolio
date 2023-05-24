import styled from "styled-components";
import img from "../assets/xarah-linkedin.jpg";

const Header = () => {
    return (
        <Main id="home">
            <Text>
                <h1>
                    Bonjour / Hi !<br></br> Je suis <span>Xarah </span> Dion de Québec, Canada.
                </h1>
            </Text>
            <Img src={img} alt="Xarah" />
        </Main>
    );
};

const Text = styled.div`
    margin-top: 20%;
    position: absolute;
    max-width: 50%;
    h1 {
        margin-top: 6%;
    }
    span {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
    @media screen and (max-width: 1000px) {
        max-width: 50%;
    }
    @media screen and (max-width: 500px) {
        max-width: 50%;
        h3 {
            font-size: 14px;
        }
    }
`;
const Main = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 1000px) {
        height: 70vh;
    }
    @media screen and (max-width: 820px) and (max-height: 1200px) {
        height: 40vh;
    }
    @media screen and (max-width: 500px) {
        height: 30vh;
    }
`;

const Img = styled.img`
    margin-top: 5%;
    max-width: 35%;
    border-radius: 6%;
    position: absolute;
    right: 8%;
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
    @media screen and (max-width: 1000px) {
        max-width: 40%;
        right: 0%;
    }
    @media screen and (max-width: 600px) {
        margin-top: 10%;
    }
`;

export default Header;
