import { apiClient } from '@api/apiClient'
import { Item } from '@types'

export const itemsApi = {
  fetchItems: async (searchValue = ''): Promise<Item[]> => {
    const query = searchValue.trim()
    const { data } = await apiClient.get<Item[]>('/items', {
      params: 
        query !== '' ? { 
          name_like: query 
        } : null,
    })
    
    return data
  },
}