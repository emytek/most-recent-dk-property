import useCheckBoxStore from "../../../store/CheckboxStore";
import CheckboxTable from "../../CheckboxTable/CheckboxTable";
import SelectState from "../../SelectState/SelectState";

export default function LandMain() {
  const handleRefresh = useCheckBoxStore((state) => state.refresh);

  return (
    <main className="w-screen flex p-7 flex-col items-center justify-center px-xPadSM md:px-xPadLG gap-8 overflow-hidden relative main_bg">
    <h1
      className="font-extrabold text-primary text-[38px] md:text-[54px] text-center"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      Available Properties
    </h1>

    {/* Container for SelectState and Filter Box */}
    <div className="w-full max-w-[700px] flex flex-col md:flex-row items-center md:items-start gap-6">
      <SelectState className="w-full md:w-[50%]" />

      <div
        className="w-full md:w-[50%] h-[248px] bg-white flex flex-col items-start justify-between md:p-5 p-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <div className="w-full flex justify-between items-center">
          <p className="font-medium text-[16px] md:text-[19px]">Filter</p>
          <button
            className="w-fit bg-transparent border-0 outline-0 text-primary font-medium"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>

        <CheckboxTable />
      </div>
    </div>
  </main>
  );
}
