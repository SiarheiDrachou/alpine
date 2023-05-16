export default function LinkArrow(props: { className?: string, width?: string, height?: string, color?: string }): JSX.Element {
  const { className = "", width = "12", height = "12", color = "white"} = props || {};
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5706 9.42859V1.42859M10.5706 1.42859H2.57059M10.5706 1.42859L1.42773 10.5714"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
