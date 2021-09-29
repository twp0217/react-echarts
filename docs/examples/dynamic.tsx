import React from 'react';
import ECharts, { EChartsOption } from '@twp0217/react-echarts';

export default () => {
  const [option, setOption] = React.useState<EChartsOption>();

  interface DataItem {
    name: string;
    value: [string, number];
  }

  function randomData(): DataItem {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value),
      ],
    };
  }

  let data: DataItem[] = [];
  let now = new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  const getOption = (data: DataItem[]): EChartsOption => {
    return {
      title: {
        text: 'Dynamic Data & Time Axis',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: data,
        },
      ],
    };
  };

  React.useEffect(() => {
    setOption(getOption(data));
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      setOption(getOption(data));
    }, 1000);
  }, []);

  return <ECharts option={option} style={{ height: 400 }} />;
};
