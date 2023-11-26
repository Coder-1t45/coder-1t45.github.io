import { useEffect, useState } from "react";
import "./portfolio.css";

function dateDiff(startDate: Date, endDate: Date): string {
    const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());

    const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diffInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diffInMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diffInMilliseconds % (60 * 1000)) / 1000);
    const milliseconds = diffInMilliseconds % 1000;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMilliseconds = milliseconds.toString().padStart(3, "0");

    return `${days} DAYS ${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}
function App() {
    const date = new Date(2024, 6, 1, 18, 0, 0, 0);
    const [curDate, SetDate] = useState<Date>(new Date());
    useEffect(() => {
        function animation() {
            requestAnimationFrame(animation);

            SetDate(new Date());
        }
        requestAnimationFrame(animation);
    }, []);
    return (
        <main className="center middle">
            <center>
                <h1 style={{ fontSize: 40, marginBottom: 0, fontWeight: 400, letterSpacing: 2 }}>THE TIME WILL COME</h1>
                <h1 style={{ fontSize: 60, marginTop: 0 }}>{dateDiff(date, curDate)}</h1>
            </center>
        </main>
    );
}

export default App;
