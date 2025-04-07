import { useState } from "react";

const useCases = [
  {
    title: "Seamless Integration.",
    description:
      "Easily integrate our payment solution into your business processes, saving time and resources on development.",
    icon: "🔧",
  },
  {
    title: "Flexible Customization.",
    description:
      "Tailor the software to fit your business needs. Our platform allows for quick customizations to align with your goals.",
    icon: "🎨",
  },
  {
    title: "Scale with Ease.",
    description:
      "Our solution grows with your business. Whether you're a small startup or a large enterprise, our software adapts to your needs.",
    icon: "📈",
  },
  {
    title: "Reliable Support.",
    description:
      "Get 24/7 support to ensure smooth operation. Our dedicated team helps you with setup, troubleshooting, and continuous improvements.",
    icon: "🛠️",
  },
];

const UseCasesSection = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="use-cases"
      className="w-full py-20 bg-gradient-to-r from-[#7B0A02] to-[#101010] flex flex-col items-center px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Simple, Flexible, and Scalable
      </h2>
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">
        Empower Your Business with Our Software
      </h3>
      <p className="text-white text-center mb-12 text-lg max-w-xl">
        A software solution that fits your needs, grows with your business, and provides full support throughout.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {useCases.map((card, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className="relative w-full h-72 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`w-full h-full transition-transform duration-500 relative`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center px-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gray-100 rounded-xl shadow-lg text-gray-700 p-6 flex flex-col justify-between transform rotate-y-180"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="flex-grow text-base md:text-lg leading-relaxed">
                    {card.description}
                  </p>
                  <button className="mt-4 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Learn more → 
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UseCasesSection;