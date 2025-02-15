import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface IPaginationBtns {
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  noOfItems: number;
  pageNo: number;
}

export default function PaginationBtns({
  setPageNo,
  noOfItems,
  pageSize,
  pageNo,
}: IPaginationBtns) {
  const totalPages = Math.ceil(noOfItems / pageSize);

  const handleNext = () => {
    const no = Math.ceil(noOfItems / pageSize);
    alert(no);
    setPageNo((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setPageNo((prev) => prev - 1);
  };
  return (
    <div className="w-full flex items-center justify-center mx-auto gap-5">
      <button
        type="button"
        onClick={handlePrevious}
        className="w-9 aspect-square rounded-[5px] flex items-center justify-center outline-0 border border-primary bg-primary disabled:bg-slate-500 disabled:border-slate-500 disabled:cursor-not-allowed text-white my-7"
        disabled={pageNo === 0}
      >
        <FaAngleDoubleLeft size={20} />
      </button>

      <span>
        Page {pageNo + 1} of {totalPages}
      </span>

      <button
        type="button"
        onClick={handleNext}
        className="w-9 aspect-square rounded-[5px] flex items-center justify-center outline-0 border border-primary bg-primary disabled:bg-slate-500 disabled:border-slate-500 disabled:cursor-not-allowed text-white"
        disabled={pageNo + 1 >= totalPages}
      >
        <FaAngleDoubleRight size={20} />
      </button>
    </div>
  );
}
