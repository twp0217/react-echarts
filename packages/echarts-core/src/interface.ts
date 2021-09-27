import * as echartsCore from 'echarts/core';

type EChartsInitType = typeof echartsCore.init;
export type EChartsType = typeof echartsCore;
export type EChartsOption = echartsCore.EChartsCoreOption;
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

export interface EChartsCoreProps<O extends EChartsOption = EChartsOption> {
  echarts: any;
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

export interface EChartsRef {
  echartsInstance: EchartsInstance;
}
