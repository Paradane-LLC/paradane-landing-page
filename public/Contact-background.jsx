export default function TopEllipseBanner({ color = "#00489c", height = 220 }) {
  return (
    <div className="w-full overflow-hidden" style={{ height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full block"
        aria-hidden="true"
      >
        <ellipse cx="720" cy="80" rx="900" ry="160" fill={color} />
      </svg>
    </div>
  );
}