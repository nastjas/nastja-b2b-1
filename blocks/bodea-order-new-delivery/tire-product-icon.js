/**
 * MS Motorservice engine-component icon (gear / cog), tinted by category.
 * Shared by bodea-order-new-delivery wizard and bodea-orders-list product previews.
 * (Kept the original export name so existing imports keep working.)
 *
 * @param {string} season category key (all-season | summer | winter or any)
 * @param {{ className?: string }} [opts]
 * @returns {string} SVG markup
 */
export function renderTireProductIcon(season, opts = {}) {
  const { className } = opts;
  // Accent colour per category (MS Motorservice palette).
  const colors = {
    'all-season': '#0f72b5', // ms-blue
    summer: '#d10019', // ms-red
    winter: '#00406e', // ms-navy
  };
  const accent = colors[season] || colors['all-season'];
  const classAttr = className ? ` class="${className}"` : '';
  return `<svg${classAttr} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="${accent}" opacity="0.12"/>
    <g fill="none" stroke="${accent}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
      <path d="M16 6.2l1.4 2.6 2.9-.5 1 2.8 2.8 1-.5 2.9 2.6 1.4-2.6 1.4.5 2.9-2.8 1-1 2.8-2.9-.5L16 25.8l-1.4-2.6-2.9.5-1-2.8-2.8-1 .5-2.9L5.8 16l2.6-1.4-.5-2.9 2.8-1 1-2.8 2.9.5z"/>
      <circle cx="16" cy="16" r="4"/>
    </g>
  </svg>`;
}
