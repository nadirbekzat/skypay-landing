import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clients = [
  { name: "PayPal", logo: "/images/client_logo/paypal_logo.png" },
  { name: "Google Pay", logo: "/images/client_logo/google_pay_logo.png" },
  { name: "Apple Pay", logo: "/images/client_logo/apple_pay_logo.png" },
  { name: "Samsung Pay", logo: "/images/client_logo/samsung_pay_logo.png" },
  { name: "VISA", logo: "/images/client_logo/visa_logo.png" },
  { name: "MasterCard", logo: "/images/client_logo/mastercard_logo.png" },
  { name: "Stripe", logo: "/images/client_logo/stripe_logo.png" },
  { name: "Bitcoin", logo: "/images/client_logo/bitcoin_logo.png" },
  { name: "Discover", logo: "/images/client_logo/discover_logo.png" },
  { name: "Bitpay", logo: "/images/client_logo/bitpay_logo.png" },
  { name: "Amazon Pay", logo: "/images/client_logo/amazon_pay_logo.png" },
  { name: "Klarna", logo: "/images/client_logo/klarna_logo.png" },
  { name: "Shop Pay", logo: "/images/client_logo/shop_pay_logo.png" },
  { name: "American Express", logo: "/images/client_logo/american_express_logo.png" },
  { name: "Open Sea", logo: "/images/client_logo/open_sea_logo.png" },
  { name: "Western Union", logo: "/images/client_logo/western_union_logo.png" },
  { name: "Skrill", logo: "/images/client_logo/skrill_logo.png" },
  { name: "Union Pay", logo: "/images/client_logo/union_pay_logo.png" },
  { name: "Payoneer", logo: "/images/client_logo/payoneer_logo.png" },
  { name: "Cash App", logo: "/images/client_logo/cash_app_logo.png" },
  { name: "Gumroad", logo: "/images/client_logo/gumroad_logo.png" },
  { name: "Money Gram", logo: "/images/client_logo/money_gram_logo.png" },
  { name: "Square", logo: "/images/client_logo/square_logo.png" },
  { name: "Ethereum", logo: "/images/client_logo/ethereum_logo.png" },
  { name: "Alipay", logo: "/images/client_logo/alipay_logo.png" },
  { name: "Metamask", logo: "/images/client_logo/metamask_logo.png" },
];

// Разделим клиентов на 2 массива
const half = Math.ceil(clients.length / 2);
const firstHalf = clients.slice(0, half);
const secondHalf = clients.slice(half);

const ClientSwiper = ({ items }: { items: typeof clients }) => (
  <Swiper
    slidesPerView="auto"
    spaceBetween={20}
    loop={true}
    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
    speed={5000}
    modules={[Autoplay]}
    className="swiper-container"
  >
    {items.map((client, index) => (
      <SwiperSlide key={index} className="!w-[180px] flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-16 w-auto object-contain"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const ClientSection = () => {
  return (
    <section id="clients" className="w-full py-16 bg-gradient-to-r from-[#7B0A02] to-[#101010] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Payment Providers that Offer their Payment Services via SkyPay
      </h2>

      <div className="w-full px-4 space-y-10">
        <ClientSwiper items={firstHalf} />
        <ClientSwiper items={secondHalf} />
      </div>
    </section>
  );
};

export default ClientSection;