import img from '../../assets/images/html.png';

export default function Html() {
    const openRepo = () => {
        const url = "https://github.com/JasonBusenitz/home_project";
        const win = window.open(url, '_blank');
        win.focus();
    }

    const openWebsite = () => {
        const url = "https://jasonbusenitz.github.io/home_project/";
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <>
            <h2 id="htmlHeading">
                HTML
            </h2>
            <a href="https://jasonbusenitz.github.io/home_project/" target="_blank">
                <img src={img} alt="A picture of Jason's HTML project." />
            </a>
            <ul>
                <li>
                    <button onClick={() => openRepo()}>Repo</button>
                </li>
                <li>
                    <button onClick={() => openWebsite()}>Website</button>
                </li>
                <li>
                    <a href="#skillsHeading">
                        <button>Back to Top</button>
                    </a>
                </li>
            </ul>
        </>
    )
}