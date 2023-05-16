export default function Arrow(props: { className?: string }): JSX.Element {
  const { className = "" } = props || {};
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.4283 1.42529L15.9997 5.99901L11.4283 10.5716M1.14258 6.00015H15.9997"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
