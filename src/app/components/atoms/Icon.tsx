/**
 * Atom: Icon
 * Purpose: A simple component to render SVG icons.
 */
export const Icon = ({ path, className = 'w-6 h-6' }: { path: string; className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );