import img from '../../assets/images/cssPics/css.png';
import bluryImg from '../../assets/images/cssPics/blurCss.png'

export default function Css() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

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
            <section className='projectSection' id='cssSection'>
                <h2 id="cssHeading">
                    CSS
                </h2>
                <div>
                    <a href="https://jasonbusenitz.github.io/code-refactor/" target="_blank">
                        <img src={img} style={blurImg.background} loading='lazy' alt="A picture of Jason's CSS project." height="800" width="1000" />
                    </a>
                    <ul>
                        <li>
                            <button onClick={() => openRepo()}>Repo</button>
                        </li>
                        <li>
                            <button onClick={() => openWebsite()}>Website</button>
                        </li>
                        <li>
                            <a href="#skillsSection">
                                <button>Back to Top</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}