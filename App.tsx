
import React, { useState, useEffect } from 'react';
import { TitleSection } from './components/TitleSection';
import { ArchitectureHero } from './components/ArchitectureHero';
import { BrandingBar } from './components/BrandingBar';
import { BackgroundLayer } from './components/BackgroundLayer';

export type PresentationStep = 0 | 1 | 2;

const App: React.FC = () => {
  const [step, setStep] = useState<PresentationStep>(0);
  const [scale, setScale] = useState(1);

  // Maintain fixed internal resolution (1920x1080) and scale to fit viewport
  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1920;
      const targetHeight = 1080;
      const widthScale = window.innerWidth / targetWidth;
      const heightScale = window.innerHeight / targetHeight;
      
      // Use the smaller scale factor to ensure the slide fits entirely within the screen
      const newScale = Math.min(widthScale, heightScale) * 0.95; 
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    setStep((prev) => ((prev + 1) % 3) as PresentationStep);
  };

  const prevStep = () => {
    setStep((prev) => ((prev - 1 + 3) % 3) as PresentationStep);
  };

  return (
    <div className="fixed inset-0 bg-[#020617] overflow-hidden select-none flex items-center justify-center">
      {/* Scaling Wrapper - Absolutely Centered */}
      <div 
        style={{ 
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: '1920px',
          height: '1080px',
          left: '50%',
          top: '50%',
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
        className="absolute origin-center bg-white shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden rounded-2xl border border-slate-800/10"
      >
        
        {/* Decorative Background Components */}
        <BackgroundLayer step={step} />

        {/* Slide Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col px-32 py-24 justify-between">
          
          {/* Top Title Section */}
          <TitleSection step={step} />

          {/* Central Visualization Area */}
          <div className="flex-1 flex items-center justify-center w-full max-h-[520px]">
            <ArchitectureHero step={step} />
          </div>

          {/* Bottom Branding Bar + Slide Control */}
          <BrandingBar step={step} onNext={nextStep} onPrev={prevStep} />
          
        </div>

        {/* Static Slide Numbers */}
        <div className="absolute top-16 right-16 text-slate-300 font-mono text-xl tracking-[0.4em] uppercase flex items-baseline space-x-3">
          <span className="text-slate-900 font-black">{step + 1}</span>
          <span className="opacity-10 font-light">/</span>
          <span className="opacity-10 font-light">03</span>
        </div>
      </div>
    </div>
  );
};

export default App;
