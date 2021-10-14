import React from 'react';
import ECharts, { EChartsOption, EChartsRef } from '@twp0217/react-echarts';

export default () => {
  const echartsRef = React.useRef<EChartsRef>();

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

  const print = () => {
    console.log('echartsInstance', echartsRef.current.echartsInstance);
  };

  const callMethod = (method: string) => {
    echartsRef.current.echartsInstance[method]();
  };

  return (
    <>
      <ECharts ref={echartsRef} option={option} style={{ height: 400 }} />
      <button onClick={() => print()}>打印echartsInstance</button>
      <button onClick={() => callMethod('showLoading')}>showLoading()</button>
      <button onClick={() => callMethod('hideLoading')}>hideLoading()</button>
    </>
  );
};
