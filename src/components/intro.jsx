import img from '../assets/images/profilePics/newProfilePic.png'
import '../assets/css/intro.css'
import Nav from './externalNav'


export default function Intro() {

    return (
        <section id='introSection'>
            <div id='profilePic'>
                <img src={img} loading='lazy' alt="Handsome man in a white dress shirt" width="400" height="100" />
            </div>
            <div id='info'>
                <h1>
                    Jason Busenitz
                </h1>
                <h2>
                    Front End Developer (React)
                </h2>
                <h3>
                    &#127759; Tecumseh, KS
                </h3>
                <Nav />
            </div>
        </section>
    )
}