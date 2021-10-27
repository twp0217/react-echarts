import React from 'react';
import ECharts, { EChartsOption, EChartsRef } from '@twp0217/react-echarts';

export default () => {
  const echartsRef = React.useRef<EChartsRef>(null);

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
    console.log('echartsInstance', echartsRef.current?.echartsInstance);
  };

  const showLoading = () => {
    echartsRef.current?.echartsInstance.showLoading();
  };

  const hideLoading = () => {
    echartsRef.current?.echartsInstance.hideLoading();
  };

  return (
    <>
      <ECharts ref={echartsRef} option={option} />
      <button onClick={() => print()}>print echartsInstance</button>
      <button style={{ marginLeft: 8 }} onClick={() => showLoading()}>
        showLoading()
      </button>
      <button style={{ marginLeft: 8 }} onClick={() => hideLoading()}>
        hideLoading()
      </button>
    </>
  );
};
