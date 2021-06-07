import { ChartWrapper, Charts, Name, Info } from "../styles";
import React, { useEffect, useState } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

/* combined chart */

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

function Combined() {
  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div className="header">
        <h1 className="title">Crazy Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Crazy.js"
          >
            Github Source
          </a>
        </div>
      </div> */}
      <Bar
        data={data}
        width={1000}
        height={500}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
}

/* pie chart */

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function _Pie() {
  return (
    <>
      {/* <div className='header'>
      <h1 className='title'>Pie Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js'
        >
          Github Source
        </a>
      </div>
    </div> */}
      <Pie data={data} options={{ maintainAspectRatio: false }} />
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </>
  );
}
export default function Chartjs() {
  return (
    <ChartWrapper>
      <Name>| chartjs</Name>
      <Charts>
        <div style={{ width: 600, height: 300 }}>
          <Combined />
        </div>
        <div style={{ width: 600, height: 300, marginTop: -350 }}>
          <_Pie />
        </div>
      </Charts>
      <Info>
        <div>apple is sweet</div>
        <div>mint also sweet</div>
      </Info>
    </ChartWrapper>
  );
}
