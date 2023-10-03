export const Shape = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      className={className}
    >
      <path
        d="M5 5L0 0H10L5 5Z"
        fill="blue"
      />
    </svg>
  );
};
