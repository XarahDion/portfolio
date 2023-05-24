import styled from "styled-components";

const MobileLinksMenu = () => {
    return (
        <MenuContainer>
            <Item>
                <a href="#">Home</a>
            </Item>
            <Item>
                <a href="#about">About</a>
            </Item>
            <Item>
                <a href="#portfolio">Projects</a>
            </Item>
            <Item>
                <a href="#contact">Contact</a>
            </Item>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    text-align: end;
    background: black;
    box-shadow: inset 0 0 6px white;
    padding: 1rem 2rem 1rem 3rem;
    position: absolute;
    right: 0;
    top: 1.4em;
    border-radius: 4%;
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    @-webkit-keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
`;
const Item = styled.div`
    font-size: 14px;
    line-height: 2.4rem;
    margin: 1 0rem;
    cursor: pointer;
`;

export default MobileLinksMenu;
