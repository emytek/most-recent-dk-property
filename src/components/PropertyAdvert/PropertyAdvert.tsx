import { Link } from "react-router-dom";

export default function PropertyAdvert() {
  return (
    <div className="w-full grid md:grid-cols-[450px_1fr] grid-cols-1 items-center gap-16 my-10">
      <div className="w-full h-[400px] rounded-[20px] relative bg-[url('/assets/apartment1.png')] bg-center bg-cover bg-no-repeat">
        <div className="absolute top-5 left-5 flex items-center justify-center bg-[#00000082] rounded-[5px] border border-white">
          <p className="text-white text-[20px] p-2">3D</p>
        </div>
      </div>

      <div className="flex flex-col md:gap-7 gap-4">
        <h2 className="font-bold md:text-[54px] text-[30px]">
          Not found what you are looking for?
        </h2>
        <p className="md:text-[25px] text-[18px]">
          Let us know your preference and our business team will reach out to
          you with what matches your request.
        </p>
        <Link to="/contact-us">
          <button
            type="button"
            className="w-fit h-[40px] bg-primary text-white rounded-[5px] text-[18px] font-medium capitalize px-8 py-2 border border-primary transition-all duration-500 hover:bg-white hover:text-primary active:scale-[0.95]"
          >
            Tell Us
          </button>
        </Link>
      </div>
    </div>
  );
}
