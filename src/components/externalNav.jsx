import CvIcon from "./icons/cvIcon";
import GitHubIcon from "./icons/githubIcon";
import LinkdinIcon from "./icons/linkdinIcon";

export default function Nav() {

    return (
        <ul>
            <li>
                <a href="https://github.com/JasonBusenitz?tab=overview&from=2025-01-01&to=2025-01-10" target="_blank"><GitHubIcon /> Github</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jason-busenitz-bb94652a5/" target="_blank"><LinkdinIcon /> Linkdin</a>
            </li>
            <li>
                <a href="#" target="_blank"><CvIcon /> CV</a>
            </li>
        </ul>
    )

};