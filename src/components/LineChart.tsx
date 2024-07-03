// import React, { useEffect, useRef, useState } from "react";
// import { Chart, registerables } from "chart.js";
// import StreamingPlugin from "chartjs-plugin-streaming";
// import { Line } from "react-chartjs-2";
// import "chartjs-adapter-luxon";
// import { ChartContainer, ChartName } from "./styles";
// import { fetchData } from "../api/fetch";

// Chart.register(...registerables, StreamingPlugin);

// type RealtimeData = {
//   voltage: number;
//   current: number;
//   [key: string]: any;
// };

// export default function LineChart() {
//   const [realtime, setRealtime] = useState<RealtimeData>({
//     current: 0,
//     voltage: 0,
//   });
//   const voltageDataRef = useRef<{ x: number; y: number }[]>([]);
//   const currentDataRef = useRef<{ x: number; y: number }[]>([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData("http://172.30.1.15:3001/apis/lastdata/");
//         setRealtime(data[0]);
//       } catch (e) {
//         console.error("Error fetching data:", e);
//       }
//     };
//     getData();

//     const intervalId = setInterval(getData, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const now = Date.now();
//     voltageDataRef.current.push({ x: now, y: realtime.voltage });
//     currentDataRef.current.push({ x: now, y: realtime.current });
//   }, [realtime]);

//   console.log("realtime voltage", realtime?.voltage);
//   console.log("realtime current", realtime?.current);

//   return (
//     <>
//       <ChartName>V Chart</ChartName>
//       <Line
//         data={{
//           datasets: [
//             {
//               label: "V",
//               backgroundColor: "rgba(255, 99, 132, 0.5)",
//               borderColor: "rgb(255, 99, 132)",
//               cubicInterpolationMode: "monotone",

//               fill: false,
//               data: voltageDataRef.current,
//             },
//           ],
//         }}
//         options={{
//           scales: {
//             x: {
//               type: "realtime",
//               realtime: {
//                 delay: 3000,
//                 onRefresh: (chart) => {
//                   chart.data.datasets.forEach((dataset) => {
//                     dataset.data.push({
//                       x: Date.now(),
//                       y: realtime.voltage,
//                     });
//                   });
//                   chart.update("quiet");
//                 },
//               },
//             },
//             y: {
//               min: 1,
//               max: 100,
//             },
//           },
//         }}
//       />
//       <ChartName>A Chart</ChartName>

//       <Line
//         data={{
//           datasets: [
//             {
//               label: "A",
//               backgroundColor: "rgba(54, 162, 235, 0.5)",
//               borderColor: "rgb(54, 162, 235)",
//               cubicInterpolationMode: "monotone",
//               fill: false,
//               data: currentDataRef.current,
//             },
//           ],
//         }}
//         options={{
//           scales: {
//             x: {
//               type: "realtime",
//               realtime: {
//                 delay: 3000,
//                 onRefresh: (chart) => {
//                   chart.data.datasets.forEach((dataset) => {
//                     dataset.data.push({
//                       x: Date.now(),
//                       y: realtime.current,
//                     });
//                   });
//                   chart.update("quiet");
//                 },
//               },
//             },
//             y: {
//               min: 1,
//               max: 100,
//             },
//           },
//         }}
//       />
//     </>
//   );
// }

import React from "react";

const LineChart = () => {
  return <div></div>;
};

export default LineChart;
