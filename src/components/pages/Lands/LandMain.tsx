import useCheckBoxStore from "../../../store/CheckboxStore";
import CheckboxTable from "../../CheckboxTable/CheckboxTable";
import SelectState from "../../SelectState/SelectState";

export default function LandMain() {
  const handleRefresh = useCheckBoxStore((state) => state.refresh);

  return (
    <main className="w-screen h-[92vh] md:px-xPadLG px-xPadSM flex flex-col justify-center gap-8 overflow-hidden relative main_bg">
      <h1
        className="font-extrabold md:text-[54px] text-[38px] text-primary"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Available Properties
      </h1>

      <SelectState className="sm:w-full md:w-[566px]" />

      <div
        className="md:w-[566px] w-full h-[248px] bg-white flex flex-col items-start justify-between md:p-5 p-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <div className="w-full items-center flex justify-between">
          <p className="font-medium md:text-[19px] text-[16px]">Filter</p>
          <button
            className="w-fit bg-transparent border-0 outline-0 text-primary font-medium"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>

        <CheckboxTable />
      </div>
    </main>
  );
}
