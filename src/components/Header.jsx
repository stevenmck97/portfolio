import "../styles/header.css";

const Header = () => { 
    return (
        <section className="Header">
            <nav>
            <li className="nav-item">About</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">CV</li></nav>
            
            <div className="Intro">
                <h1>Hi, I'm Steven</h1>
                <p>A passionate and aspiring software engineer. Excited about learning new technologies and improving my skills. Always open to new opportunities and exciting projects</p>
                <div className="intro-btn-group">
                    <button className="intro-btn">Reach out</button>
                    <button className="intro-btn">Github</button>
                </div>
            </div>
            </section>
    )
}

export default Header