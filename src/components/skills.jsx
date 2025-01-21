import CssIcon from "./icons/cssIcon";
import GitIcon from "./icons/gitIcon";
import HtmlIcon from "./icons/htmlIcon";
import JSIcon from "./icons/jsIcon";
import ReactIcon from "./icons/reactIcon";
import '../assets/css/skills.css';


export default function Skills() {
    return (
        <>
            <section id="skillsSection">
                <h3 id="skillsHeading">
                    Click on a skill below to explore the corresponding project
                </h3>
                <ul>
                    <li>
                        <a href="#reactHeader"><ReactIcon /> <br /> React</a>
                    </li>
                    <li>
                        <a href="#jsHeading"><JSIcon /> <br /> JavaScript</a>
                    </li>
                    <li>
                        <a href="#cssHeading"><CssIcon /> <br /> CSS</a>
                    </li>
                    <li>
                        <a href="#htmlHeading"><HtmlIcon /> <br /> HTML</a>
                    </li>
                    <li>
                        <a href="#gitHeading"><GitIcon /> <br /> Git</a>
                    </li>
                </ul>
            </section>
        </>
    )
};