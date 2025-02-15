import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { aboutData } from "../../../data/data";
import AboutDkCard from "./AboutDkCard";
import { Image } from "antd";
import LeftOverlay from "/assets/curve-left-overlay.png";
import RightOverlay from "/assets/curve-right-overlay.png";

export default function AboutDK() {
  return (
    <div className="w-screen bg-white my-8 md:px-xPadLG px-xPadSM flex flex-col gap-6 relative">
      <div className="w-full grid md:grid-cols-[40%_1fr] grid-cols-1 gap-5">
        <p
          className="font-bold md:text-[35px]"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once="false"
        >
          Your Reach Get the Best Deals in Nigerian with Our Exclusive Offers in{" "}
          <span className="text-primary">D&apos;keralutive</span>
        </p>

        <div
          className="font-light md:text-[19px] text-[15px]"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once="false"
        >
          <FaQuoteLeft />
          <p>
            We have access to some of the most attractive and affordable
            properties in Lagos, thanks to our strong network of partners and
            contacts. Whether you are looking for a luxury villa, a cozy
            apartment, or a spacious office, we have something for you. Contact
            us today and get the best deals on Lagos homes.
          </p>
          <FaQuoteRight />
        </div>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5 mt-7">
        {aboutData.map((data) => (
          <AboutDkCard key={data.id} {...data} />
        ))}
      </div>

      <div className="absolute left-[0px] top-[0px] h-[350px] w-[180px] opacity-80">
        <Image src={LeftOverlay} alt="overlayLeft" preview={false} />
      </div>

      <div className="absolute right-[0px] top-[0px] h-[450px] w-[280px] opacity-80">
        <Image src={RightOverlay} alt="overlayRight" preview={false} />
      </div>
    </div>
  );
}
