
import React from 'react';
import { PresentationStep } from '../App';

interface BackgroundLayerProps {
  step: PresentationStep;
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ step }) => {
  return (
    <div className="absolute inset-0 pointer-events-none transition-all duration-1000 overflow-hidden">
      {/* Base Layer */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${
        step === 1 ? 'bg-[#f8fafc]' : 
        step === 2 ? 'bg-[#fdfdfd]' : 
        'bg-white'
      }`}></div>

      {/* Subtle Gradient Spotlights */}
      <div className={`absolute -top-[50%] -left-[20%] w-[120%] h-[150%] rounded-[100%] transition-opacity duration-1000 ${
        step === 1 ? 'bg-blue-50/40 opacity-100' : 'bg-blue-50/20 opacity-0'
      }`}></div>
      
      {/* Precision Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] transition-all duration-1000" 
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }}
      ></div>
      
      {/* Micro-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Abstract Design Elements */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] transition-transform duration-1000 ${
        step === 1 ? 'scale-150' : step === 2 ? 'translate-x-0' : ''
      }`}></div>

      {/* Structural Accents */}
      <div className="absolute top-24 left-24 w-1 h-24 bg-blue-600/10 rounded-full"></div>
      <div className="absolute bottom-24 right-24 w-1 h-24 bg-slate-900/10 rounded-full"></div>
      
      {/* Soft Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-100/40 to-transparent"></div>
    </div>
  );
};
