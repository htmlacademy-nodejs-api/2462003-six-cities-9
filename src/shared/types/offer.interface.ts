import { CityName } from './city.interface.js';
import { User } from './user.interface.js';
/**
 * Перечисление типов жилья
 */
export type HousingType = 'apartment' | 'room' | 'house' | 'hotel';

/**
 * Перечисление типов удобств
 */
export type Amenities = string []

/**
 * Интерфейс для географических координат.
 */
export interface Coordinates {
  /**
   * Широта.
   */
  latitude: number;

  /**
   * Долгота.
   */
  longitude: number;
}

/**
 * Интерфейс, описывающий предложение по аренде.
 */
export interface Offer {
  /**
   * Наименование предложения.
   * @minLength 10
   * @maxLength 100
   */
  title: string;

  /**
   * Описание предложения.
   * @minLength 20
   * @maxLength 1024
   */
  description: string;

  /**
   * Дата и время публикации предложения в формате ISO 8601 (например, "2023-10-01T12:00:00.000Z").
   */
  publishDate: Date;

  /**
   * Город, в котором находится жилье.
   */
  city: CityName;

  /**
   * Ссылка на изображение, используемое как превью.
   */
  previewImage: string;

  /**
   * Список ссылок на фотографии жилья. Всегда содержит ровно 6 элементов.
   * @length 6
   */
  images: string[];

  /**
   * Признак премиальности предложения.
   */
  isPremium: boolean;

  /**
   * Признак того, что предложение добавлено в избранное пользователем.
   */
  isFavorite: boolean;

  /**
   * Рейтинг предложения. Число от 1 до 5 с одним знаком после запятой.
   * @minimum 1
   * @maximum 5
   */
  rating: number;

  /**
   * Тип жилья.
   */
  type: HousingType;

  /**
   * Количество комнат.
   * @minimum 1
   * @maximum 8
   */
  rooms: number;

  /**
   * Количество гостей.
   * @minimum 1
   * @maximum 10
   */
  guests: number;

  /**
   * Стоимость аренды за ночь.
   * @minimum 100
   * @maximum 100000
   */
  price: number;

  /**
   * Список удобств. Не менее одного элемента.
   */
  amenities: Amenities;

  /**
   * Автор предложения. Ссылка на сущность "Пользователь".
   */
  author: User;

  /**
   * Количество комментариев. Рассчитывается автоматически.
   */
  commentsCount: number;

  /**
   * Географические координаты предложения.
   */
  coordinates: Coordinates;
}

