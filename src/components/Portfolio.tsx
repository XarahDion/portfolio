import styled from "styled-components";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { GitHub, ExternalLink } from "react-feather";

const Portfolio = () => {
    return (
        <Main>
            <Anchor>
                <span id="portfolio"></span>
            </Anchor>
            <div>
                <h1>My Work.</h1>
                <WorkList>
                    <Work>
                        <Img src={project1} />
                        <Layer>
                            <h2>Earth Trotter</h2>
                            <Description>
                                Full-stack MERN App for logging travels, displayed as markers on a an interactive world
                                map.
                            </Description>
                            <a href="https://github.com/XarahDion/final-project" target="_blank">
                                <GitHub size={28} /><div>Code</div>
                            </a>
                            <a href="https://www.earth-trotter.xarahdion.com/" target="_blank">
                                <ExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project2} />
                        <Layer>
                            <h2>Wearably°</h2>
                            <Description>
                                E-commerce MERN stack app, by Anthony Kameka, Mariana Oka, Francis Vézina and I.
                            </Description>
                            <a href="https://github.com/XarahDion/e-commerce" target="_blank">
                                <GitHub size={28} /><div>Code</div>
                            </a>
                            <a href="https://e-commerce-zl6k.onrender.com/" target="_blank">
                                <ExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project4} />
                        <Layer>
                            <h2>Landing Page</h2>
                            <Description>
                                A fully responsive landing page built along modern UI/UX standards with pure CSS3.
                            </Description>
                            <a href="https://github.com/XarahDion/landing-page" target="_blank">
                                <GitHub size={28} /><div>Code</div>
                            </a>
                            <a href="https://landing-page-u316.onrender.com/" target="_blank">
                                <ExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project3} />
                        <Layer>
                            <h2>Current Weather</h2>
                            <Description>
                                A clone of The Weather Network's weather app built with React Native and Expo.
                            </Description>
                            <a href="https://github.com/XarahDion/current-weather-app" target="_blank">
                                <GitHub size={28} /><div>Code</div>
                            </a>
                            <a
                                href="https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphone12&deviceColor=black&embed=true&orientation=portrait&scale=73&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40xarahdion%2F8929c3%2B3Fqz_6piO5%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D"
                                target="_blank"
                            >
                                <ExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                </WorkList>
            </div>
        </Main>
    );
};
const Anchor = styled.h2`
    position: relative;
    #portfolio {
        position: absolute;
        left: 0;
        top: -90px;
        height: 0;
        width: 0;
    }
`;
const Description = styled.p`
    font-size: 14px;
    margin: 20px 0;
    font-weight: 500;
    @media screen and (max-width: 1250px) {
        font-size: 12px;
    }  
    @media screen and (max-width: 900px) {
        font-size: 14px;
    } 
    @media screen and (max-width: 600px) {
        font-size: 11px;
    }   
    @media screen and (max-width: 500px) {
        font-size: 12px;
    } 
`;
const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), #450576e3);
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
    div {
        font-size: 0.8rem;
        line-height: 0.6;
    }
    a {
        color: transparent;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 1250px) {
        h2 {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 1000px) {
        h2 {
            font-size: 0.8em;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 900px) {
        h2 {
            font-size: 1.4em;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 700px) {
        h2 {
            font-size: 0.9em;
        }
        a {
            margin-bottom: 20px;
        }
    }
`;
const Img = styled.img`
    max-width: 100%;
    border-radius: 20px;
    display: block;
    transition: transform 0.7s;
`;
const Work = styled.div`
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 0px 2px 3px rgba(255, 255, 255, 0.477);
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
    @media screen and (max-width: 500px) {
        margin-bottom: 6%;
    }
`;
const WorkList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-gap: 4%;
    margin-top: 4%;
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
        grid-gap: 6%;
    }
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;
const Main = styled.div`
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 1000px) {
        height: 70vh;
    }
    @media screen and (max-width: 900px) {
        h1 {
            padding-bottom: 2%;
        }
        height: auto;
    }
`;

export default Portfolio;
