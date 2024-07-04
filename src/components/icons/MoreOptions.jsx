const MoreOptions = ({ fill }) => {
  return (
    <svg
      aria-label="More options"
      fill={fill}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>More options</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

export default MoreOptions;
