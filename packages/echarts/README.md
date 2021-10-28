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

  return <ECharts option={option} />;
};
```

## API

### EChartsProps

> 参考[`EChartsCoreProps`](https://github.com/twp0217/react-echarts/tree/main/packages/echarts-core#api)，差异 API 如下：

| 名称        | 说明             | 类型        | 默认值 |
| ----------- | ---------------- | ----------- | ------ |
| ~~echarts~~ | ~~echarts 模块~~ | ~~ECharts~~ | ~~-~~  |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
