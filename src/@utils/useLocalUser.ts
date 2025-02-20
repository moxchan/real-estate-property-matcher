"use client";

import { User } from "@/@types/user";
import { isJson, useLocalStorage } from "./useLocalStorage";
import { isClient } from "./isClient";

const KEY = "realEstateHub-user";

export const getLocalDefaultUser = (): User | undefined => {
  // Yikes repeated code from ./useLocalStorage because of hook rules
  if (!isClient()) return;

  const data = localStorage.getItem(KEY);
  if (data) {
    if (isJson(data)) {
      return JSON.parse(data);
    }
    // It's not possible to reject type non-conformation ):
    return;
  }
  return;
};

export const useLocalUserStorage = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage(KEY);

  const getLocalUser = (): User | undefined => {
    return getLocalStorage();
  };

  const setLocalUser = (user: User) => {
    setLocalStorage(user);
  };

  const clearLocalUser = () => {
    setLocalStorage();
  };

  return {
    getLocalUser,
    setLocalUser,
    clearLocalUser,
  };
};
