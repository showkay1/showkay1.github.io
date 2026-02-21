import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 glass-panel border-b border-primary/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-primary/20 rounded flex items-center justify-center border border-primary/50">
              <span className="material-symbols-outlined text-primary">deployed_code</span>
            </div>
            <h2 className="text-xl font-bold tracking-widest text-primary">FINTECH<span className="text-white">_ARCHITECT</span></h2>
          </div>
          <nav className="hidden md:flex items-center gap-8 uppercase tracking-widest text-[10px] font-bold">
            <a className="text-primary border-b border-primary" href="#">Dashboard</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="#">Portfolio</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="#">Nodes</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="#">Vault</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-bold hover:bg-primary hover:text-white transition-all">
              SYSTEM STATUS: OPTIMAL
            </button>
            <div className="size-10 rounded-full border border-primary/50 p-0.5">
              <div className="w-full h-full rounded-full bg-cover bg-center" data-alt="User profile avatar circle" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV5wDcy5NZeHr36F6HopxqyjN1d8XG9wFi4qXK2aNRF8DbhDEonJ4BtUiXexlA01iEQrsxM0i0aEVSi-H_Q-4ENq04UtWLk8XVSeD6psFXP4_NGJeF2b9KMC_tO3QZlr2mc4Fm4JJ6LtVBhiq3_yrRV3e5uwZYFHf4tNmUQzcdQrWqBXdW7NtlKyG7bXUkeV9wttpZph2qS7fdHht7MnkiD3c-e3hxNteM4b0-i-C3pFhC5MhTP8oSllR3sxPM-bW3DZxIjTeZBN_k')" }}></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-12 gap-8">
        <aside className="col-span-12 lg:col-span-4 space-y-8">
          <div className="glass-panel p-8 rounded-xl glow-border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-6xl">qr_code_2</span>
            </div>
            <div className="relative z-10">
              <div className="flex flex-col items-center mb-6">
                <div className="size-32 rounded-xl border-2 border-primary p-1 mb-4">
                  <div className="w-full h-full rounded-lg bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" data-alt="Professional fintech architect headshot" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZDnkQGOnGmx1QCimPZdaxuxgn94PHSxdVbNQkq4qzTSg9ocEKFK7LYIcV04HhF1J3s0fFvpf10mt9MfNg7EzJkKuDdPZIqI2iFmZKw__bSspLG8WCVSSnyLMyBxEYmF8y9JMJmjR1wszmNxMXwnP2AoJwrneLv6FEKe2Quw-isdkbaGzyFYW730n0CINPrYQ19U2qCIHD-cZF7cr1S_pcjpFj6LKNMTBjbRLybG4LRA8-Go_Afj7yqSSpzT7KRpL3Ib4_dToemzlv')" }}></div>
                </div>
                <h1 className="text-2xl font-bold tracking-tight">김시호</h1>
                <p className="text-primary font-medium tracking-widest text-xs uppercase mt-1">Senior Systems Architect</p>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">work_history</span>
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">Experience</span>
                  </div>
                  <span className="text-primary font-bold">12+ YRS</span>
                </div>
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">school</span>
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">Education</span>
                  </div>
                  <span className="text-xs text-slate-400">MIT / Stanford</span>
                </div>
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">public</span>
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">Location</span>
                  </div>
                  <span className="text-xs text-slate-400">Singapore (HQ)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-xl space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase border-b border-primary/30 pb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              Professional Nodes
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-2.5 top-0 bottom-0 w-px bg-primary/20"></div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 size-5 bg-background-dark border border-primary rounded-full flex items-center justify-center">
                  <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-sm font-bold text-white">VP Engineering</h4>
                <p className="text-[10px] text-primary tracking-widest uppercase">Global Ledger Systems • 2021-Present</p>
                <p className="text-xs text-slate-400 mt-1">Architected zero-latency settlement protocol.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 size-5 bg-background-dark border border-slate-600 rounded-full flex items-center justify-center">
                  <div className="size-2 bg-slate-600 rounded-full"></div>
                </div>
                <h4 className="text-sm font-bold text-white">Lead AI Researcher</h4>
                <p className="text-[10px] text-slate-400 tracking-widest uppercase">Cyber-Quant Lab • 2018-2021</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Network Influence Area</p>
            <div className="h-32 bg-primary/5 rounded border border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="opacity-40 grayscale contrast-125" data-alt="Simplified world map with glowing nodes" data-location="world" style={{ backgroundImage: "url('https://placeholder.pics/svg/300')", backgroundSize: "cover" }}></div>
            </div>
          </div>
        </aside>

        <section className="col-span-12 lg:col-span-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white mb-2">CORE COMPETENCIES</h2>
              <p className="text-slate-400 max-w-xl">
                Synthesizing advanced cryptographic frameworks with neural market analysis to redefine the future of sovereign digital finance.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-primary/20 rounded border border-primary/40 text-center">
                <div className="text-primary font-bold text-lg">99.9%</div>
                <div className="text-[8px] text-white uppercase tracking-tighter">Uptime Architected</div>
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded border border-primary/40 text-center">
                <div className="text-primary font-bold text-lg">14+</div>
                <div className="text-[8px] text-white uppercase tracking-tighter">Patents Filed</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl group hover:glow-border-primary transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">token</span>
                </div>
                <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-slate-400">S-CLASS SKILL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Blockchain Engineering</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Expert in Layer-1 protocols, smart contract auditing, and DeFi liquidity pools architecture.</p>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span>Solidity / Rust</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span>ZK-Proofs</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl group hover:glow-border-primary transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-slate-400">EXPERT</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive AI</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Applying Deep Learning models to market sentiment analysis and high-frequency trading bot optimization.</p>
              <div className="flex items-end gap-1 h-12 mb-4">
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "40%" }}></div>
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "70%" }}></div>
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "90%" }}></div>
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "60%" }}></div>
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "85%" }}></div>
                <div className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300" style={{ height: "100%" }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 tracking-tighter">
                <span>MODEL ACCURACY</span>
                <span className="text-primary">94.2% EPSILON</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl group hover:glow-border-primary transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                </div>
                <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-slate-400">MASTER</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero-Trust Security</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Hardening fintech infrastructures through biometric authentication and multi-sig vault protocols.</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2 bg-white/5 rounded border border-white/5 group-hover:border-primary/20 transition-all">
                  <span className="material-symbols-outlined text-primary text-sm">key</span>
                  <span className="text-[9px] font-bold uppercase text-slate-300">Encryption</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/5 rounded border border-white/5 group-hover:border-primary/20 transition-all">
                  <span className="material-symbols-outlined text-primary text-sm">fingerprint</span>
                  <span className="text-[9px] font-bold uppercase text-slate-300">Biometrics</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl group hover:glow-border-primary transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-slate-400">ARCHITECT</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quant Architecture</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Designing high-performance data streams for real-time financial reporting and global bank nodes.</p>
              <div className="relative h-1 bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="absolute inset-y-0 left-0 bg-primary/60 w-3/4 animate-[pulse_2s_infinite]"></div>
              </div>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest text-center">Stream Processing: 1.2M TPS Capable</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Protocol Certifications</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">new_releases</span>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">AWS Certified</div>
                  <div className="text-[8px] text-slate-500 uppercase">Solutions Architect</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">shield</span>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">CISSP</div>
                  <div className="text-[8px] text-slate-500 uppercase">Security Professional</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">link</span>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">Hyperledger</div>
                  <div className="text-[8px] text-slate-500 uppercase">Certified Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 glass-panel border-t border-primary/20 py-2 px-6 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Server-01: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-green-500 rounded-full"></div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Network Latency: 4ms</span>
            </div>
          </div>
          <div className="text-[9px] font-bold text-primary/60 tracking-[0.3em] uppercase">
            Encrypted Session: v8.4.2_Sterling
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
