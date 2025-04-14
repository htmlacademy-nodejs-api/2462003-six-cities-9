export interface User {
  /**
   * Имя пользователя.
   * @minLength 1
   * @maxLength 155
   */
  name: string;
  /**
     * Электронная почта пользователя. Должна быть уникальной и валидной.
     */
  email: string;
  /**
     * Путь к аватару пользователя в формате .jpg или .png.
     * Необязательное поле. Если не указано, используется аватар по умолчанию.
     */
  avatar?: string;
  /**
     * Пароль пользователя.
     * @minLength 6
     * @maxLength 12
     */
  // password: string;
  /**
   * Тип пользователя.
   */
  userType: string;
}
