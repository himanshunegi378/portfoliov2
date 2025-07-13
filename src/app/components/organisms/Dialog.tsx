//============================================================================
// MOLECULES
//============================================================================

import { Overlay } from "../atoms/Overlay";
import { Icon } from "../atoms/Icon";
import { ReactNode, useEffect } from "react";
import Button from "../atoms/Button";
/**
 * Molecule: DialogHeader
 * Purpose: The header section of the dialog, containing a title and an
 * optional close button.
 */
export const DialogHeader = ({ title, onClose }: { title: ReactNode | string; onClose?: () => void }) => (
    <div className="bg-[var(--color-dialog-header-bg)] flex items-start justify-between p-4 border-b rounded-t">
      <h3 className="text-xl font-semibold text-[var(--color-dialog-header-text)]">{title}</h3>
      {onClose && (
        <Button onClick={onClose} type="button" className="p-1 ml-auto">
          <Icon path="M6 18L18 6M6 6l12 12" className="w-5 h-5" />
          <span className="sr-only">Close dialog</span>
        </Button>
      )}
    </div>
  );
  
  /**
   * Molecule: DialogBody
   * Purpose: The main content area of the dialog.
   */
  export const DialogBody = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[var(--color-dialog-body-bg)] p-6 space-y-4">
      {children}
    </div>
  );
  
  /**
   * Molecule: DialogFooter
   * Purpose: The footer section of the dialog, typically containing action buttons.
   */
  export const DialogFooter = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[var(--color-dialog-footer-bg)] text-[var(--color-dialog-footer-text)] flex items-center justify-end p-4 space-x-2 border-t border-gray-200 rounded-b">
      {children}
    </div>
  );
  
  
  //============================================================================
  // ORGANISMS
  //============================================================================
  
  /**
   * example:
   * ```tsx
   * <Dialog isOpen={isOpen} onClose={onClose} title="Dialog Title">
   *   <DialogHeader title="Dialog Title" onClose={onClose} />
   *   <DialogBody>
   *     <p>Dialog content goes here.</p>
   *   </DialogBody>
   *   <DialogFooter>
   *     <Button onClick={onClose}>Close</Button>
   *   </DialogFooter>
   * </Dialog>
   * ```
   */
  export const Dialog = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
    // Effect to handle the 'Escape' key press to close the dialog
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      if (isOpen) {
        window.addEventListener('keydown', handleEsc);
      }
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }, [isOpen, onClose]);
  
    // Prevent scrolling on the body when the dialog is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
  
    if (!isOpen) {
      return null;
    }
  
    return (
      // The portal's target would ideally be document.body, but for this
      // self-contained example, we'll mount it directly.
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-labelledby="dialog-title"
        role="dialog"
        aria-modal="true"
      >
        <Overlay onClick={onClose} />
        <div className="relative w-full max-w-lg mx-4 bg-white rounded-lg shadow-xl z-50 animate-fade-in-up">
          {/* The children prop is used here to allow for flexible content.
              We expect DialogHeader, DialogBody, and DialogFooter as children. */}
          {children}
        </div>
      </div>
    );
  };
  