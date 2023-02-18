import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <TitleDiv>
                <Red>X</Red>
                <Title>arah.</Title>
            </TitleDiv>
            <Div>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Contact</Link>
            </Div>
        </Container>
    );
};

const TitleDiv = styled.div`
    display: flex;
`;
const Red = styled.h1`
    color: red;
`;
const Title = styled.h1``;
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
    padding: 10px 10%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;
export default Navbar;
