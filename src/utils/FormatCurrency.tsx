import { format } from "number-currency-format";

export default function formatCurrency(
  currency: string,
  number: number | string
) {
  const amount = Number(number);
  return format(amount, {
    currency: currency,
    spacing: true,
    currencyPosition: "LEFT",
  });
}
