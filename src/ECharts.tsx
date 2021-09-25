import React from 'react';
import EChartsCore from './EChartsCore';
import { EChartsProps, EChartsRef } from './interface';
import * as echarts from 'echarts';

const ECharts = React.forwardRef(
  (props: EChartsProps, ref: React.Ref<EChartsRef>) => {
    return <EChartsCore {...props} ref={ref} echarts={echarts} />;
  },
);

export default ECharts;
