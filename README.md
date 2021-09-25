# react-echarts

Apache ECharts component for React（基于 React 的 Apache ECharts 组件）

## 安装

```bash
npm install echarts @twp0217/react-echarts --save
```

## 使用

```typescript
import React from 'react';
import ECharts, { EChartsOption } from '@twp0217/react-echarts';

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

  return <ECharts option={option} style={{ height: 400 }} />;
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

### EChartsProps

> 参考`EChartsCoreProps`，差异 API 如下：

| 名称        | 说明               | 类型          | 默认值 |
| ----------- | ------------------ | ------------- | ------ |
| ~~echarts~~ | ~~echarts 模块~~   | ~~ECharts~~   | ~~-~~  |
| option      | 图表的配置项和数据 | EChartsOption | -      |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
