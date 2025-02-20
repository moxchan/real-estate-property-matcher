import { useAppStore } from "@/stores/useAppStore";
import { isJson, useLocalStorage } from "./useLocalStorage";
import { isClient } from "./isClient";
import { TrackedItem } from "@/@types/user";

const KEY = "realEstateHub-recentItems";

export const getLocalRecentItems = () => {
  // Yikes repeated code from ./useLocalStorage because of hook rules
  if (!isClient()) return;

  const data = localStorage.getItem(KEY);
  if (data) {
    if (isJson(data)) {
      return JSON.parse(data).slice(0, 3);
    }
    // It's not possible to reject type non-conformation ):
    return [];
  }
  return [];
};

export const useRecentItems = () => {
  const { recentItems, setRecentItems } = useAppStore();
  const { setLocalStorage } = useLocalStorage(KEY);

  const addRecentItem = (item: TrackedItem): void => {
    const currFavs = recentItems;

    if (!currFavs.map((v) => v.id).includes(item.id)) {
      currFavs.unshift(item);

      setRecentItems(currFavs.slice(0, 3));
      setLocalStorage(currFavs.slice(0, 3));
    } else {
      currFavs.filter((v) => v.id !== item.id).unshift(item);
      setRecentItems(currFavs.slice(0, 3));
    }
  };

  const removeRecentItem = (item: TrackedItem): void => {
    const currFavs = recentItems;

    if (currFavs.includes(item)) {
      currFavs.splice(currFavs.indexOf(item), 1);

      setRecentItems(currFavs.slice(0, 3));
      setLocalStorage(currFavs.slice(0, 3));
    }
  };

  return {
    addRecentItem,
    removeRecentItem,
  };
};
