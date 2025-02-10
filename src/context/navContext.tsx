import {create} from 'zustand';

type ModalState = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};


export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

interface DropdownState {
  showDropdown: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  showDropdown: false,
  toggleDropdown: () => set((state) => ({ showDropdown: !state.showDropdown })),
  closeDropdown: () => set({ showDropdown: false }),
}));
