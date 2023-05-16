export default function CloseIcon(props: { className?: string }): JSX.Element {
  const { className = "" } = props || {};
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="12" fill="white" />
      <path
        d="M19.8105 19.8095L12.1914 12.1904M19.8105 12.1904L12.1914 19.8095"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
