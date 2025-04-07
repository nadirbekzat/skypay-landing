const reviews = [
  {
    name: "Emily Chen",
    country: "Singapore",
    initials: "EC",
    title: "SkyPay streamlined our global payment flows",
    text: "As a fintech startup, integrating SkyPay's platform saved us months of development. The onboarding was fast, and their API is incredibly flexible for our needs.",
    photo: "/images/client_reviews/review1.jpg",
  },
  {
    name: "Luis Martínez",
    country: "Mexico",
    initials: "LM",
    title: "Excellent support and reliability",
    text: "We’ve been using SkyPay as our primary PSP infrastructure provider for over a year. Their uptime is excellent and the support team is responsive 24/7.",
    photo: "/images/client_reviews/review2.png",
  },
  {
    name: "Anna Petrova",
    country: "Russia",
    initials: "AP",
    title: "Perfect for scaling our SaaS solution",
    text: "SkyPay enabled us to offer secure payments to our own clients across Europe and Asia. Their modular system fits perfectly with our SaaS model.",
    photo: "/images/client_reviews/review3.jpg",
  },
  {
    name: "Tobias Müller",
    country: "Germany",
    initials: "TM",
    title: "Fast integration and enterprise-grade tools",
    text: "SkyPay helped us expand into new markets with ease. The analytics and fraud protection features are exactly what we needed for enterprise clients.",
    photo: "/images/client_reviews/review4.jpg",
  },
];

const ReviewSection = () => {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-r from-[#7B0A02] to-[#101010] py-16 px-4 flex flex-col items-center w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        What our partners say
      </h2>
      <p className="text-center text-white mb-12 text-lg">
        Real stories from companies using our infrastructure
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full"
          >
            <div>
              <div className="text-4xl text-gray-300 mb-2 leading-none">“</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {review.title}
              </h3>
              <p className="text-gray-600">{review.text}</p>
            </div>
            <div className="flex items-center mt-6">
              <img
                src={review.photo}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover mr-4 border border-gray-300"
              />
              <div className="text-gray-700 text-sm">
                <p>{review.name}</p>
                <p className="text-xs text-gray-500">{review.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;