import * as echartsCore from 'echarts/core';
import React from 'react';
import useSize from './hooks/useSize';
import { EChartsCoreProps, EchartsInstance, EChartsRef } from './interface';

const EChartsCore = React.forwardRef(
  (props: EChartsCoreProps, ref: React.Ref<EChartsRef>) => {
    const {
      echarts,
      className,
      style,
      option,
      theme,
      initOpts,
      setOptionOpts,
      autoResize,
      loading,
      loadingConfig,
      onChartInit,
      onEvents,
    } = props;

    const echartsContainerRef = React.useRef<HTMLDivElement>(null);
    const echartsInstanceRef = React.useRef<EchartsInstance | null>(null);

    const { width, height } = useSize(
      echartsContainerRef.current || document.body,
    );

    React.useImperativeHandle(ref, () => ({
      get echartsInstance(): EchartsInstance {
        return echartsInstanceRef.current!;
      },
    }));

    /**
     * 创建ECharts实例
     */
    const initECharts = (): void => {
      if (echartsContainerRef.current && echarts) {
        echartsInstanceRef.current = echarts.init(
          echartsContainerRef.current,
          theme,
          initOpts,
        ) as EchartsInstance;
        if (onChartInit) {
          onChartInit(echartsInstanceRef.current);
        }
        buildEvents();
        setOption();
      }
    };

    /**
     * 销毁ECharts实例
     */
    const disposeECharts = (): void => {
      if (echartsInstanceRef.current) {
        echartsInstanceRef.current.dispose();
        echartsInstanceRef.current = null;
      }
    };

    /**
     * 绑定事件
     */
    const buildEvents = (): void => {
      Object.entries(onEvents || {}).forEach(([eventName, handler]) => {
        if (echartsInstanceRef.current) {
          echartsInstanceRef.current.on(eventName, handler);
        }
      });
    };

    /**
     * 设置图表配置项
     */
    const setOption = (): void => {
      if (echartsInstanceRef.current && option) {
        echartsInstanceRef.current.setOption(option, setOptionOpts);
      }
    };

    /**
     * 调整大小
     */
    const resize = (): void => {
      if (autoResize && echartsInstanceRef.current) {
        echartsInstanceRef.current.resize();
      }
    };

    /**
     * 切换Loading
     */
    const toggleLoading = (): void => {
      if (echartsInstanceRef.current) {
        if (loading) {
          echartsInstanceRef.current.showLoading(
            loadingConfig?.type,
            loadingConfig?.opts,
          );
        } else {
          echartsInstanceRef.current.hideLoading();
        }
      }
    };

    React.useEffect(() => {
      initECharts();
      return () => {
        disposeECharts();
      };
    }, [echartsContainerRef, theme, initOpts]);

    React.useEffect(() => {
      setOption();
    }, [option]);

    React.useLayoutEffect(() => {
      resize();
    }, [width, height]);

    React.useEffect(() => {
      toggleLoading();
    }, [loading]);

    return (
      <div ref={echartsContainerRef} className={className} style={style} />
    );
  },
);

EChartsCore.defaultProps = {
  echarts: echartsCore,
  autoResize: false,
  loading: false,
};

export default EChartsCore;
