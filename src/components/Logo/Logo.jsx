/**
 * Finzoriacapital brand mark — the official logo art (finzoriacapital.svg,
 * 512x512 source): a cream rounded tile with soft corner accents, a bold
 * dark "F" letterform and orange chart segments rising through it.
 * Rendered at the same size everywhere (header, footer, splash, favicon)
 * via the className width/height rules in each stylesheet.
 */
export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" aria-hidden="true" focusable="false">
      <g clipPath="url(#fvLogoClip)">
        <rect x="28" y="28" width="456" height="456" rx="76" fill="#FCF2E4" />
        <path d="M301 425C356 330.5 448 298 484 298V425H301Z" fill="#FBE7D1" />
        <path d="M485 354C342.6 366.4 273 442.5 243 485H485V354Z" fill="#F7DABC" />
        <g opacity="0.4">
          <path d="M211 87C156 181.5 64 214 28 214V87H211Z" fill="#FBE7D1" />
          <path d="M27 158C169.4 145.6 239 69.5 269 27H27V158Z" fill="#F7DABC" />
        </g>
        <path d="M142.299 288.06V279.696C96.2607 323.663 122.983 355.564 142.299 368.109V359.347C111.076 332.744 129.289 300.737 142.299 288.06Z" fill="#D96D20" />
        <path d="M192.877 377.667H200.045H220.755C220.755 381.171 221.286 383.906 221.551 384.835C210.241 384.835 197.722 384.304 192.877 384.039V377.667Z" fill="#D96D20" />
        <path d="M312.751 344.213C287.582 362.533 262.704 370.697 253.411 372.489C254.367 374.878 254.606 378.795 254.606 380.454C283.918 372.17 308.835 357.222 317.729 350.983C314.543 347.638 313.149 345.209 312.751 344.213Z" fill="#D96D20" />
        <path d="M343.417 317.53C346.921 320.238 348.594 322.641 348.992 323.504C365.082 306.777 376.671 284.409 380.454 275.315H369.303C361.975 294.75 348.992 311.556 343.417 317.53Z" fill="#D96D20" />
        <circle cx="380.852" cy="253.013" r="25.8865" fill="#D96D20" />
        <path d="M235.888 167.787L298.016 102.473H407.636C411.884 102.473 414.324 107.306 411.802 110.724L383.55 149.017C374.841 160.82 361.044 167.787 346.375 167.787H235.888Z" fill="#D96D20" />
        <path d="M223.941 167.787H235.888L298.016 102.473H224.339C203.948 104.225 187.293 113.956 181.514 118.602C155.219 137.241 147.335 166.592 146.679 178.938V409.128C149.865 409.128 160.618 408.496 164.203 407.535C188.695 402.159 200.045 379.06 200.045 370.896V285.869C200.045 269.939 217.369 259.783 226.131 259.783H299.609C314.145 259.783 327.287 249.429 331.071 244.65L357.754 208.807C361.338 204.028 359.745 202.833 357.754 202.833H242.658C218.166 202.236 209.803 210.798 200.045 227.525V191.682C200.045 180.531 210.002 167.787 223.941 167.787Z" fill="#2F241C" strokeWidth="0.398253" stroke="black" />
        <circle cx="237.481" cy="379.26" r="13.1424" fill="#D96D20" />
        <circle cx="331.071" cy="334.456" r="17.324" fill="#D96D20" />
      </g>
      <defs>
        <clipPath id="fvLogoClip">
          <rect x="28" y="28" width="456" height="456" rx="76" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
