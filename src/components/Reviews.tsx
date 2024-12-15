interface ReviewsProps {
  showReviews: boolean;
}

export default function Reviews({ showReviews }: ReviewsProps) {
  const reviews = [
    {
      name: "Sarah & John",
      location: "Sintra Palace",
      text: "Planning our wedding in Portugal seemed daunting at first, but their guidance made everything so smooth. The venue recommendations were perfect!",
      rating: 5,
      image: "/images/review1.jpg"
    },
    {
      name: "Maria & Tom",
      location: "Algarve Coast",
      text: "Their local knowledge and vendor connections saved us so much time and money. Our beach wedding was exactly what we dreamed of.",
      rating: 5,
      image: "/images/review2.jpg"
    },
    {
      name: "Ana & David",
      location: "Douro Valley",
      text: "The attention to detail and cultural insights made our vineyard wedding truly special. Our guests are still talking about it!",
      rating: 5,
      image: "/images/review3.jpg"
    }
  ];

  if (!showReviews) return null;

  return (
    <section className="py-24 bg-gray-950">
      <div className="container">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          What Our Couples Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8
              hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}