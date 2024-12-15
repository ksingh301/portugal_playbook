import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Coffee, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  useEffect(() => {
    const initializeCal = async () => {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", { hideEventTypeDetails: false, layout: "week_view" });
      } catch (error) {
        console.error("Failed to initialize Cal.com API:", error);
      }
    };

    initializeCal();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 opacity-95" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
          Let's Chat About Your Dream Wedding
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Grab a coffee and join us for a casual chat. We'll answer all your questions about 
          venues, budgets, traditions—anything you're curious about. No sales pitch, just 
          real talk from people who've been in your shoes.
        </p>
        <button
          data-cal-namespace="30min"
          data-cal-link="arianeandkaran/30min"
          data-cal-config='{"layout":"month_view"}'
          className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-white/25"
        >
          <Coffee className="mr-2 w-5 h-5" />
          Book Your Free Coffee Chat
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );