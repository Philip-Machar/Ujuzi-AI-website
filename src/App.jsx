import React from "react";
import "./App.css";

const howItWorksSteps = [
  {
    icon: "📱",
    title: "Connect",
    description: "SMS or call our Ujuzi AI line."
  },
  {
    icon: "💬",
    title: "Ask",
    description: "Ask your question in Swahili, Sheng, or local language."
  },
  {
    icon: "⚡",
    title: "Get Answer",
    description: "Instantly receive an AI-powered answer—voice or text."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] to-[#252a3a] text-white font-sans flex flex-col">
      {/* Top Navigation Bar - Beautiful, Modern */}
      <header className="sticky top-0 z-20 bg-[rgba(26,31,46,0.95)] backdrop-blur-xl border-b border-white/10 px-8 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-[#00ff88] animate-pulse shadow-glow"></span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00ff88] drop-shadow-glow">Ujuzi AI</h1>
        </div>
        <span className="hidden md:inline text-[#8b9bb4] font-medium text-base border-b-2 border-[#00ff88] pb-1 px-3 rounded transition-all duration-200">AI for Everyone. Everywhere.</span>
      </header>

      {/* Hero Section - Beautiful, Modern */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden" style={{background: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)"}}>
        {/* Animated mesh accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/2 top-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/3 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,255,136,0.12)_0deg,transparent_60deg,transparent_300deg,rgba(0,255,136,0.12)_360deg)] rounded-full blur-3xl animate-spin-slow" style={{animationDuration: '16s'}}></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-glow">Bridging the Digital Divide in Africa</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-[#8b9bb4] mb-6 font-medium">Ujuzi AI is revolutionizing access to intelligence by delivering the power of AI to any phone, in any local language, without needing internet, smartphones, or even literacy.</p>
          <blockquote className="italic text-[#00ff88] text-xl md:text-2xl font-semibold mb-6">“The Future of AI is Not Just Online”</blockquote>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#8b9bb4] mb-8">Whether you're a farmer, a parent, or a student in a rural village—Ujuzi AI answers your questions in Swahili, Sheng, or your local dialect. Just send a text or make a call using a basic 2G feature phone, and our voice- or SMS-powered assistant responds instantly—no data bundles required.</p>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8 md:py-12">
        <div className="bg-[#252a3a] rounded-2xl p-8 flex flex-col items-center border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#00ff88]/10">
            <span className="text-2xl" role="img" aria-label="Agriculture">🌾</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-[#00ff88] text-center">Agriculture</h3>
          <p className="text-[#8b9bb4] text-base text-center">Get pest control, weather tips & market prices</p>
        </div>
        <div className="bg-[#252a3a] rounded-2xl p-8 flex flex-col items-center border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#00ff88]/10">
            <span className="text-2xl" role="img" aria-label="Health">🩺</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-[#00ff88] text-center">Health</h3>
          <p className="text-[#8b9bb4] text-base text-center">Understand symptoms, access prevention info, find nearby clinics</p>
        </div>
        <div className="bg-[#252a3a] rounded-2xl p-8 flex flex-col items-center border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#00ff88]/10">
            <span className="text-2xl" role="img" aria-label="Education">📚</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-[#00ff88] text-center">Education</h3>
          <p className="text-[#8b9bb4] text-base text-center">AI-powered answers to student questions in plain local language</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#2d3548] rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col gap-2 hover:shadow-2xl transition-shadow duration-200">
          <h4 className="text-lg font-semibold text-[#00ff88] mb-2">Voice-Enabled</h4>
          <p className="text-[#8b9bb4]">Speak to Ujuzi AI in Swahili—perfect for non-literate users</p>
        </div>
        <div className="bg-[#2d3548] rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col gap-2 hover:shadow-2xl transition-shadow duration-200">
          <h4 className="text-lg font-semibold text-[#00ff88] mb-2">Access AI. Without Changing Your Phone.</h4>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[#8b9bb4] text-base md:text-lg">Works on any device—from feature phones to smartphones</span>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center flex flex-col items-center">
        <blockquote className="text-xl md:text-2xl font-semibold text-[#00ff88] mb-4 max-w-2xl">“Ujuzi AI could be the most important tool in making Africa’s digital future truly equitable.”</blockquote>
      </section>

      {/* How It Works - Redesigned */}
      <section className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 flex flex-col items-center bg-[#23273a] rounded-2xl border border-[#00ff88]/20 shadow-xl mb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(circle at 80% 20%, rgba(0,255,136,0.08) 0, transparent 70%)"}}></div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center relative z-10">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">
          {howItWorksSteps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center bg-[#252a3a] rounded-xl p-8 border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-200">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00ff88]/15 mb-4 text-3xl">{step.icon}</div>
              <h4 className="text-lg font-semibold text-[#00ff88] mb-2">{step.title}</h4>
              <p className="text-[#8b9bb4] text-base text-center">{step.description}</p>
              {idx < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#00ff88] to-transparent opacity-40" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Redesigned */}
      <section id="try" className="max-w-3xl mx-auto px-4 py-14 md:py-20 text-center flex flex-col items-center bg-gradient-to-br from-[#23273a] to-[#252a3a] rounded-2xl border border-[#00ff88]/20 shadow-xl mb-12">
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience Ujuzi AI</h4>
        <p className="text-[#8b9bb4] text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-2">Experience the future of accessible knowledge for everyone, everywhere.</p>
        <div className="flex flex-col gap-1 mt-2">
          <span className="text-[#8b9bb4] text-base md:text-lg">No internet required</span>
          <span className="text-[#8b9bb4] text-base md:text-lg">No apps to install</span>
          <span className="text-[#8b9bb4] text-base md:text-lg">No English needed</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#6b7280] text-sm py-6 border-t border-white/10 mt-auto flex flex-col items-center gap-2">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center mb-1">
          <a href="tel:+254795568537" className="hover:text-[#00ff88] transition-colors duration-150">📞 +254795568537</a>
          <span className="hidden md:inline">|</span>
          <a href="mailto:philipmachar788@gmail.com" className="hover:text-[#00ff88] transition-colors duration-150">✉ philipmachar788@gmail.com</a>
        </div>
        <div>&copy; {new Date().getFullYear()} Ujuzi AI. All rights reserved.</div>
      </footer>
    </div>
  );
}
