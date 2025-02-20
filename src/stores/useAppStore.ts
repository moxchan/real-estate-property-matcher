import { TrackedItem } from "@/@types/user";
import { getLocalRecentItems } from "@/@utils/useRecentItems";
import { create } from "zustand";

interface AppStore {
  recentItems: TrackedItem[];
  setRecentItems: (recentItems: TrackedItem[]) => void;
}

const initialState = {
  recentItems: getLocalRecentItems(),
};

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  setRecentItems: (recentItems: TrackedItem[]) =>
    set((state) => ({ ...state, recentItems })),
}));
