import img from '../../assets/images/gitPics/git.png'
import bluryImg from '../../assets/images/gitPics/blurGit.png'


export default function Git() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

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
            <section className='projectSection' id='gitSection'>
                <h2 id="gitHeading">
                    Git
                </h2>
                <div>
                    <a href="https://jasonbusenitz.github.io/task-tracker/top.html" target="_blank">
                        <img src={img} style={blurImg.background} loading='lazy' alt="A picture of Jason's Git project." height="800" width="1000" />
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