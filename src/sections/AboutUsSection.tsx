const AboutUsSection = () => {
  return (
    <section id="about-us" className="w-full py-16 bg-gradient-to-r from-[#7B0A02] to-[#101010] flex justify-center">
      <div className="w-full max-w-6xl px-6">
        {/* Заголовок */}
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Why SkyPay?
        </h2>

        {/* Контейнер для карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Карточка 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-black">
              Uninterrupted payment and high conversion
            </h3>
            <p className="text-gray-600 mt-2">
              Flexible routing and cascading allow you to distribute payments correctly and reduce the rate of declined payments.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-black">
              Analytics and payment information 24/7
            </h3>
            <p className="text-gray-600 mt-2">
              Track your project's key payment metrics to learn more about your customers and make effective business decisions.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-black">
              Customisation in 1 day
            </h3>
            <p className="text-gray-600 mt-2">
              We create customised solutions that perfectly fit your business - from checkout setup to specialised reports. And you get it all in 1 day.
            </p>
          </div>

          {/* Карточка 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-black">
              Fast onboarding
            </h3>
            <p className="text-gray-600 mt-2">
              One-day setup, personal account manager, and 24/7 support. Get access to our modern payment solutions today and start accepting payments without delay.
            </p>
          </div>

          {/* Карточка 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-black">
              Seamless integration with your systems
            </h3>
            <p className="text-gray-600 mt-2">
              Our technical team will ensure quick integration with your business processes and technology. You'll be able to start accepting payments the very next day.
            </p>
          </div>

          {/* Карточка 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-black">
              Focus on your business development
            </h3>
            <p className="text-gray-600 mt-2">
              We take into account your business goals and create new features that will help you grow. Your needs shape our product development plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;