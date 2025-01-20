import img from '../../assets/images/git.png'

export default function Git() {
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
            <section>
                <h2 id="gitHeading">
                    Git
                </h2>
                <a href="https://jasonbusenitz.github.io/task-tracker/top.html" target="_blank">
                    <img src={img} alt="A picture of Jason's Git project." />
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
            </section>
        </>
    )

}