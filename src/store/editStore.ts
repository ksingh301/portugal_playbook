import { createWithEqualityFn } from 'zustand/traditional';

interface EditState {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

export const useEditStore = createWithEqualityFn<EditState>((set) => ({
  isEditMode: false,
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
}));