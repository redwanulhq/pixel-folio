import { useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useElementSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const targetRef = useRef(null);

  useEffect(() => {
    const element = targetRef.current;

    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  return [targetRef, size];
};

export default useElementSize;
