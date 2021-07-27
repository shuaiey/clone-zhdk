
export const IconHamburg = ({ title = "Menu", stroke = 1.5, ...props }) => (
  <svg width="16" viewBox="0 0 16 12" {...props}>
    <title>{title}</title>
    <g fill="currentColor" fillRule="evenodd">
      <rect y="10" width="16" height={stroke} rx="1" />
      <rect y="5" width="16" height={stroke} rx="1" />
      <rect width="16" height={stroke} rx="1" />
    </g>
  </svg>
);