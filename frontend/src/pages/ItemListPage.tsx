import { Link } from 'react-router-dom'

export const ItemListPage = () => {
  return (
    <div className="item-list-page">
      <div className="item-list-page__header">
        <h2>Список объявлений</h2>
        <Link to="/create" className="item-list-page__create-btn">
          + Разместить объявление
        </Link>
      </div>

      <div className="item-list-page__filters">
        {/* TODO: Фильтры по категориям */}
      </div>

      <div className="item-list-page__list">
        {/* TODO: Список карточек объявлений */}
        <p>Здесь будут объявления...</p>
      </div>
    </div>
  )
}
