import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

type gameCase = {
    name: string;
    purl: string;
    tech: {
        javascript: boolean;
        typescript: boolean;
        react: boolean;
        peerjs: boolean;
        html5: boolean;
        css3: boolean;
        threejs: boolean;
    };
    play: string;
    gallery?: string;
};

function Home() {
    return (
        <>
          <center>  <header>
                <h1>
                    <p style={{ margin: 0, fontSize: 20, display: "block" }}>Welcome, to</p>Coder-1t45
                </h1>
                <img
                    src="https://img.shields.io/badge/-PortFolio-blue?style=for-the-badge"
                    alt=""
                    onClick={() => {
                        document.location.href = "/Coder-1t45/portfolio";
                    }}
                />
            </header>
            
                <div className="games">
                    {(
                        [
                            {
                                name: "MONOPOLY.IO",
                                purl: "https://cdn.discordapp.com/attachments/1005211638191890532/1149815407381856308/image.png",
                                play: "https://coder-1t45.github.io/Monopoly/",
                                gallery: "https://coder-1t45.github.io/Monopoly/Gallery/",
                                tech: {
                                    css3: true,
                                    html5: true,
                                    javascript: true,
                                    peerjs: true,
                                    react: true,
                                    typescript: true,
                                },
                            },
                            {
                                name: "Trivia.IO",
                                play: "https://coder-1t45.github.io/Trivia.IO/",
                                purl: "",
                                tech: {
                                    css3: true,
                                    html5: true,
                                    javascript: true,
                                    peerjs: true,
                                    react: true,
                                    typescript: true,
                                },
                            },
                            // {
                            //     name: "RACE.IO",
                            //     purl: "",
                            //     play: "https://coder-1t45.github.io/Monopoly/",
                            //     gallery: "https://coder-1t45.github.io/Monopoly/Gallery/",
                            //     tech: {
                            //         css3: true,
                            //         html5: true,
                            //         javascript: true,
                            //         peerjs: true,
                            //         react: true,
                            //         typescript: true,
                            //         threejs: true,
                            //     },
                            // },
                        ] as gameCase[]
                    ).map((v) => (
                        <>
                            <div className="game-display">
                                <img style={{ backgroundImage: `url(${v.purl})` }} alt="" />
                                <div className="tags">
                                    {v.tech.css3 ? (
                                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.html5 ? (
                                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.javascript ? (
                                        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.typescript ? (
                                        <img src="https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.threejs ? (
                                        <img src="https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.react ? (
                                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                                    ) : (
                                        <></>
                                    )}
                                    {v.tech.peerjs ? <img src="https://img.shields.io/badge/PEERJS-forestgreen?style=for-the-badge" /> : <></>}
                                </div>
                                <div>
                                    <header>
                                        <p>{v.name}</p>{" "}
                                        <div style={{ gap: "10px", display: "flex" }}>
                                            {v.gallery ? (
                                                <img
                                                    onClick={() => {
                                                        document.location.href = v.gallery ?? "";
                                                    }}
                                                    src="https://img.shields.io/badge/GALLERY-red?style=for-the-badge"
                                                />
                                            ) : (
                                                <></>
                                            )}{" "}
                                            <img
                                                onClick={() => {
                                                    document.location.href = v.play;
                                                }}
                                                src="https://img.shields.io/badge/PLAY-white?style=for-the-badge"
                                            />
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </center>
        </>
    );
}
function Portfolio() {
    return (
        <main className="portfolio">
            <h3>hello visitors</h3>
            <p>portfolio site is under development</p>
            <p>the owner of this site is dealing with </p> <p>collage</p>
            <img className="burning" src="https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-superJumbo-v3.jpg" alt="" />
            <img
                src="https://img.shields.io/badge/-goback-blue?style=for-the-badge"
                alt=""
                onClick={() => {
                    document.location.href = "/Coder-1t45/";
                }}
            />
        </main>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Coder-1t45/" element={<Home />} />
                <Route path="/Coder-1t45/portfolio" element={<Portfolio />} />
                {/* Add a catch-all route for 404 redirects */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
