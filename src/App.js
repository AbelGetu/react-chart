import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BarChart from './Components/BarChart';
import PieChart from './Components/PieChart';
import LineChart from './Components/LineChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const  App = () => {

  return (
    <div>
      {/* <BarChart /> */}
      {/* <PieChart /> */}
      <LineChart />
    </div>
  )
}

export default App
