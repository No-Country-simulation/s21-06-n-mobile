import { create } from 'zustand';

type BottomSheetStore = {
    isOpen: boolean;
    openBottomSheet: () => void;
    closeBottomSheet: () => void;
};

export const useBottomSheetStore = create<BottomSheetStore>((set) => ({
    isOpen: false,
    openBottomSheet: () => set({ isOpen: true }),
    closeBottomSheet: () => set({ isOpen: false }),
}));
