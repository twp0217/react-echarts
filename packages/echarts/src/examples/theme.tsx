import React from 'react';
import ECharts, { EChartsOption, EChartsTheme } from '@twp0217/react-echarts';
import walden from './walden.json';
import 'echarts/theme/dark';

export default () => {
  const [theme, setTheme] = React.useState<EChartsTheme>();

  const option: EChartsOption = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  const toggleTheme = (theme?: EChartsTheme) => {
    setTheme(theme);
  };

  return (
    <>
      <ECharts option={option} theme={theme} style={{ height: 400 }} />
      <button onClick={() => toggleTheme()}>default</button>
      <button onClick={() => toggleTheme('dark')}>dark</button>
      <button onClick={() => toggleTheme(walden)}>walden</button>
    </>
  );
};
