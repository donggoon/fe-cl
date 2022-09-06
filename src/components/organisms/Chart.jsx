import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ history }) {
  const data = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: history.category_nm,
        data: [Number(history.correct_cnt), Number(history.wrong_cnt)],
        backgroundColor: ['rgb(79 70 229)', 'rgb(225 29 72)'],
        color: ['rgb(79 70 229)', 'rgb(225 29 72)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default Chart;
