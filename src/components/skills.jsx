import CssIcon from "./icons/cssIcon";
import GitIcon from "./icons/gitIcon";
import HtmlIcon from "./icons/htmlIcon";
import JSIcon from "./icons/jsIcon";
import ReactIcon from "./icons/reactIcon";


export default function Skills() {
    return (
        <>
            <h3 id="skillsHeading">
                Click on a skill below to explore the corresponding project
            </h3>
            <ul>
                <li>
                    <a href="#reactHeader"><ReactIcon /> React</a>
                </li>
                <li>
                    <a href="#jsHeading"><JSIcon /> JavaScript</a>
                </li>
                <li>
                    <a href="#cssHeading"><CssIcon /> CSS</a>
                </li>
                <li>
                    <a href="#htmlHeading"><HtmlIcon /> HTML</a>
                </li>
                <li>
                    <a href="#gitHeading"><GitIcon /> Git</a>
                </li>
            </ul>
        </>
    )
};