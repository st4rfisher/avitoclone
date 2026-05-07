import { Link } from 'react-router-dom'
import { ItemCard } from '@components/context-ui/ItemCard'
import { useStore } from '../../store/store'
import { Item, isRealEstate, isService } from '@types'

export function ItemList() {
  const { items, itemsLoading, itemsError } = useStore()

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
      {itemsLoading && <p className="text-gray-600">Загрузка объявлений...</p>}
      {itemsError && <p className="text-red-500">{itemsError}</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {!!items && !itemsLoading && !itemsError && items.length > 0
          ? items.map((item) => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="no-underline"
              >
                <ItemCard
                  title={item.name}
                  price={formatPrice(item)}
                  location={item.location}
                  date={formatDate(item.createdAt)}
                  imageUrl={
                    item.image ?? 'https://via.placeholder.com/400x300?text=No+Image'
                  }
                />
              </Link>
            ))
          : !itemsLoading && !itemsError && 
            <p className="text-gray-500">Объявлений нет</p>
        }
      </div>
    </div>
  )
}
