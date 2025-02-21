import { User } from "@/@types/user";
import { getLocalDefaultUser } from "@/@utils/useLocalUser";
import { create } from "zustand";

interface AppStore {
  user?: User;
  setUser: (user: User) => void;
}

const initialState = {
  user: getLocalDefaultUser(),
};

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  setUser: (user: User) => set((state) => ({ ...state, user })),
}));
