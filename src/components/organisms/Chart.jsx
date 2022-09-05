import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ history }) {
  const data = {
    labels: ['오답', '정답'],
    datasets: [
      {
        label: history.category_nm,
        data: [Number(history.correct_cnt), Number(history.wrong_cnt)],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default Chart;
