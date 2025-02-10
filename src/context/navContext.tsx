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

// interface DropdownState {
//   activeDropdown: string | null;
//   // openDropdo
//   openDropdown: (id: string) => void;
//   closeDropdown: () => void;
// }

// export const useDropdownStore = create<DropdownState>((set) => ({
//   activeDropdown: null,
//   openDropdown: (id) => set((state) => ({ activeDropdown: state.activeDropdown === id ? null : id })),
//   closeDropdown: () => set({ activeDropdown: null }),
// }));
