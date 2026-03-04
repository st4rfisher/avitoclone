import { apiClient } from './apiClient'
import { Item } from '../types'

// export const itemsApi = {
//   async fetchItems(): Promise<Item[]> {
//     const { data } = await apiClient.get<Item[]>('/items')
//     return data
//   },
// }


export const itemsApi = {
  fetchItems: async () => {
    const { data } = await apiClient.get<Item[]>('/items')
    return data
  },
}