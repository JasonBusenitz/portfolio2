

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
            <h2>
                HTML
            </h2>
            <a src="https://jasonbusenitz.github.io/home_project/">
                <img src="src\assets\images\html.png" alt="A picture of Jason's HTML project." />
            </a>
            <ul>
                <li>
                    <button onClick={() => openRepo()}>Repo</button>
                </li>
                <li>
                    <button onClick={() => openWebsite()}>Website</button>
                </li>
            </ul>
        </>
    )
}