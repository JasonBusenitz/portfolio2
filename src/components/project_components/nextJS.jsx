
import img from '../../assets/images/nextJSPics/nextJS.png';
import bluryImg from '../../assets/images/nextJSPics/blurNextJS.png';


export default function NextJS() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

    const openRepo = () => {
        const url = 'https://www.itzmovietime.com';
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (

        <>
            <section className='projectSection' id='nextSection'>
                <h2 id="nextHeading">
                    Next.JS
                </h2>
                <div>
                    <a href="https://www.itzmovietime.com" target="_blank">
                        <img src={img} style={blurImg.background} loading='lazy' alt="A screenshot of Jason's Next.JS project." height="800" width="1000" />
                    </a>
                    <ul>
                        <li>
                            <button onClick={() => openRepo()}>Website</button>
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