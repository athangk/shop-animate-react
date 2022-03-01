import { useEffect, useRef } from "react";

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    console.log("whats the value ?", value, ref.current);
    ref.current = value;
  });
  return ref.current;
};
