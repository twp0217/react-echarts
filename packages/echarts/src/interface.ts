import { EChartsCoreProps } from '@twp0217/react-echarts-core';
import * as echarts from 'echarts';

export * from '@twp0217/react-echarts-core';

export type EChartsOption = echarts.EChartsOption;

export interface EChartsProps<O extends EChartsOption = any>
  extends Omit<EChartsCoreProps<O>, 'echarts'> {}
