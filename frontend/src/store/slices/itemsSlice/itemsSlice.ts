import { itemsApi } from '@api/items';
import { ItemsSlice } from './itemsSlice.types';

// Фабрика ItemsSlice
export const createItemsSlice = (
  set: (partial: Partial<ItemsSlice> | ((state: ItemsSlice) => Partial<ItemsSlice>)) => void,
  _get: () => ItemsSlice,
): ItemsSlice => ({
  items: null,
  itemsLoading: false,
  itemsError: null,

  setItems: async (searchValue = '') => {
    set({ itemsLoading: true, itemsError: null });
    try {
      const items = await itemsApi.fetchItems(searchValue);
      set({ items, itemsLoading: false, itemsError: null });
    } catch (error) {
      console.error('[ItemsSlice] setItems error: ', error);
      set({
        items: null,
        itemsLoading: false,
        itemsError: 'Не удалось загрузить объявления. Попробуйте позже.',
      })
    }
  }
});