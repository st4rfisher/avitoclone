import { useStore } from '@/store/store'
import { useEffect, useState } from 'react'

export function useItemSearch(debounceMs = 400) {
  const [query, setQuery] = useState('')
  const { items, itemsLoading, itemsError, setItems } = useStore()

  useEffect(() => {
    const normalizedQuery = query.trim()
    if (!normalizedQuery) return

    const timer = setTimeout(async () => {
      await setItems(normalizedQuery)
    }, debounceMs)

    return () => {
      clearTimeout(timer)
    }
  }, [query, debounceMs, setItems])

  return {
    query,
    setQuery,
    items: items ?? [],
    isLoading: itemsLoading,
    error: itemsError,
  }
}
