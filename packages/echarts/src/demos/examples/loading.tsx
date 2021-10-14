import React from 'react';
import ECharts, { EChartsOption } from '@twp0217/react-echarts';

export default () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const onClick = () => {
    setLoading(!loading);
  };

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

  return (
    <>
      <ECharts
        option={option}
        loading={loading}
        loadingConfig={{
          opts: {
            text: '加载中...',
          },
        }}
      />
      <button onClick={onClick}>{loading ? '隐藏' : '显示'}加载动画</button>
    </>
  );
};
