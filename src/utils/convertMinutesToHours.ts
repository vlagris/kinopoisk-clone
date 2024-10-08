export function convertMinutesToHours(minutes: number): string {
  const hours = Math.floor((minutes / 60) % 60);
  const remainingMinutes = Math.floor(minutes % 60);
  let result = "";

  if (hours > 0) {
    result += `${hours} ч `;
  }
  if (remainingMinutes > 0) {
    result += `${remainingMinutes} мин`;
  }
  return result;
}