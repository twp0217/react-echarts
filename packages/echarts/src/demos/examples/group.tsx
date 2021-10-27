import React from 'react';
import ECharts, { EChartsOption, EChartsRef } from '@twp0217/react-echarts';
import { connect } from 'echarts';

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

  const echartsRef1 = React.useRef<EChartsRef>(null);
  const echartsRef2 = React.useRef<EChartsRef>(null);

  /**
   * 方法1
   * 设置每个实例的group id
   * 关联group id
   */
  React.useEffect(() => {
    connect('group');
  }, []);

  /**
   * 方法2
   * 直接传入需要联动的实例数组
   */
  React.useEffect(() => {
    if (echartsRef1.current && echartsRef2.current) {
      connect([
        echartsRef1.current.echartsInstance,
        echartsRef2.current.echartsInstance,
      ]);
    }
  }, [echartsRef1, echartsRef2]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <ECharts option={option} group="group" style={{ width: '50%' }} />
        <ECharts option={option} group="group" style={{ width: '50%' }} />
      </div>
      <div style={{ display: 'flex' }}>
        <ECharts ref={echartsRef1} option={option} style={{ width: '50%' }} />
        <ECharts ref={echartsRef2} option={option} style={{ width: '50%' }} />
      </div>
    </>
  );
};
