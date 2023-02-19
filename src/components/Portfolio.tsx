import styled from "styled-components";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { GitHub, ExternalLink } from "react-feather";

const Portfolio = () => {
    return (
        <Main id="portfolio">
            <div>
                <h1>My Work</h1>
                <WorkList>
                    <Work>
                        <Img src={project1} />
                        <Layer>
                            <h3>Earth Trotter</h3>
                            <Description>
                                Full-stack MERN App for logging travels,
                                displayed as markers on a an interactive world
                                map.
                            </Description>
                            <a
                                href="https://github.com/XarahDion/final-project"
                                target="_blank"
                            >
                                <GitHub size={30} />
                            </a>
                            <a
                                href="https://www.earth-trotter.xarahdion.com/"
                                target="_blank"
                            >
                                <ExternalLink size={30} />
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project2} />
                        <Layer>
                            <h3>Wearably</h3>
                            <Description>
                                E-commerce MERN stack app, by Anthony Kameka,
                                Mariana Oka, Francis Vézina and I.
                            </Description>
                            <a
                                href="https://github.com/XarahDion/e-commerce"
                                target="_blank"
                            >
                                <GitHub size={30} />
                            </a>
                            <a
                                href="https://e-commerce-zl6k.onrender.com/"
                                target="_blank"
                            >
                                <ExternalLink size={30} />
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project4} />
                        <Layer>
                            <h3>Landing Page</h3>
                            <Description>
                                A fully responsive landing page built along
                                modern UI/UX standards with pure CSS3.
                            </Description>
                            <a
                                href="https://github.com/XarahDion/landing-page"
                                target="_blank"
                            >
                                <GitHub size={30} />
                            </a>
                            <a
                                href="https://landing-page-u316.onrender.com/"
                                target="_blank"
                            >
                                <ExternalLink size={30} />
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project3} />
                        <Layer>
                            <h3>Current Weather</h3>
                            <Description>
                                A clone of The Weather Network's weather app
                                built with React Native and Expo.
                            </Description>
                            <a
                                href="https://github.com/XarahDion/current-weather-app"
                                target="_blank"
                            >
                                <GitHub size={30} />
                            </a>
                            <a
                                href="https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphone12&deviceColor=black&embed=true&orientation=portrait&scale=73&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40xarahdion%2F8929c3%2B3Fqz_6piO5%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D"
                                target="_blank"
                            >
                                <ExternalLink size={30} />
                            </a>
                        </Layer>
                    </Work>
                </WorkList>
            </div>
        </Main>
    );
};

const Description = styled.p`
    font-size: 14px;
    margin: 20px 0;
    font-weight: 500;
`;
const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), #ff004f);
    border-radius: 20px;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
    transition: height 0.8s;
    a {
        color: transparent;
        margin-bottom: 10px;
    }
`;
const Img = styled.img`
    max-width: 100%;
    border-radius: 30px;
    display: block;
    transition: transform 0.7s;
`;
const Work = styled.div`
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    &:hover img {
        transform: scale(1.3);
    }
    &:hover div {
        height: 100%;
    }
    &:hover a {
        display: block;
        color: white;
    }
`;
const WorkList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
`;
const Main = styled.div`
    padding: 50px 0;
`;

export default Portfolio;