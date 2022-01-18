import { useEffect, useState } from "react";

const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    if (isFalsy(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDeounceValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDeounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initial: T[]) => {
  const [param, setParam] = useState(initial);

  return {
    param,
    setParam,
    add: (item: T) => setParam([...param, item]),
    clear: () => setParam([]),
    removeIndex: (index: number) => {
      const copy = [...param];
      copy.splice(index, 1);
      setParam([...copy]);
    },
  };
};
