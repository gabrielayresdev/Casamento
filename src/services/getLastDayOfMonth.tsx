export default function getLastDayOfMonth(year: string, monthStr: string) {
  const months: { [key: string]: number } = {
    jan: 0,
    fev: 1,
    mar: 2,
    abr: 3,
    mai: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    set: 8,
    out: 9,
    nov: 10,
    dez: 11,
  };

  const monthIndex = months[monthStr];

  if (monthIndex !== undefined) {
    // Crie um novo Date com o primeiro dia do mês seguinte.
    const nextMonth = new Date(Number(year), monthIndex + 1, 1);
    // Subtraia um dia (em milissegundos) do primeiro dia do mês seguinte para obter o último dia do mês atual.
    return new Date(nextMonth.getTime() - 1);
  } else {
    throw new Error("Abreviação de mês inválida");
  }
}
