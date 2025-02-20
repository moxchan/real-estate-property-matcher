import { TrackedItem, User } from "@/@types/user";
import { getLocalDefaultUser } from "@/@utils/useLocalUser";
import { getLocalRecentItems } from "@/@utils/useRecentItems";
import { create } from "zustand";

interface AppStore {
  user?: User;
  recentItems: TrackedItem[];
  setRecentItems: (recentItems: TrackedItem[]) => void;
  setUser: (user: User) => void;
}

const initialState = {
  user: getLocalDefaultUser(),
  recentItems: getLocalRecentItems(),
};

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  setRecentItems: (recentItems: TrackedItem[]) =>
    set((state) => ({ ...state, recentItems })),

  setUser: (user: User) => set((state) => ({ ...state, user })),
}));
