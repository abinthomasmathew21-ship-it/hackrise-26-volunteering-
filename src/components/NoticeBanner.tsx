import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-red-50 border-y border-red-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-red-950">
          <div className="flex items-start gap-3">
            <span className="p-1 bg-red-600 text-white shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-extrabold uppercase tracking-wider text-red-700 mr-2">
                Important Notice:
              </span>
              <strong className="font-bold">VOLUNTEER REGISTRATION IS NOT PARTICIPANT REGISTRATION.</strong>
              <span className="text-zinc-700 ml-1">
                This portal is exclusively for students applying to join the HackRise ’26 organizing and operations crew. Competitors wishing to build projects must use the separate participant registration.
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 self-end sm:self-center text-xs font-semibold text-red-700 hover:text-red-900">
            <Info className="w-3.5 h-3.5" />
            <span>Organizing Team Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
