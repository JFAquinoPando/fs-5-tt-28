import { create } from 'zustand'

export const useStore = create((set) => ({
  productos: [],
  agregar: () => set((state, item) => ({ productos: [...state.productos, item] })),
}))