import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export enum LocalStorageKey {
  apex = 'apex.killfeed',
}

export const getLocalStorageItem = <T,>(key: string | LocalStorageKey) => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const setLocalStorageItem = <T,>(key: string | LocalStorageKey, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const useLocalStorage = <T,>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(getLocalStorageItem(key) ?? initialValue);

  useEffect(() => {
    setLocalStorageItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
