import CssIcon from "./icons/cssIcon";
import GitIcon from "./icons/gitIcon";
import HtmlIcon from "./icons/htmlIcon";
import JSIcon from "./icons/jsIcon";
import ReactIcon from "./icons/reactIcon";
import '../assets/css/skills.css';
import NodeIcon from "./icons/nodeIcon";


export default function Skills() {
    return (
        <>
            <section id="skillsSection">
                <h3 id="skillsHeading">
                    Click on a skill below to explore the corresponding project
                </h3>
                <ul>
                    <li className="transition">
                        <a href="#reactSection"><ReactIcon /></a>
                        <a href="#reactSection">React</a>
                    </li>
                    <li className="transition">
                        <a href="#jsSection"><JSIcon /></a>
                        <a href="#jsSection">JavaScript</a>
                    </li>
                    <li className="transition">
                        <a href="#cssSection"><CssIcon /></a>
                        <a href="#cssSection">CSS</a>
                    </li>
                    <li className="transition">
                        <a href="#htmlSection"><HtmlIcon /></a>
                        <a href="#htmlSection">HTML</a>
                    </li>
                    <li className="transition">
                        <a href="#gitSection"><GitIcon /></a>
                        <a href="#gitSection">Git</a>
                    </li>
                    <li className="transition">
                        <a href="#nodeSection"><NodeIcon /></a>
                        <a href="#nodeSection">Node</a>
                    </li>
                </ul>
            </section>
        </>
    )
};