"use client";

import { useAppStore } from "@/stores/useAppStore";
import { useLocalUserStorage } from "./useLocalUser";
import { TrackedItem } from "@/@types/user";

export const useSaveItem = () => {
  const { user, setUser } = useAppStore();
  const { getLocalUser, setLocalUser } = useLocalUserStorage();

  const toggleSave = (item: TrackedItem): void => {
    const currSaved = getLocalUser()?.savedItems;

    if (!user || !currSaved) return;

    if (currSaved.map((v) => v.id).includes(item.id)) {
      currSaved.splice(currSaved.indexOf(item), 1);
    } else {
      currSaved.push(item);
    }
    const newUser = {
      ...user,
      savedItems: currSaved,
    };

    setUser(newUser);
    setLocalUser(newUser);
  };
  const addSaved = (item: TrackedItem): void => {
    const currSaved = user?.savedItems;
    if (!user || !currSaved) return;

    if (!currSaved?.map((v) => v.id).includes(item.id)) {
      currSaved.push(item);
      const newUser = {
        ...user,
        savedItems: currSaved,
      };
      setUser(newUser);
      setLocalUser(newUser);
    }
  };
  const removeSaved = (item: TrackedItem): void => {
    const currSaved = user?.savedItems;
    if (!user || !currSaved) return;

    if (currSaved?.map((v) => v.id).includes(item.id)) {
      currSaved.splice(currSaved.indexOf(item), 1);
      const newUser = {
        ...user,
        savedItems: currSaved,
      };
      setUser(newUser);
      setLocalUser(newUser);
    }
  };

  return {
    toggleSave,
    addSaved,
    removeSaved,
  };
};
