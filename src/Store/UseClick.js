import { create } from "zustand";

export const useClick = create((set) => ({
  click: false,
  setClick: (callback) => set((state) => ({ click: callback(state.click) })),
}));
export const useClick2 = create((set) => ({
  click2: false,
  setClick2: (callback) => set((state) => ({ click2: callback(state.click2) })),
}));
