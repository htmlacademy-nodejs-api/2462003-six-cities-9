// - Для строки "hello" функция должна вернуть: "olleh".
// - Для строки "" (пустая строка) результат должен быть: "".

const reverse = (string: string): string => {
  if (string.length === 0) {
    return '';
  }

  const firstLetter = string[0];
  const restString = string.slice(1);

  return reverse(restString) + firstLetter;
};

console.log(reverse('hello'));
