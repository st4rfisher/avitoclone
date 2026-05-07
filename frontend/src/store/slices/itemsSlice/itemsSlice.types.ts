import { Item } from '@/types/items.types';

// Слайс для пользователя
export interface ItemsSlice {
    items: Item[] | null,
    itemsLoading: boolean,
    itemsError: string | null,
    setItems: (searchValue?: string) => Promise<void>
}