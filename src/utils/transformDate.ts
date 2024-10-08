export function transformDate(date: Date): string {
  const result = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
  return result.replace(/ г./g, "");
}