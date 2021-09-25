import InternalECharts from './ECharts';
import EChartsCore from './EChartsCore';
import {
  EChartsCoreProps,
  EChartsInitOpts,
  EchartsInstance,
  EChartsOption,
  EChartsProps,
  EChartsRef,
  EChartsTheme,
  EChartsLoadingConfig,
  EChartsSetOptionOpts,
} from './interface';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    EChartsProps & React.RefAttributes<EChartsRef>
  > {
  Core: typeof EChartsCore;
}

const ECharts = InternalECharts as CompoundedComponent;
ECharts.Core = EChartsCore;

export {
  EChartsCoreProps,
  EChartsProps,
  EChartsOption,
  EChartsTheme,
  EChartsInitOpts,
  EChartsSetOptionOpts,
  EChartsLoadingConfig,
  EchartsInstance,
  EChartsRef,
};
export default ECharts;
