

export default function React() {

    const openRepo = () => {
        const url = 'https://github.com/JasonBusenitz/portfolio2';
        const win = window.open(url, '_blank');
        window.focus();
    }

    return (
        <>
            <h2 id="reactHeader">
                React
            </h2>
            <h3>
                You are scrolling through one of my react projects right now.
            </h3>
            <ul>
                <li>
                    <button onClick={() => openRepo()}>Repo</button>
                </li>
                <li>
                    <a href="#skillsHeading">
                        <button>Back to Top</button>
                    </a>
                </li>
            </ul>
        </>
    )
}