

export default function Css() {

    const openRepo = () => {
        const url = "https://github.com/JasonBusenitz/code-refactor";
        const win = window.open(url, '_blank');
        win.focus();
    }

    const openWebsite = () => {
        const url = "https://jasonbusenitz.github.io/code-refactor/";
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <>
            <h2 id="cssHeading">
                CSS
            </h2>
            <a href="https://jasonbusenitz.github.io/code-refactor/" target="_blank">
                <img src="src\assets\images\css.png" alt="A picture of Jason's CSS project." />
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