import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { itemsApi } from '@api/items'
import { Item, isRealEstate, isService } from '@types'
import { ItemCard } from '@components/context-ui/ItemCard'

export function ItemList() {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await itemsApi.fetchItems()
        setItems(data)
      } catch {
        setError('Не удалось загрузить объявления. Попробуйте позже.')
      } finally {
        setIsLoading(false)
      }
    }

    void loadItems()
  }, [])

  const formatPrice = (item: Item) => {
    const value = isRealEstate(item) ? item.price : isService(item) ? item.cost : null
    if (value == null) {
      return 'Цена по запросу'
    }
    return `${value.toLocaleString('ru-RU')} ₽`
  }

  const formatDate = (createdAt?: string) => {
    if (!createdAt) {
      return 'Дата не указана'
    }
    return new Date(createdAt).toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="rounded-md border border-gray-200 p-4">
      {isLoading && <p className="text-gray-600">Загрузка объявлений...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          !error &&
          items.map((item) => (
            <Link key={item.id} to={`/items/${item.id}`} className="no-underline">
              <ItemCard
                title={item.name}
                price={formatPrice(item)}
                location={item.location}
                date={formatDate(item.createdAt)}
                imageUrl={item.image ?? 'https://via.placeholder.com/400x300?text=No+Image'}
              />
            </Link>
          ))}
      </div>
    </div>
  )
}
