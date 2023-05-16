export default function ArrowRight(props: { className?: string }): JSX.Element {
  const { className = "" } = props || {};
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <path
        d="M27.4283 19.4251L31.9997 23.9989L27.4283 28.5714M17.1426 24H31.9997"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
