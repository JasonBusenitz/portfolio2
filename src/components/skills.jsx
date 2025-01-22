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
                    <li className="transition">
                        <a href="#reactHeader"><ReactIcon /></a>
                        <a href="#reactHeader">React</a>
                    </li>
                    <li className="transition">
                        <a href="#jsHeading"><JSIcon /></a>
                        <a href="#jsHeading">JavaScript</a>
                    </li>
                    <li className="transition">
                        <a href="#cssHeading"><CssIcon /></a>
                        <a href="#cssHeading">CSS</a>
                    </li>
                    <li className="transition">
                        <a href="#htmlHeading"><HtmlIcon /></a>
                        <a href="#htmlHeading">HTML</a>
                    </li>
                    <li className="transition">
                        <a href="#gitHeading"><GitIcon /></a>
                        <a href="#gitHeading">Git</a>
                    </li>
                </ul>
            </section>
        </>
    )
};