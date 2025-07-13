/**
 * Atom: Overlay
 * Purpose: A semi-transparent background layer to cover the page content
 * when the dialog is open. It also handles the click-outside-to-close
 * functionality.
 */
export const Overlay = ({ onClick }: { onClick: () => void }) => (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-black/50 z-40"
      aria-hidden="true"
    ></div>
  );