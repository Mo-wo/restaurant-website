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

type DropdownState = {
  showDropdown: boolean;
  toggleDropdown: () => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  showDropdown: false,
  toggleDropdown: () => set({ showDropdown: !showDropdown }),
}));
