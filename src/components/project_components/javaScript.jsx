import img from '../../assets/images/js.png';

export default function JavaScript() {
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
            <section className='projectSection'>
                <h2 id="jsHeading">
                    JavaScript
                </h2>
                <div>
                    <a href="https://jasonbusenitz.github.io/employee-payroll-tracker/" target="_blank">
                        <img src={img} alt="A screenshot of Jason's JavaScript project." height="800" width="1000" />
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
                </div>
            </section>
        </>
    )
}