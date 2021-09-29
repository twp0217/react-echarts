# react-echarts-core

> **按需引入 ECharts 图表和组件**

Apache ECharts component for React（基于 React 的 Apache ECharts 组件）

## 安装

```bash
npm install echarts @twp0217/react-echarts-core --save
```

## 使用

```typescript
import React from 'react';
import EChartsCore, { EChartsOption } from '@twp0217/react-echarts-core';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

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

  return (
    <EChartsCore option={option} style={{ height: 400 }} echarts={echarts} />
  );
};
```

## API

### EChartsCoreProps

| 名称          | 说明                                                                                               | 类型                                          | 默认值  |
| ------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------- |
| echarts       | echarts 模块                                                                                       | ECharts                                       | -       |
| className     | 类名                                                                                               | string                                        | -       |
| style         | 样式                                                                                               | React.CSSProperties                           | -       |
| option        | 图表的配置项和数据                                                                                 | EChartsCoreOption                             | -       |
| theme         | [应用的主题](https://echarts.apache.org/zh/api.html#echarts.init)                                  | EChartsTheme                                  | -       |
| initOpts      | [初始化附加参数](https://echarts.apache.org/zh/api.html#echarts.init)                              | EChartsInitOpts                               | -       |
| setOptionOpts | [设置图表的配置项和数据附加参数](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) | EChartsSetOptionOpts                          | -       |
| autoResize    | 自适应图表                                                                                         | boolean                                       | `false` |
| loading       | 是否显示加载动画                                                                                   | boolean                                       | -       |
| loadingConfig | [加载动画配置](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)                 | EChartsLoadingConfig                          | -       |
| onChartInit   | 图表初始化时的回调                                                                                 | (echartsInstance: EchartsInstance) => void    | -       |
| onEvents      | [图表事件](https://echarts.apache.org/zh/api.html#events)                                          | { [eventName: string]: (event: any) => void } | -       |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
