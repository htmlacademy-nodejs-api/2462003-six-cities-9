export function generateRandomValue(min:number, max: number, numAfterDigit = 0) {
  return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

export function getRandomItems<T>(items: T[]):T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
}

export function getSixRandomItems<T>(items: T[]):T[] {
  const startPosition = generateRandomValue(0, items.length - 6);
  const endPosition = startPosition + generateRandomValue(startPosition, startPosition + 6);
  return items.slice(startPosition, endPosition);
}

export function getRandomArrayItem<T extends unknown[]>(items: T[]):string {
  const returnedArr = items[generateRandomValue(0, items.length - 1)];
  return returnedArr.join(';');
}

export function getRandomItem<T>(items: T[]):T {
  return items[generateRandomValue(0, items.length - 1)];
}

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}
