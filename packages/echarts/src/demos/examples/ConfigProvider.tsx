import React from 'react';
import ECharts, {
  EChartsContextProvider,
  EChartsOption,
  EChartsTheme,
} from '@twp0217/react-echarts';
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

  const toggleTheme = (newTheme?: EChartsTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <EChartsContextProvider value={{ theme, autoResize: true }}>
        <ECharts option={option} />
        <ECharts option={option} />
      </EChartsContextProvider>
      <button onClick={() => toggleTheme()}>default</button>
      <button style={{ marginLeft: 8 }} onClick={() => toggleTheme('dark')}>
        dark
      </button>
      <button style={{ marginLeft: 8 }} onClick={() => toggleTheme(walden)}>
        walden
      </button>
    </>
  );
};
