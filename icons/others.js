
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


export const IconExternalLink = (props) => (
  <svg width="16" viewBox="0 0 12 12" {...props}>
    <g fill="currentColor">
      <path
        d="M7.5 0H12V4.516H11V1.70709L6.35356 6.35353L5.64645 5.64642L10.2929 1H7.5V0Z"
      />
      <path
        d="M1 4.5C1 3.67157 1.67157 3 2.5 3H5V2H2.5C1.11929 2 0 3.11929 0 4.5V9.5C0 10.8807 1.11929 12 2.5 12H7.5C8.88071 12 10 10.8807 10 9.5V7H9V9.5C9 10.3284 8.32843 11 7.5 11H2.5C1.67157 11 1 10.3284 1 9.5V4.5Z"
      />
    </g>
  </svg>
);
