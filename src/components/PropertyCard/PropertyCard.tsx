import { FaArrowRight } from "react-icons/fa6";
import formatCurrency from "../../utils/FormatCurrency";

type IProductCard = PropertyDescriptionProps & {
  isLoading: boolean;
};

export default function PropertyCard({
  description,
  id,
  location,
  amount,
  imagesList,
  currency,
}: IProductCard) {
  const getAProperty = async (id: number) => {
    alert(id);
  };
  return (
    <div
      className="w-full md:h-[350px] h-[360px] rounded-[7px] bg-cover bg-center bg-no-repeat md:p-5 p-4 relative flex items-end"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent,  #00000073, #000000e0), url(${imagesList[0].imageUrl})`,
      }}
    >
      {amount && (
        <p className="absolute top-3 left-3 flex items-center gap-2 bg-[#00000082] border border-white rounded-[5px] py-[5px] px-[10px] font-medium text-[15px] text-center text-white">
          {formatCurrency(currency, amount)}
        </p>
      )}

      <div className="w-full flex items-center justify-between gap-3 text-white">
        <div>
          {description && (
            <h3 className="capitalize md:text-[18px] text-[16px] font-medium">
              {description}
            </h3>
          )}
          {location && (
            <p className="capitalize md:text-[16px] text-[14px] font-medium">
              {location}
            </p>
          )}
        </div>

        <button
          className="md:w-[55px] w-[40px] aspect-square flex items-center justify-center bg-[#ffffff17] border-[2px] border-white rounded-[19px]"
          onClick={() => getAProperty(id)}
        >
          <FaArrowRight size={20} className="" />
        </button>
      </div>
    </div>
  );
}
