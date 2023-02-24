import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Logos from "./components/Logos";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Div>
                <Header />
            </Div>
            <Logos />
            <Div>
                <About />
                <Portfolio />
                <Contact />
            </Div>
        </>
    );
};

const Div = styled.div`
    padding: 0 10%;
`;
export default App;
