import CvIcon from "./icons/cvIcon";
import GitHubIcon from "./icons/githubIcon";
import LinkdinIcon from "./icons/linkdinIcon";
import "../assets/css/externalNav.css"

export default function Nav() {

    return (
        <ul id="externalNavUl">
            <li className="transition">
                <a href="https://github.com/JasonBusenitz?tab=overview&from=2025-01-01&to=2025-01-10" target="_blank"><GitHubIcon /></a>
                <a href="https://github.com/JasonBusenitz?tab=overview&from=2025-01-01&to=2025-01-10" target="_blank">Github</a>
            </li>
            <li className="transition">
                <a href="https://www.linkedin.com/in/jason-busenitz-bb94652a5/" target="_blank"><LinkdinIcon /></a>
                <a href="https://www.linkedin.com/in/jason-busenitz-bb94652a5/" target="_blank">Linkdin</a>
            </li>
            <li className="transition">
                <a href="#" target="_blank"><CvIcon /></a>
                <a href="#" target="_blank">CV</a>
            </li>
        </ul>
    )

};