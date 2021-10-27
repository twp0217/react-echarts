import { EChartsCoreProps, EChartsOption } from '@twp0217/react-echarts-core';

export * from '@twp0217/react-echarts-core';

export interface EChartsProps
  extends Omit<EChartsCoreProps<EChartsOption | any>, 'echarts'> {}
