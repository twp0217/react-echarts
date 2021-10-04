---
hero:
  title: react-echarts
  desc: Apache ECharts component for React（基于 React 的 Apache ECharts 组件）
  actions:
    - text: 快速开始 →
      link: /docs
footer: Open-source MIT Licensed | Copyright © 2021-present
---

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

```tsx
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

## 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
