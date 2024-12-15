import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What’s in the wedding guide?",
    answer: "Everything you need, nothing you don’t. Venue databases, vendor contacts, negotiation templates, budget expectations, cultural hacks, and timeline examples. Think of it as your wedding MBA. We built the guide we wish existed when we were in the trenches."
  },
  {
    question: "Does this guide replace a wedding planner?",
    answer: "No. Wedding planners are valuable, but let’s face it—they’re running a scalable operation. Most are juggling 5–10 weddings a month and default to rinsing and repeating what’s worked before. You become “Wedding #6” on the docket. This guide? It’s your playbook for building a wedding that’s one-of-one. Use it to explore unique options that a planner may not have the bandwidth—or incentive—to help you uncover."
  },
  {
    question: "Why explore this guide before hiring a planner?",
    answer: "Most planners aren’t bad—they’re just scaling a business. They have templates, systems, and relationships they lean on to get the job done efficiently. This guide flips the script. It’s about giving you the tools to create a wedding that feels truly yours, with the freedom to explore options a planner may not push for. Start here to get the full lay of the land before handing over the reins."
  },
  {
    question: "How does the free consultation work?",
    answer: "It’s a no-fluff, 30-minute video call. We’ll help you understand the landscape, answer your questions, and offer insights specific to your wedding vision. No sales pitch—just straightforward advice to help you hit the ground running."
  },
  {
    question: "Why is this guide useful before meeting with a planner or vendors?",
    answer: "It puts you in the driver’s seat. The guide gives you a lay of the land—what to question, what prices to expect, and where you can push back. Instead of being a yes-man or yes-woman during conversations with planners or vendors, you’ll walk in informed, confident, and ready to make decisions that work for you."
  },
  {
    question: "Can you handle specific regions in Portugal?",
    answer: "100%. Whether it’s Sintra’s castles, Algarve’s beaches, or Douro Valley’s vineyards, this is about giving you a framework to make informed decisions. We documented the exact processes, hacks, and vendors we used to plan a meaningful, streamlined event. It’s bundled up to save you hours of research and trial-and-error. Think of it as the cliff notes for wedding planning in Portugal."
  },
  {
    question: "Why is this guide different from others?",
    answer: "Transparency. Most planners are only motivated by vendor relationships (and the kickbacks that come with them). This guide skips the fluff and focuses on giving you access to the widest range of options. Real prices, negotiation tips, and practical advice straight from the trenches of planning a multicultural wedding in Portugal."
  },
  {
    question: "How do you handle cultural considerations?",
    answer: "Weddings are about connection—across families, cultures, and traditions. We show you how to mix and match cultural elements, work with local vendors, and keep everyone (including family) on the same page. Real examples, real success stories, no drama."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Everything you need to know about planning your dream wedding in Portugal
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-800/20 hover:bg-gray-800/30 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for?
          </p>
          <a href="mailto:arianeandkaran@gmail.com?subject=Portugal%20Wedding%20Guide%20Question" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl
            hover:bg-blue-600 transition-colors font-medium">
            Ask Us Directly
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}