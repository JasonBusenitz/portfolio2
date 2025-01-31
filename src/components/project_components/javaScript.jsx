import img from '../../assets/images/jsPics/js.png';
import bluryImg from '../../assets/images/jsPics/blurJs.png'

export default function JavaScript() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

    const openRepo = () => {
        const url = 'https://github.com/JasonBusenitz/employee-payroll-tracker';
        const win = window.open(url, '_blank');
        win.focus();
    }

    const openWebsite = () => {
        const url = 'https://jasonbusenitz.github.io/employee-payroll-tracker/';
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <>
            <section className='projectSection' id='jsSection'>
                <h2 id="jsHeading">
                    JavaScript
                </h2>
                <div>
                    <a href="https://jasonbusenitz.github.io/employee-payroll-tracker/" target="_blank">
                        <img src={img} style={blurImg.background} loading='lazy' alt="A screenshot of Jason's JavaScript project." height="800" width="1000" />
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