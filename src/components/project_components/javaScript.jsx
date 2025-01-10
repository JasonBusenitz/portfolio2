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
                <img src="#" alt="A screenshot of Jason's JavaScript project." />
            </a>
            <ul>
                <li>
                    <button type="button" onClick={() => openRepo()}>REPO</button>
                </li>
                <li>
                    <button type="button" onClick={() => openWebsite()}>SITE</button>
                </li>
            </ul>
        </>
    )
}