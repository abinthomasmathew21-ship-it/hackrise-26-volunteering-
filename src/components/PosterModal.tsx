import React, { useEffect } from 'react';
import { POSTER_IMAGE_URL, OFFICIAL_GOOGLE_FORM_URL } from '../data/rolesData';
import { X, ExternalLink } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white border-2 border-red-600 shadow-2xl p-4 sm:p-6 space-y-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-900">
              HACKRISE <span className="text-red-600">’26</span> Official Poster
            </h3>
            <p className="text-xs text-zinc-500 font-mono">
              Orbinex Innovations × MBC : 80 | Supported by µLearn MBCCET
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-red-600 hover:bg-zinc-100 transition-colors"
            aria-label="Close poster preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-auto flex-1 flex justify-center bg-zinc-900/5 p-2">
          <img
            src={POSTER_IMAGE_URL}
            alt="Full size official HackRise '26 poster"
            className="max-h-[68vh] object-contain shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-zinc-200">
          <span className="text-zinc-600 font-semibold">
            “Come With your Moorthy Gang” — Join as a volunteer for HackRise ’26.
          </span>
          <a
            href={OFFICIAL_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs whitespace-nowrap transition-colors"
          >
            <span>Register as Volunteer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
