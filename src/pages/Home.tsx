import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import GetStartedModal from "../components/GetStartedModal";
import AboutUsSection from "../sections/AboutUsSection";
import ClientSection from "../sections/ClientSection";
import UseCasesSection from "../sections/UseCasesSection";
import ReviewSection from "../sections/ReviewSection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center relative">
      <Navbar onGetStartedClick={() => setShowModal(true)} />
      <HeroSection onGetStartedClick={() => setShowModal(true)} />
      <ClientSection />
      <AboutUsSection />
      <UseCasesSection />
      <ReviewSection />
      {/* Модальное окно будет отрендерено поверх всего, но без затемнения фона */}
      <GetStartedModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;