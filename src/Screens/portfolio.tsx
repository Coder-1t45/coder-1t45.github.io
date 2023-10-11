import "./portfolio.css";

function App() {
    return (
        <main className="center middle">
            <header>
                <h1>Do <span style={{fontFamily:"monospace"}} >I</span> need Portfolio?</h1>
            </header>
            <div className="separator">
                <span style={{ fontFamily: "monospace", fontSize: 20, color: "var(--blue)" }}>What</span>
            </div>
            <article>
                <p>"A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education,
                training, and experiences. It provides insight into your personality and work ethic."</p>
                <p data-a onClick={()=>{document.location.href = "https://clarke.edu/academics/careers-internships/student-checklist/resume-writing-and-portfolios/what-is-a-portfolio/"}}>Clarke University</p>
            </article>
           <center> <h3>If I will ever need to Write a Portfolio,<br/> this Will be the Site.</h3></center>
        </main>
    );
}

export default App;
