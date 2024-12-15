import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

export default function Pricing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "popup" });
    })();
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Early Bird Special
          </h2>
          <p className="text-xl text-gray-300">
            Be one of the first couples to get our complete Portugal wedding planning guide at a discounted price!
          </p>
        </div>   

        <div className="flex justify-center w-full">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 max-w-xl w-full">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complete Wedding Guide
                </h3>
                <p className="text-gray-400">
                  Everything you need to plan your dream wedding in Portugal
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg text-gray-400 line-through mb-1">$599</div>
                <div className="text-3xl font-bold text-blue-500">$299</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {/* Add your feature list here */}
            </div>

            <div className="space-y-4">
              <button 
                data-cal-namespace="30min"
                data-cal-link="arianeandkaran/30min"
                data-cal-config='{"layout":"popup"}'
                className="w-full btn text-lg py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >
                Get Your Guide Now
              </button>
              <p className="text-center text-sm text-gray-400">
                <span className="text-blue-500 font-semibold">Limited spots</span> at this price
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}