
import React from 'react';
import { ASSETS } from '../constants.tsx';
import { PresentationStep } from '../App.tsx';

interface BrandingBarProps {
  step: PresentationStep;
  onNext: () => void;
  onPrev: () => void;
}

export const BrandingBar: React.FC<BrandingBarProps> = ({ step, onNext, onPrev }) => {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-slate-100 relative z-50 h-28">
      
      {/* Logos Left */}
      <div className="flex items-center space-x-12 opacity-60">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">Framework Core</span>
          <img src={ASSETS.WORKERS_LOGO} alt="Workers Framework" className="h-7 object-contain" />
        </div>
        <div className="w-px h-12 bg-slate-200"></div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">Platform HW</span>
          <img src={ASSETS.ZBRAIN_LOGO} alt="ZBrain Ecosystem" className="h-7 object-contain" />
        </div>
      </div>

      {/* Slide Navigation Center */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          disabled={step === 0}
          className={`p-4 rounded-full border-2 border-slate-100 transition-all ${step === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-slate-50 hover:border-slate-300 text-slate-400 hover:text-slate-900 shadow-sm active:scale-90'}`}
          title="Previous Step"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="group relative flex items-center space-x-5 bg-slate-950 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-blue-600 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] active:scale-95"
        >
          <span className="relative z-10">
            {step === 0 ? 'START EXPLORATION' : step === 1 ? 'VIEW EDGE MESH' : 'RESET PRESENTATION'}
          </span>
          <svg 
            className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        </button>
      </div>
      
      {/* Brand Right */}
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">Partner & Integration</span>
        <img 
          src={ASSETS.SCARFE_LOGO} 
          alt="Scarfe Controls" 
          className="h-10 object-contain"
        />
      </div>
    </div>
  );
};
