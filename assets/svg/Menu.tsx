export default function Menu(props: { className?: string }): JSX.Element {
  const { className = "" } = props || {};
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="3" cy="3.14282" r="3" fill="white" />
      <circle cx="18.7148" cy="3.14282" r="3" fill="white" />
      <circle cx="18.7148" cy="18.8572" r="3" fill="white" />
      <circle cx="3" cy="18.8571" r="3" fill="white" />
    </svg>
  );
}
