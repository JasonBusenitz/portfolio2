import img from '../../assets/images/node.png';

export default function Node() {

    const openRepo = () => {
        const url = 'https://github.com/JasonBusenitz/readme-generator';
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (

        <>
            <section className='projectSection' id='nodeSection'>
                <h2 id="nodeHeading">
                    Node
                </h2>
                <div>
                    <a href="https://github.com/JasonBusenitz/readme-generator" target="_blank">
                        <img src={img} alt="A screenshot of Jason's Node project." height="800" width="1000" />
                    </a>
                    <ul>
                        <li>
                            <button onClick={() => openRepo()}>Repo</button>
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