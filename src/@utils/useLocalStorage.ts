"use client";

import { isClient } from "./isClient";

export function useLocalStorage(key: string) {
  function getLocalStorage() {
    if (!isClient()) {
      return null;
    }

    const data = localStorage.getItem(key);
    if (data) {
      if (isJson(data)) {
        return JSON.parse(data);
      }
      // It's not possible to reject type non-conformation ):
      return data;
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setLocalStorage(value?: any) {
    if (!isClient()) {
      return null;
    }

    // Abstract equality to check null / undefined, but not falsy
    if (value == null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
  }

  return {
    getLocalStorage,
    setLocalStorage,
  };
}

export const isJson = (item: string) => {
  let value = typeof item !== "string" ? JSON.stringify(item) : item;
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return typeof value === "object" && value !== null;
};
