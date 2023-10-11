import "./index.css";
function Game({
    title,
    color,
    src,
    link,
    children,
    style,
}: {
    color?: string;
    title?: string;
    src?: string;
    link?: string;
    children?: React.ReactElement<any, any>[] | React.ReactElement<any, any>;
    style?: React.CSSProperties;
}) {
    return (
        <div
            style={{ ...style, backgroundColor: color }}
            onClick={() => {
                if (link !== undefined) document.location.href = link;
            }}
            className="game"
        >
            <img src={src} alt="" />
            <p className="center"> {children ?? title}</p>
        </div>
    );
}

function App() {
    return (
        <>
            <main className="center middle">
                <header>
                    <h1>Itay Layzerovich</h1>
                    <h4 onClick={()=>{
                        document.location.href = "/Resume"
                    }}>resume</h4>
                    <hr />
                    <h4 onClick={()=>{
                        document.location.href = "/Portfolio"
                    }}>portfolio</h4>
                </header>
                <div className="separator">
                    <span style={{ fontFamily: "monospace", fontSize: 20, color: "var(--blue)" }}>IO Games</span>
                </div>
                <div className="games">
                    <Game  style={{border:"2px solid green", boxSizing:"border-box"}} color="#10732a" link="https://coder-1t45.github.io/Monopoly/">
                        <span style={{ fontFamily: "Josefin Sans", fontWeight: 500 }}>MONOPOLY</span>
                    </Game>
                    <Game color="#0f0f0f" link="https://coder-1t45.github.io/Trivia.IO/">
                        <p style={{ translate: "0px -2px", scale: "1.2" }}>
                            <span style={{ color: "#ff5252", fontWeight: 500, fontFamily: "system-ui" }}>t</span>
                            <span style={{ color: "#3c8cfd", fontWeight: 500, fontFamily: "system-ui" }}>r</span>
                            <span style={{ color: "green", fontWeight: 500, fontFamily: "system-ui" }}>ι</span>
                            <span style={{ color: "#fff", fontWeight: 500, fontFamily: "system-ui" }}>ν</span>
                            <span style={{ color: "#ff0", fontWeight: 500, fontFamily: "system-ui" }}>ι</span>
                            <span style={{ color: "gold", fontWeight: 500, fontFamily: "system-ui" }}>α</span>
                        </p>
                    </Game>
                    <Game color="whitesmoke" link="https://coder-1t45.github.io/Donald/">
                        <p style={{ fontFamily: "monospace", fontWeight: 900, scale: "1.2" }} className="donald">
                            Donald
                        </p>
                    </Game>
                </div>
            </main>
            <footer>
                <h4 onClick={()=>{document.location.href="https://github.com/Coder-1t45"}}>@coder-1t45 3:12</h4>
            </footer>
        </>
    );
}

export default App;
