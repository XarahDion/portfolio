import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <TitleDiv>
                <Red>X</Red>
                <h1>arah.</h1>
            </TitleDiv>
            <Div>
                <Link href="#">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#portfolio">Projects</Link>
                <Link href="#">Contact</Link>
            </Div>
        </Container>
    );
};

const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const Red = styled.h1`
    color: red;
`;
const Link = styled.a`
    position: relative;
    &::after {
        content: "";
        width: 0%;
        height: 3px;
        background: #ff004f;
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
`;
const Div = styled.div`
    display: flex;
    gap: 2em;
`;
const Container = styled.div`
    padding: 1% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: black;
`;

export default Navbar;
