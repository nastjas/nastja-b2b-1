/**
 * Products offered in the "Order Parts" wizard.
 * Real MS Motorservice catalogue SKUs so prices resolve via Catalog Service.
 * `material` only tints the product icon (blue = Kolbenschmidt, red = BF,
 * navy = Pierburg); `brand` is shown on the card.
 */
export const EQUIPMENT_PRODUCTS = [
  {
    label: 'Piston – Kolbenschmidt',
    sku: 'MS-PIS-01',
    brand: 'Kolbenschmidt',
    material: 'all-season',
  },
  {
    label: 'Piston Ring Set – Kolbenschmidt',
    sku: 'MS-PRG-01',
    brand: 'Kolbenschmidt',
    material: 'all-season',
  },
  {
    label: 'Main Bearing Set – Kolbenschmidt',
    sku: 'MS-BRG-01',
    brand: 'Kolbenschmidt',
    material: 'all-season',
  },
  {
    label: 'Camshaft – Kolbenschmidt',
    sku: 'MS-CAM-01',
    brand: 'Kolbenschmidt',
    material: 'all-season',
  },
  {
    label: 'Thermostat with Housing – BF',
    sku: 'MS-THM-01',
    brand: 'BF',
    material: 'summer',
  },
  {
    label: 'Electric Water Pump – Pierburg',
    sku: 'MS-WPU-01',
    brand: 'Pierburg',
    material: 'winter',
  },
];

export const EQUIPMENT_PRODUCT_MAP = Object.freeze(
  EQUIPMENT_PRODUCTS.reduce((products, product) => {
    products[product.sku] = product;
    return products;
  }, {}),
);

export function getEquipmentProductBySku(sku) {
  return EQUIPMENT_PRODUCT_MAP[sku] || null;
}
