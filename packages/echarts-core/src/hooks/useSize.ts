import React from 'react';

type Size = { width?: number; height?: number };

function useSize(target: HTMLElement): Size {
  const [size, setSize] = React.useState<Size>({
    width: target.clientWidth,
    height: target.clientHeight,
  });

  React.useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setSize({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight,
        });
      });
    });

    resizeObserver.observe(target);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);

  return size;
}

export default useSize;
