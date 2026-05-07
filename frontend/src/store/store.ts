import { create } from 'zustand';
import { 
  ItemsSlice, 
  createItemsSlice, 
} from './slices';

export type Store = ItemsSlice;

// Глобальный Store
export const useStore = create<Store>((set, get) => ({
  ...createItemsSlice(set, get),
}));