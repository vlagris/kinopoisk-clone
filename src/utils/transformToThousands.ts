export function transformToThousands(count: number | string, characterRange: number): string {
  let result = count.toLocaleString("ru");
  if (Number(count) >= (10 ** characterRange)) {
    result = result.slice(0, -4) + "K";
  }
  return result;
}