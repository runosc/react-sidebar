import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar,Doughnut,Line,Bar } from 'react-chartjs-2';

const Egitim = () => {
  
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

  // const config = {
  //   type: 'radar',
  //   data: data,
  //   options: {
  //     elements: {
  //       line: {
  //         borderWidth: 3
  //       }
  //     }
  //   },
  // };
 
  const data2 = {
    labels: [
      'Teknik',
      'Fiziksel',
      'Zihinsel',
     
    ],
    datasets: [{
      label: 'Onur Şahin Çatal',
      data: [18, 15, 9],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Ömer Türkgeldi',
      data: [14, 13, 15],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  
  // const RadarData = {
  //   labels: ["Finger Strength", "Power", "Endurance", "Stability", "Flexability"],
  //   datasets: [
  //     {
  //       label: "March",
  //       backgroundColor: "rgba(34, 202, 236, .2)",
  //       borderColor: "rgba(34, 202, 236, 1)",
  //       pointBackgroundColor: "rgba(34, 202, 236, 1)",
  //       poingBorderColor: "#fff",
  //       pointHoverBackgroundColor: "#fff",
  //       pointHoverBorderColor: "rgba(34, 202, 236, 1)",
  //       data: [13, 10, 12, 6, 5]
  //     }
  //   ]
  // };
  // const RadarOptions = {
  //   scale: {
  //     ticks: {
  //       min: 0,
  //       max: 16,
  //       stepSize: 2,
  //       showLabelBackdrop: false,
  //       backdropColor: "rgba(203, 197, 11, 1)"
  //     },
  //     angleLines: {
  //       color: "rgba(255, 255, 255, .3)",
  //       lineWidth: 1
  //     },
  //     gridLines: {
  //       color: "rgba(255, 255, 255, .3)",
  //       circular: true
  //     }
  //   }
  // };
  // const chartRef = React.createRef();



  return (
    <div className='d-flex justify-content-center'>
         {/* <Radar data={RadarData} options={RadarOptions} /> */}
         <div className='radar_container'>
          Radar Chart
         <Radar data={data2}/>

         </div>
        
      
    </div>
  )
}

export default Egitim

