import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemType } from '../types'

export const CreateItemPage = () => {
  const [itemType, setItemType] = useState<ItemType>('Недвижимость')

  return (
    <div className="create-item-page">
      <Link to="/" className="create-item-page__back">
        ← Назад к списку
      </Link>

      <h2>Разместить объявление</h2>

      <form className="create-item-page__form">
        {/* Общие поля */}
        <div className="form-group">
          <label htmlFor="name">Название</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Локация</label>
          <input type="text" id="location" name="location" required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Ссылка на изображение</label>
          <input type="url" id="image" name="image" />
        </div>

        <div className="form-group">
          <label htmlFor="type">Категория</label>
          <select
            id="type"
            name="type"
            value={itemType}
            onChange={(e) => setItemType(e.target.value as ItemType)}
          >
            <option value="Недвижимость">Недвижимость</option>
            <option value="Авто">Авто</option>
            <option value="Услуги">Услуги</option>
          </select>
        </div>

        {/* Поля для Недвижимости */}
        {itemType === 'Недвижимость' && (
          <div className="form-section">
            <h3>Параметры недвижимости</h3>
            <div className="form-group">
              <label htmlFor="propertyType">Тип недвижимости</label>
              <input type="text" id="propertyType" name="propertyType" required />
            </div>
            <div className="form-group">
              <label htmlFor="area">Площадь (м²)</label>
              <input type="number" id="area" name="area" required />
            </div>
            <div className="form-group">
              <label htmlFor="rooms">Количество комнат</label>
              <input type="number" id="rooms" name="rooms" required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Цена (₽)</label>
              <input type="number" id="price" name="price" required />
            </div>
          </div>
        )}

        {/* Поля для Авто */}
        {itemType === 'Авто' && (
          <div className="form-section">
            <h3>Параметры автомобиля</h3>
            <div className="form-group">
              <label htmlFor="brand">Марка</label>
              <input type="text" id="brand" name="brand" required />
            </div>
            <div className="form-group">
              <label htmlFor="model">Модель</label>
              <input type="text" id="model" name="model" required />
            </div>
            <div className="form-group">
              <label htmlFor="year">Год выпуска</label>
              <input type="number" id="year" name="year" required />
            </div>
            <div className="form-group">
              <label htmlFor="mileage">Пробег (км)</label>
              <input type="number" id="mileage" name="mileage" />
            </div>
          </div>
        )}

        {/* Поля для Услуг */}
        {itemType === 'Услуги' && (
          <div className="form-section">
            <h3>Параметры услуги</h3>
            <div className="form-group">
              <label htmlFor="serviceType">Тип услуги</label>
              <input type="text" id="serviceType" name="serviceType" required />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Опыт работы (лет)</label>
              <input type="number" id="experience" name="experience" required />
            </div>
            <div className="form-group">
              <label htmlFor="cost">Стоимость (₽)</label>
              <input type="number" id="cost" name="cost" required />
            </div>
            <div className="form-group">
              <label htmlFor="workSchedule">График работы</label>
              <input type="text" id="workSchedule" name="workSchedule" />
            </div>
          </div>
        )}

        <button type="submit" className="create-item-page__submit">
          Опубликовать
        </button>
      </form>
    </div>
  )
}
