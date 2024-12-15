export default function Footer() {
  const features = [
    {
      title: "What's in the guide?",
      description: "All our notes, templates, timelines, tips, and vendor recommendations—everything you need to plan your perfect day."
    },
    {
      title: "What's the free consultation?",
      description: "A casual chat where you can ask us anything. No sales pitch, just honest advice from people who've been there."
    },
    {
      title: "Why trust us?",
      description: "Because we actually did this and lived to tell the tale. We're sharing real experiences, not theoretical advice."
    }
  ];

  return (
    <footer className="bg-gray-900 py-24">
      <div className="container">
        {/* Feature Boxes */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 
              hover:bg-gray-800/70 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Chat About Your Dream Wedding
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Grab a coffee and join us for a casual chat. We'll answer all your questions about venues, 
            budgets, traditions—anything you're curious about. No sales pitch, just real talk from 
            people who've been in your shoes.
          </p>
          <button
            data-cal-namespace="30min"
            data-cal-link="arianeandkaran/30min"
            data-cal-config='{"layout":"popup"}'
            className="btn mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            Book your free Coffee Chat
          </button>
        </div>

        {/* Footer Grid */}
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Portugal Wedding Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}