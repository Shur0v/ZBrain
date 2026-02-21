
import React from 'react';
import { ASSETS } from '../constants.tsx';
import { PresentationStep } from '../App.tsx';

interface TitleSectionProps {
  step: PresentationStep;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ step }) => {
  const getTitleContent = () => {
    switch (step) {
      case 1:
        return {
          main: "Shared Execution Core",
          sub: "Standardized Framework across Heterogeneous Runtimes"
        };
      case 2:
        return {
          main: "Distributed Edge Nodes",
          sub: "Synchronized Control over Ethernet and Wi-Fi Mesh"
        };
      default:
        return {
          main: "One Architecture. Three Devices.",
          sub: "LabVIEW Workers on ZBrain Ecosystem"
        };
    }
  };

  const { main, sub } = getTitleContent();

  return (
    <div className="flex flex-col space-y-3 transition-all duration-700 w-full relative z-30">
      <div className="flex items-center space-x-4 h-8 mb-1">
        <div className="w-10 h-1 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
        <span className="text-slate-400 uppercase font-black text-[12px] tracking-[0.6em]">Technical Architecture Presentation</span>
      </div>
      
      <h1 className="text-6xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] transition-all duration-700 transform">
        {main}
      </h1>
      
      <div className="flex items-center space-x-8 pt-1">
        <p className="text-2xl lg:text-3xl font-light text-slate-400 transition-all duration-700 leading-none">
          {sub}
        </p>
        {step === 0 && (
          <img 
            src={ASSETS.ZBRAIN_LOGO} 
            alt="ZBrain" 
            className="h-9 object-contain animate-fade-in transition-opacity duration-1000"
          />
        )}
      </div>
    </div>
  );
};
