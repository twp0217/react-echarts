import * as echarts from 'echarts';

type EChartsInitType = typeof echarts.init;
export type EChartsType = typeof echarts;
export type EChartsCoreOption = echarts.EChartsCoreOption;
export type EChartsOption = echarts.EChartsOption;
export type EChartsTheme = Parameters<EChartsInitType>['1'];
export type EChartsInitOpts = Parameters<EChartsInitType>['2'];
export type EchartsInstance = echarts.EChartsType;

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

export interface EChartsCoreProps<O extends EChartsCoreOption = EChartsOption> {
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
  group?: string;
  onChartInit?: (echartsInstance: EchartsInstance) => void;
  onEvents?: { [eventName: string]: (event: any) => void };
}

export interface EChartsRef {
  echartsInstance: EchartsInstance;
}
