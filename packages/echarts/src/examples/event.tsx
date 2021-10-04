import React from 'react';
import ECharts, {
  EChartsOption,
  EchartsInstance,
} from '@twp0217/react-echarts';

export default () => {
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

  const onChartInit = (echartsInstance: EchartsInstance) => {
    console.log('onChartInit', echartsInstance);
  };

  return (
    <ECharts
      option={option}
      style={{ height: 400 }}
      onChartInit={onChartInit}
      onEvents={{
        click: (event: any) => {
          console.log('click', event);
        },
        legendselectchanged: (event: any) => {
          console.log('legendselectchanged', event);
        },
      }}
    />
  );
};
