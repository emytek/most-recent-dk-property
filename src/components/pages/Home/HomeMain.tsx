import SelectState from "../../SelectState/SelectState";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaMeta, FaXTwitter } from "react-icons/fa6";

export default function HomeMain() {
  return (
    <div className="w-screen h-[92vh] md:px-xPadLG px-xPadSM grid lg:grid-cols-[40%_1fr_7%] md:grid-cols-[40%_1fr] grid-cols-[1fr] lg:gap-[3%] gap-[2%] items-center justify-between overflow-hidden relative main_bg">
      <div className="flex flex-col gap-4">
        <p
          className="font-bold md:text-[22px] text-[19px] text-primary"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Best Property Platform
        </p>
        <p
          className="font-bold text-black md:text-titleLG text-titleSM"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Find Your Dream Property in Nigeria
        </p>
        <p
          className="font-normal text-[#31353b] md:text-textLG text-textSM tracking-[0.01em]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          We are the leading real estate agency in Lagos, offering a wide range
          of properties for sale, rent and lease.
        </p>

        <SelectState />
      </div>

      <div
        className="w-full h-[70%] overflow-hidden relative"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Image
          src="/assets/homeMainBg.png"
          alt="backgound image"
          preview={false}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full lg:flex hidden flex-col items-center justify-end gap-[1rem]">
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <FaMeta
            size={20}
            className="text-black transition-all duration-500 hover:text-primary"
          />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <FaInstagram
            size={20}
            className="text-black transition-all duration-500 hover:text-primary"
          />
        </Link>
        <Link
          to="https://twitter.com/"
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <FaXTwitter
            size={20}
            className="text-black transition-all duration-500 hover:text-primary"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/"
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          <FaLinkedinIn
            size={20}
            className="text-black transition-all duration-500 hover:text-primary"
          />
        </Link>
      </div>

      <div className="absolute left-[15%] opacity-60 top-[3%] z-[1] h-[23.5%] w-[1px] overflow-hidden">
        <Image src="/assets/lineOverlay.png" alt="line1" preview={false} />
      </div>

      <div className="absolute left-[30%] opacity-60 top-[3%] z-[1] h-[43.2%] w-[1px] overflow-hidden">
        <Image src="/assets/lineOverlay.png" alt="line2" preview={false} />
      </div>

      <div className="absolute left-[45%] opacity-60 top-[3%] z-[1] h-[86.9%] w-[1px] overflow-hidden">
        <Image src="/assets/lineOverlay.png" alt="line3" preview={false} />
      </div>
    </div>
  );
}
