

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
            <a href="https://jasonbusenitz.github.io/employee-payroll-tracker/" target="_blank">
                <img src="src\assets\images\js.png" alt="A screenshot of Jason's JavaScript project." />
            </a>
            <ul>
                <li>
                    <button onClick={() => openRepo()}>Repo</button>
                </li>
                <li>
                    <button onClick={() => openWebsite()}>Website</button>
                </li>
            </ul>
        </>
    )
}