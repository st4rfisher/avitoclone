// Типы категорий объявлений
export type ItemType = 'Недвижимость' | 'Авто' | 'Услуги'

// Общие поля для всех объявлений
export interface BaseItemType {
  id: number,
  name: string,
  description: string,
  location: string,
  image?: string,
  createdAt?: string,
}

// Недвижимость
export interface RealEstate extends BaseItemType {
  type: 'Недвижимость',
  propertyType: string,
  area: number,
  rooms: number,
  price: number,
}

// Авто
export interface Auto extends BaseItemType {
  type: 'Авто',
  brand: string,
  model: string,
  year: number,
  mileage?: number,
}

// Услуги
export interface Service extends BaseItemType {
  type: 'Услуги',
  serviceType: string,
  experience: number,
  cost: number,
  workSchedule?: string,
}

// Объединённый тип для любого объявления
export type Item = RealEstate | Auto | Service

// Типы для создания объявлений (без id и createdAt)
// export type CreateRealEstate = Omit<RealEstate, 'id' | 'createdAt'>
// export type CreateAuto = Omit<Auto, 'id' | 'createdAt'>
// export type CreateService = Omit<Service, 'id' | 'createdAt'>
// export type CreateItem = CreateRealEstate | CreateAuto | CreateService

// Type guards для проверки типа объявления
export const isRealEstate = (item: Item): item is RealEstate => {
  return item.type === 'Недвижимость'
}

export const isAuto = (item: Item): item is Auto => {
  return item.type === 'Авто'
}

export const isService = (item: Item): item is Service => {
  return item.type === 'Услуги'
}
