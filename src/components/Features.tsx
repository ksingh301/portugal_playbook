import { CheckCircleIcon, ClipboardDocumentListIcon, CalendarIcon, UserGroupIcon, DocumentDuplicateIcon, TruckIcon, ShieldCheckIcon, GlobeAltIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const features = [
  {
    title: "Vendor Recommendation List",
    description: "How to spot the rockstar vendors (and avoid the duds) for your wedding in Portugal. Bartenders who pour heavy, photographers who actually listen, and DJs who don’t play “YMCA.”",
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Budget Planning Guide",
    description: "Real talk about how to stretch your euros without skimping on the good stuff.",
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Vendor Contract Tips",
    description: "What to ask for, what to demand, and what to avoid when signing contracts in Portugal. Because no one likes hidden fees or vague promises.",
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Planning Timeline Guide",
    description: "When to book, when to freak out, and how to stay ahead without losing your cool.",
    icon: <CalendarIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Guest List Management Tips",
    description: "How to handle RSVPs, flaky guests, and that one uncle who still sends letters.",
    icon: <UserGroupIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Seating Chart Planning Guide",
    description: "Who sits where without causing drama—or awkward run-ins.",
    icon: <DocumentDuplicateIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Menu Planning Guide",
    description: "A no-nonsense way to nail your food and drink plan, with examples, costs, and tips to impress your guests without bankrupting yourself.",
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Guest Accommodation Guide",
    description: "How to make sure your guests have somewhere to crash—from villa rentals to nearby hotels—without you playing travel agent.",
    icon: <TruckIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Transportation Logistics Guide",
    description: "Tips for getting people from Point A to the party—buses, vans, or maybe even a tuk-tuk if you’re feeling fancy.",
    icon: <TruckIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Legal Requirements Checklist",
    description: "What paperwork you actually need to get married in Portugal. Because no one wants to find out they’re not legally hitched.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Cultural Wedding Tradition Guide",
    description: "How to sprinkle in Portuguese traditions or Indian wedding vibes without making it a mishmash mess.",
    icon: <GlobeAltIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Day-of-Wedding Timeline Guide",
    description: "Keep the day on track, from hairdos to the dance floor. Plus, a cheat sheet so you’re not the one answering questions.",
    icon: <ClockIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Vendor Communication Guide",
    description: "How to talk to vendors like a boss: no ghosting, no miscommunication, no problems.",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Post-Wedding Task Checklist",
    description: "Everything you need to wrap it up, pay people, and actually enjoy being married.",
    icon: <CheckCircleIcon className="h-6 w-6 text-blue-400" />
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Cheat Codes to Your Dream Wedding
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            This isn't just a guide—it's a fast-pass to your dream wedding, complete with insider tips we wish someone told us.
          </p>
        </div>

        <div className="relative">
          <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto space-x-4 md:space-x-0">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 w-64 md:w-auto">
                <div className="flex items-center">
                  {feature.icon}
                  <h3 className="ml-4 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none md:hidden"></div>
        </div>
      </div>
    </section>
  );
}