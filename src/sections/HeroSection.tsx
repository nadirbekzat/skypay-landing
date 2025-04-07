const HeroSection = ({ onGetStartedClick }: { onGetStartedClick: () => void }) => {
  return (
    <section id="hero" className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#7B0A02] to-[#101010] pt-40">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Левая часть - заголовок и кнопка */}
        <div className="lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="text-5xl font-bold">Secure & Fast Payment Solutions</h1>
          <p className="mt-4 text-lg text-gray-200">
            Empower your business with seamless transactions
          </p>
          <button
            className="mt-6 bg-red-500 px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition"
            onClick={onGetStartedClick}
          >
            Get Started
          </button>
        </div>

        {/* Правая часть - изображение */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img 
            src="/images/card1.png" 
            alt="Laptop Dashboard" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
