
import React from 'react';
import { ASSETS } from '../constants';
import { PresentationStep } from '../App';

interface ArchitectureHeroProps {
  step: PresentationStep;
}

export const ArchitectureHero: React.FC<ArchitectureHeroProps> = ({ step }) => {
  const isOverview = step === 0;
  const isCoreFocus = step === 1;
  const isNodesFocus = step === 2;

  return (
    <div className="relative w-full h-full flex items-center justify-between transition-all duration-700">
      
      {/* Background Connection Lines (Continuous Network) */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${isCoreFocus ? 'opacity-0' : 'opacity-100'}`}>
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Path to ZSOM-Mini (Wireless implied by dashed line) */}
          <path 
            id="wifi-path"
            d="M 600 250 C 750 250, 800 150, 950 150" 
            stroke="#94a3b8" 
            strokeWidth="2" 
            strokeDasharray="8 8"
            className="opacity-20"
          />
          {/* Path to ZSOM-Control (Wired implied by solid line) */}
          <path 
            id="eth-path"
            d="M 600 350 C 750 350, 800 450, 950 450" 
            stroke="#94a3b8" 
            strokeWidth="2"
            className="opacity-20"
          />

          {/* Continuous Data Pulses */}
          <circle r="4" fill="#3b82f6" className="shadow-sm">
            <animateMotion 
              path="M 600 250 C 750 250, 800 150, 950 150" 
              dur="3s" 
              repeatCount="indefinite" 
              begin="0s"
            />
          </circle>
          <circle r="3" fill="#60a5fa" className="opacity-60">
            <animateMotion 
              path="M 600 250 C 750 250, 800 150, 950 150" 
              dur="3s" 
              repeatCount="indefinite" 
              begin="1.5s"
            />
          </circle>

          <circle r="4" fill="#2563eb">
            <animateMotion 
              path="M 600 350 C 750 350, 800 450, 950 450" 
              dur="2.5s" 
              repeatCount="indefinite" 
              begin="0.5s"
            />
          </circle>
          <circle r="3" fill="#3b82f6" className="opacity-60">
            <animateMotion 
              path="M 600 350 C 750 350, 800 450, 950 450" 
              dur="2.5s" 
              repeatCount="indefinite" 
              begin="1.8s"
            />
          </circle>
        </svg>
      </div>

      {/* Central Laptop - The Orchestrator */}
      <div className={`relative transition-all duration-1000 ease-in-out z-20 h-full flex items-center justify-center ${
        isCoreFocus ? 'w-full translate-y-6' : isNodesFocus ? 'w-1/2 -translate-x-12 opacity-20 scale-90 blur-[4px]' : 'w-[56%] translate-y-4'
      }`}>
        
        {/* Dynamic Glow */}
        <div className={`absolute inset-0 bg-blue-600/10 blur-[140px] rounded-full scale-125 transition-opacity duration-1000 ${isCoreFocus ? 'opacity-100' : 'opacity-40'}`}></div>
        
        <div className={`relative transition-all duration-1000 w-full max-w-[920px] ${isCoreFocus ? 'scale-110' : ''}`}>
          {/* Laptop Frame */}
          <div className="bg-slate-900 p-3 rounded-2xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
              {/* Screen Content: Architecture Diagram */}
              <div className="aspect-[16/10] bg-[#f8fafc] p-10 flex flex-col">
                <div className="flex justify-between items-center pb-8 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] relative">
                      <div className="absolute inset-0 bg-blue-400 animate-ping rounded-full opacity-40"></div>
                    </div>
                    <span className="text-sm font-black text-slate-900 uppercase tracking-[0.3em]">Workers Runtime Engine</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono tracking-[0.2em] flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>NETWORK_ACTIVE</span>
                  </div>
                </div>
                
                {/* Visual Architecture Layers */}
                <div className="flex-1 flex flex-col justify-center space-y-8 pt-4">
                  <div className={`w-full h-14 rounded-xl shadow-lg flex items-center justify-center text-white text-lg font-black uppercase tracking-[0.3em] transition-all duration-700 ${isCoreFocus ? 'bg-blue-600 scale-[1.02]' : 'bg-slate-800'}`}>
                    Workers Framework Core
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white h-14 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">HAL (Hardware Abstraction)</div>
                    <div className="bg-white h-14 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">Unified API Gateway</div>
                  </div>

                  <div className={`grid grid-cols-3 gap-6 transition-all duration-1000 ${isNodesFocus ? 'opacity-20 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <div className="bg-blue-50/50 h-24 rounded-xl border border-blue-100 flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-[9px] text-blue-400 font-black mb-1 uppercase tracking-[0.2em]">Primary Interface</div>
                      <div className="text-sm text-blue-900 font-black uppercase">System GUI</div>
                    </div>
                    <div className={`bg-slate-50/50 h-24 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-4 text-center transition-all ${isOverview ? 'border-blue-300 bg-blue-50/20' : ''}`}>
                      <div className="text-[9px] text-slate-400 font-black mb-1 uppercase tracking-[0.2em]">Worker A</div>
                      <div className="text-sm text-slate-800 font-black uppercase italic opacity-40">Local Instance</div>
                    </div>
                    <div className="bg-slate-50/50 h-24 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-[9px] text-slate-400 font-black mb-1 uppercase tracking-[0.2em]">Data Pipeline</div>
                      <div className="text-sm text-slate-800 font-black uppercase italic opacity-40">Shared Bus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[110%] -ml-[5%] h-4 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-[40px] border-t border-white/10 relative z-10"></div>
          <div className="w-1/4 mx-auto h-1.5 bg-slate-950 rounded-b-3xl"></div>
        </div>
      </div>

      {/* Right Side Devices - Nodes Focus */}
      <div className={`transition-all duration-1000 ease-in-out ${
        isCoreFocus ? 'w-0 opacity-0 translate-x-80 pointer-events-none' : isNodesFocus ? 'w-1/2 scale-110 translate-x-[-10%]' : 'w-[40%]'
      } h-full flex flex-col justify-around py-20 pl-20 relative z-10`}>
        
        {/* ZSOM-Mini (WiFi) */}
        <div className={`relative flex flex-col items-center transition-all duration-1000 ${isNodesFocus ? 'scale-110' : ''}`}>
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-40 flex flex-col items-center">
             <div className="flex flex-col items-center space-y-2">
                <div className={`w-14 h-1 border-t-2 border-blue-400 rounded-full transition-opacity duration-500 ${isNodesFocus ? 'opacity-100 animate-pulse' : 'opacity-20'}`}></div>
                <div className={`w-10 h-1 border-t-2 border-blue-400 rounded-full transition-opacity duration-500 ${isNodesFocus ? 'opacity-100 animate-pulse delay-100' : 'opacity-20'}`}></div>
                <div className={`w-6 h-1 border-t-2 border-blue-400 rounded-full transition-opacity duration-500 ${isNodesFocus ? 'opacity-100 animate-pulse delay-200' : 'opacity-20'}`}></div>
             </div>
          </div>
          <img 
            src={ASSETS.ZSOM_MINI} 
            alt="ZSOM-Mini" 
            className="w-52 h-auto object-contain transition-transform duration-1000 shadow-xl rounded-xl z-10"
          />
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></div>
               <span className={`block text-xl font-black tracking-[0.3em] uppercase transition-colors duration-500 ${isNodesFocus ? 'text-blue-600' : 'text-slate-900'}`}>ZSOM-Mini</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono mt-1 block tracking-widest uppercase">Connectivity: Wi-Fi AX Mesh</span>
          </div>
        </div>

        {/* ZSOM-Control (Ethernet) */}
        <div className={`relative flex flex-col items-center transition-all duration-1000 ${isNodesFocus ? 'scale-110' : ''}`}>
          <img 
            src={ASSETS.ZSOM_CONTROL} 
            alt="ZSOM-Control" 
            className="w-[280px] h-auto object-contain transition-transform duration-1000 shadow-xl rounded-xl z-10"
          />
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
               <span className={`block text-xl font-black tracking-[0.3em] uppercase transition-colors duration-500 ${isNodesFocus ? 'text-blue-600' : 'text-slate-900'}`}>ZSOM-Control</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono mt-1 block tracking-widest uppercase">Connectivity: Gigabit Eth / POE</span>
          </div>
        </div>

      </div>
      
    </div>
  );
};
