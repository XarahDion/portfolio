import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <h1>Xarah.</h1>
            <Div>
                <Link href="#">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#portfolio">Projects</Link>
                <Link href="#contact">Contact</Link>
            </Div>
        </Container>
    );
};

const Link = styled.a`
    position: relative;
    &::after {
        content: "";
        width: 0%;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: 0.5s;
        background: var(--gradient-bar);
    }
    &:hover::after {
        width: 100%;
    }
`;
const Div = styled.div`
    display: flex;
    gap: 2.6em;
    @media screen and (max-width: 800px) {
        gap: 2em;
    }
    @media screen and (max-width: 600px) {
        gap: 1em;
    }
`;
const Container = styled.div`
    padding: 1% 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--background-color);
    width: 100vw;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    h1 {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
`;

export default Navbar;
