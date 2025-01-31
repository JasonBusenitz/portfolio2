import img from '../../assets/images/nodePics/node.png';
import bluryImg from '../../assets/images/nodePics/blurNode.png';


export default function Node() {

    const blurImg = {
        background: {
            backgroundImage: `url(${bluryImg})`,
            backgroundSize: 'cover',
        },
    }

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
                        <img src={img} style={blurImg.background} loading='lazy' alt="A screenshot of Jason's Node project." height="800" width="1000" />
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