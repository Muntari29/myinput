import { IMovieItem } from './interfaces/common';

const storage = window.sessionStorage;

export const getItem = (key: string, defaultValue: {}) => {
  try {
    const storedValue = storage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setItem = (key: string, value: IMovieItem[]) => {
  storage.setItem(key, JSON.stringify(value));
};

export default {
  getItem,
  setItem,
};
