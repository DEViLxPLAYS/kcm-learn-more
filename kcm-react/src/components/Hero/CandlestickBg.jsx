export default function CandlestickBg() {
  return (
    <svg
      className="heroBgCanvas"
      style={{
        position: "absolute", inset: 0, zIndex: 0,
        pointerEvents: "none", opacity: 0.18, width: "100%", height: "100%",
      }}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[100,200,300,400,500].map(y => (
        <line key={y} x1="0" y1={y} x2="1200" y2={y}
          stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="4 8" />
      ))}
      {/* Bullish candles */}
      {[
        [100,310,330,40],[160,290,305,50],[280,225,240,42],
        [340,195,205,38],[460,165,175,40],[520,148,158,36],
        [640,128,138,38],[700,108,118,42],[820,90,100,40],
        [880,82,92,38],
      ].map(([x,wick1,body,bh]) => (
        <g key={x}>
          <line x1={x} y1={wick1+bh+10} x2={x} y2={wick1-10} stroke="#C9A84C" strokeWidth="1.2"/>
          <rect x={x-7} y={body} width="14" height={bh} fill="#C9A84C" rx="1"/>
        </g>
      ))}
      {/* Bearish candles */}
      {[
        [220,260,265,38],[400,195,200,32],[580,158,165,28],[760,118,124,30],
      ].map(([x,wick1,body,bh]) => (
        <g key={x}>
          <line x1={x} y1={wick1+bh+10} x2={x} y2={wick1-10} stroke="#6B7280" strokeWidth="1.2"/>
          <rect x={x-7} y={body} width="14" height={bh} fill="#6B7280" rx="1"/>
        </g>
      ))}
      {/* Animated trend line */}
      <polyline
        points="100,370 160,350 220,295 280,275 340,230 400,220 460,200 520,182 580,185 640,162 700,142 760,148 820,125 880,110 960,95 1100,78"
        stroke="#E8C96B" strokeWidth="1.8" fill="none" strokeDasharray="8 4" opacity="0.75"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="6s" repeatCount="indefinite" />
      </polyline>
    </svg>
  );
}