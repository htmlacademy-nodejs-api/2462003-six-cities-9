// Задача: Извлечь ключи объекта, значения которых имеют определенный тип
// Напиши дженерик KeysWithType<T, U>, который принимает объект T и извлекает только те ключи, у которых значения имеют тип U.

// Пример использования:

// type Example = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   balance: number;
// };

// type StringKeys = KeysWithType<Example, string>; // "name"
// type NumberKeys = KeysWithType<Example, number>; // "age" | "balance"
// type BooleanKeys = KeysWithType<Example, boolean>; // "isAdmin"

type KeysWithType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
