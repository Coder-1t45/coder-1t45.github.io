import "./resume.css";

function App() {

    return (
        <div className="resume">
            <div className="file">
            <img src="Resume.png" alt="" onClick={()=>{
                document.location.href = "Resume.pdf"
            }} />
            </div>
        </div>
    );
}

export default App;
