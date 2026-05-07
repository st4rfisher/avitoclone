import { useItemSearch } from '@/hooks/useItemSearch'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function SearchComponent() {
  const { query, setQuery, items, isLoading, error } = useItemSearch()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      <form
        className="flex w-full items-stretch overflow-hidden rounded-md border-2 border-blue-600 bg-white"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Поиск по объявлениям"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          className="h-10 min-w-0 flex-1 rounded-r-md px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center gap-2 bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:px-5"
        >
          <Search size={16} />
          <span className="hidden md:inline">Найти</span>
        </button>
      </form>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          {isLoading && <p className="px-4 py-3 text-sm text-gray-500">Загрузка...</p>}

          {!isLoading && error && (
            <p className="px-4 py-3 text-sm text-red-500">{error}</p>
          )}

          {!isLoading && !error && items.length === 0 && (
            <p className="px-4 py-3 text-sm text-gray-500">нет совпадений в списке</p>
          )}

          {!isLoading && !error && items.length > 0 && (
            <ul className="max-h-80 overflow-y-auto">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/items/${item.id}`}
                    className="block px-4 py-3 text-sm text-gray-800 no-underline transition-colors hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

    </div>
  )
}
