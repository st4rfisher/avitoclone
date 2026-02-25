import { useParams, Link } from 'react-router-dom'

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="item-page">
      <Link to="/" className="item-page__back">
        ← Назад к списку
      </Link>

      <div className="item-page__content">
        <h2>Объявление #{id}</h2>
        
        <div className="item-page__image">
          {/* TODO: Изображение объявления */}
        </div>

        <div className="item-page__info">
          {/* TODO: Информация об объявлении */}
          <p>Загрузка данных...</p>
        </div>

        <div className="item-page__details">
          {/* TODO: Дополнительные поля в зависимости от типа */}
        </div>

        <div className="item-page__actions">
          <Link to={`/edit/${id}`} className="item-page__edit-btn">
            Редактировать
          </Link>
        </div>
      </div>
    </div>
  )
}
