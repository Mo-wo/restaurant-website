import { NavState } from '@/interfaces/navInterface';
import { create } from 'zustand';

export const useStore = create<NavState>((set) => ({
    isOpen: false,
    toggleNav: () => set((state) => ({isOpen: !state.isOpen})) 
}))

