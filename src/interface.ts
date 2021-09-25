import * as echartsCore from 'echarts/core';
import * as echarts from 'echarts';

type EChartsInitType = typeof echartsCore.init;
export type ECharts = typeof echartsCore | typeof echarts;
export type EChartsCoreOption = echartsCore.EChartsCoreOption;
export type EChartsOption = echarts.EChartsOption;
export type EChartsTheme = Parameters<EChartsInitType>['1'];
export type EChartsInitOpts = Parameters<EChartsInitType>['2'];
export type EchartsInstance = echartsCore.EChartsType;

export interface EChartsSetOptionOpts {
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
  replaceMerge?: string | string[];
}

export interface EChartsLoadingConfig {
  type?: 'default';
  opts?: object;
}

export interface EChartsCoreProps<
  O extends EChartsCoreOption = EChartsCoreOption,
> {
  echarts?: ECharts;
  className?: string;
  style?: React.CSSProperties;
  option?: O;
  theme?: EChartsTheme;
  initOpts?: EChartsInitOpts;
  setOptionOpts?: EChartsSetOptionOpts;
  autoResize?: boolean;
  loading?: boolean;
  loadingConfig?: EChartsLoadingConfig;
  onChartInit?: (echartsInstance: EchartsInstance) => void;
  onEvents?: { [eventName: string]: (event: any) => void };
}

export interface EChartsProps<O extends EChartsOption = any>
  extends Omit<EChartsCoreProps<O>, 'echarts'> {}

export interface EChartsRef {
  echartsInstance: EchartsInstance;
}
