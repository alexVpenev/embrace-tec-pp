import React, { useState, useEffect, useRef } from "react";
import LineChart from "../components/LineChart";
import { UserData } from "../Data";
import "./ChartPage.css";

function ChartPage() {
  const [scrollSnapType, setScrollSnapType] = useState("none");
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      // Set scroll-snap-type dynamically based on the height of the container
      setScrollSnapType(
        mainRef.current.clientHeight > window.innerHeight
          ? "y mandatory"
          : "none"
      );
    }
  }, []);

  const userData = {
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        labels: UserData.map((data) => data.kcal),
        data: UserData.map((data) => data.weight),
        borderColor: "red",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "black",
        segment: {
          borderColor: (ctx) =>
            ctx.p0.parsed.y < ctx.p1.parsed.y ? "red" : "green",
        },
      },
    ],
  };

  return (
    <main className="main" ref={mainRef} style={{ scrollSnapType }}>
      <div className="master">
        <LineChart chartData={userData} />
      </div>
    </main>
  );
}

export default ChartPage;
