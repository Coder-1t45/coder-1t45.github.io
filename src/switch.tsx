import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Screens/main";
import Resume from "./Screens/resume";
import Portfolio from "./Screens/portfolio";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Resume",
        element: <Resume />,
    },
    {
        path: "/Portfolio",
        element: <Portfolio />,
    },
    {
        path:"*",
        element:(():JSX.Element=>{
            return(
                <main className="center middle">
                    
            <header>
                <h1>{document.location.pathname} <span style={{color:"red",fontWeight:400, marginRight:100}}>404</span></h1>
            </header>
            <div className="separator">
                <span style={{ fontFamily: "monospace", fontSize: 20, color: "var(--blue)" }}>Page not found</span>
            </div>
            <br />
            <br />
            <center><button className="styled" onClick={()=>{
                document.location.pathname = ""
            }}>Return Home</button></center>
            
        </main>)
        })()
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

document.title = "Itay Layzerovich";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
