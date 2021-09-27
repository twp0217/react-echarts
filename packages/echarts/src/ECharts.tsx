import React from 'react';
import EChartsCore from '@twp0217/react-echarts-core';
import { EChartsProps, EChartsRef } from './interface';
import * as echarts from 'echarts';

const ECharts = React.forwardRef(
  (props: EChartsProps, ref: React.Ref<EChartsRef>) => {
    return <EChartsCore {...props} ref={ref} echarts={echarts} />;
  },
);

export default ECharts;
