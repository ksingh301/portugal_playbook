import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "popup" });
    })();
  }, []);

  return (
    <section 
      className="hero relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-16 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url('/images/hero.jpg')`
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We Planned the Ultimate Wedding in Portugal—Now We're Handing You the Playbook
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            A wedding guide <i>we wish</i> we had: a step-by-step plan to avoid the stress, chaos, and overpriced nonsense. 
            First, get a free half hour of expert advice—no strings attached.
          </p>
          <button
            data-cal-namespace="30min"
            data-cal-link="arianeandkaran/30min"
            data-cal-config='{"layout":"popup"}'
            className="btn mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 hover:scale-105 transition duration-300 ease-in-out"
          >
            Claim Your Free 30 Minute Wedding Consultation
          </button>
          <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl border border-white/10 text-left relative overflow-hidden">
            <span 
              className="absolute text-white/[0.03] text-[180px] font-serif leading-none -top-8 -left-4 select-none"
              style={{ fontFamily: 'Baskerville, "Libre Baskerville", serif' }}
            >
              "
            </span>
            <p className="text-gray-200 leading-relaxed relative z-10">
              We're just like you—two people who wanted the perfect wedding in Portugal but had no idea where to start. 
              So we figured it out the hard way: a three-day multicultural event, 4 locations, crazy vendor negotiations, 
              and all the roadblocks you can imagine. Now, we're sharing it all so you don't have to reinvent the wheel.
            </p>
            <div className="mt-6 flex items-center gap-3 relative z-10">
              <span className="text-blue-300 font-medium">- Ariane & Karan</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">Married in Sintra, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}