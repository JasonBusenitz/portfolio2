import img from '../../assets/images/htmlPics/html.png';
import bluryImg from '../../assets/images/htmlPics/blurHtml.png'

export default function Html() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

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
            <section className='projectSection' id="htmlSection">
                <h2 id="htmlHeading">
                    HTML
                </h2>
                <div>
                    <a href="https://jasonbusenitz.github.io/home_project/" target="_blank">
                        <img src={img} style={blurImg.background} loading='lazy' alt="A picture of Jason's HTML project." height="800" width="1000" />
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