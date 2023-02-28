import "../assets/css/main.css"
function Home() {
    return (
        <div className="Home" id={"wrapper"}>
            <div id="bg"></div>
            <div id="overlay"></div>
            <div id="main">
                <header className="Home-header" id={"header"}>
                    <h1>Eileen Long</h1>
                    <p>I build things</p>
                    <nav>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/eileen-long/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/gradiants93" className="icon brands fa-github"><span className="label">Github</span></a></li>
                            <li><a href="mailto:elong1993@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}
export default Home;