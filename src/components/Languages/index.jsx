import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import TitleBlock from "../SummaryBlocks/TitleBlock";
import './style.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const datasets = [{
  label: '# of Votes',
  backgroundColor: [
    'rgba(0,255,14,0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgb(0,44,255, 0.8)',
  ],
  borderColor: [
    'rgba(0,255,14, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgb(0,44,255, 1)',
  ],
  borderWidth: 1,
}];

const Languages = ({title, percents}) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLabels([]);
    setData([]);
    Object.entries(percents).map(([key, value]) => {
      setLabels(i => [...i, key + ` ${value}%`]);
      setData(i => [...i, value]);
    });
  }, [percents]);

  return (
    <TitleBlock title={title} classN='m-0'>
      <div className='wrapper-language'>
        <Doughnut data={{labels, datasets: [{...datasets[0], data}]}}/>
      </div>
    </TitleBlock>
  );
}

export default Languages;
