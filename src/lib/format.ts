export const currency = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

/**
 * Custom price for made-to-measure items.
 * Width & length are supplied in centimetres; price is driven by area (m²)
 * with the product's base price acting as a make-up / minimum charge.
 */
export const customPrice = (
  basePrice: number,
  pricePerSqm: number,
  widthCm: number,
  lengthCm: number,
) => {
  const area = (Math.max(0, widthCm) / 100) * (Math.max(0, lengthCm) / 100);
  return basePrice + area * pricePerSqm;
};
