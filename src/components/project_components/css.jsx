import img from '../../assets/images/css.png';

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
            <section>
                <h2 id="cssHeading">
                    CSS
                </h2>
                <a href="https://jasonbusenitz.github.io/code-refactor/" target="_blank">
                    <img src={img} alt="A picture of Jason's CSS project." height="900" width="400" />
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