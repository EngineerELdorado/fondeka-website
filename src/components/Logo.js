// src/components/Logo.js
export default function Logo({
                               className = "h-8 w-auto",
                               withWordmark = true,
                               stacked = false,
                               ariaLabel = "Fondeka",
                               // Brand colors (override if needed)
                               primary = "#4F805C",  // green square
                               dot = "#FFFFFF",      // white dot
                               dark = "#0D1F14",     // wordmark
                             }) {
  const vb = stacked ? "0 0 200 160" : "0 0 420 60";

  return (
      <svg
          className={className}
          viewBox={vb}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={ariaLabel}
      >
        <title>{ariaLabel}</title>

        {/* Icon (rounded green with white dot) */}
        <g transform={stacked ? "translate(70,0)" : "translate(0,0)"}>
          <rect x="0" y="0" width="60" height="60" rx="14" fill={primary} />
          <circle cx="40" cy="20" r="10" fill={dot} />
        </g>

        {/* Wordmark */}
        {withWordmark && (
            <g transform={stacked ? "translate(0,100)" : "translate(80,0)"}>
              <text
                  x="0"
                  y="45"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif"
                  fontSize="40"
                  fontWeight="800"
                  letterSpacing="0.5"
                  fill={dark}
              >
                Fondeka
              </text>
            </g>
        )}
      </svg>
  );
}
