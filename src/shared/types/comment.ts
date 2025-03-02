import { User } from './user.js';

export interface Comment {
  /**
   * Текст комментария.
   * @minLength 5
   * @maxLength 1024
   */
  text: string;
  /**
   * Дата комментария. Обязательна. При создании комментария не используется. В формате ISO 8601 (например, "2023-10-01T12:00:00.000Z").
   */
  date: Date;
  /**
   * Рейтинг. Обязателен. Число от 1 до 5.
   * @minimum 1
   * @maximum 5
   */
  rating: number;
  /**
   * Автор комментария.
   */
  user: User;
}
