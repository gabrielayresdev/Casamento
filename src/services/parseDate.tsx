export default function parseDate(input: string): {
  month: string | null;
  year: string | null;
} {
  const regex = /(\w{3})\s*-\s*(\d{4})/;
  const match = input.match(regex);

  if (match) {
    const [, month, year] = match;
    return { month, year };
  } else {
    // Retorne um objeto com valores nulos se não houver correspondência.
    return { month: null, year: null };
  }
}
