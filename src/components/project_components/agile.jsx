

export default function Agile() {
    const openRepo = () => {
        const url = "https://github.com/JasonBusenitz/task-tracker";
        const win = window.open(url, '_blank');
        win.focus();
    }

    const openWebsite = () => {
        const url = "https://jasonbusenitz.github.io/task-tracker/top.html";
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <>
            <h2>
                Agile
            </h2>
            <a href="https://jasonbusenitz.github.io/task-tracker/top.html" target="_blank">
                <img src="src\assets\images\agile.png" alt="A picture of Jason's Agile project." />
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