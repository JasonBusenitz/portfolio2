

export default function React() {

    const openRepo = () => {
        const url = 'https://github.com/JasonBusenitz/portfolio2';
        const win = window.open(url, '_blank');
        window.focus();
    }

    return (
        <>
            <h2>
                React
            </h2>
            <h3>
                You are scrolling through one of my react projects right now.
            </h3>
            <button onClick={() => openRepo()}>Repo</button>
        </>
    )
}