import { Image } from "antd";
import { Link } from "react-router-dom";

export default function FeaturedListing() {
  return (
    <div className="my-5 w-screen flex flex-col items-center justify-center gap-8 overflow-x-hidden md:p-xPadLG p-xPadSM">
      <h2 className="font-bold md:text-[35px] text-[25px]" data-aos="fade-up">
        Featured Listing of the Week
      </h2>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
        <Image
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="service-pic-1"
          preview={false}
        />

        <div className="w-full flex flex-col gap-3">
          <h2
            className="font-bold text-[20px] md:text-[30px]"
            data-aos="fade-up"
          >
            Book an Inspection Today and Find Your Dream Property
          </h2>

          <p
            className="text-muted-200 text-[13px] md:text-[17px] text-justify"
            data-aos="fade-up"
          >
            If you are interested in any of our properties, you can book an
            inspection online and visit them in person. You can also contact us
            by phone or email and we will arrange a convenient time for you. Our
            agents will guide you through the features and benefits of each
            property and answer any questions you may have. Don’t miss this
            opportunity to find your dream property in Lagos. Book an inspection
            today and get ready to move in.
          </p>

          <Link
            to="/contact-us"
            className="mx-auto w-fit px-8 py-2 bg-primary text-white font-semibold rounded-[5px] transition-all duration-500 hover:bg-white hover:text-primary hover:border hover:border-primary text-[13px]"
            data-aos="fade-up"
          >
            YES! I WANT BOOK “OFFICE PACKAGE”
          </Link>
        </div>
      </div>
    </div>
  );
}
