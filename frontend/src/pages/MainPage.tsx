import { ItemList } from '@components/context-ui/ItemList'

export const MainPage = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Список объявлений</h2>
      </div>

      <div className="mb-6 rounded-md border border-gray-200 bg-gray-50 p-4">
        {/* TODO: Фильтры по категориям */}
      </div>

      <ItemList />
    </section>
  )
}
