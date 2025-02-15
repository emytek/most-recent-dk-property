import { Spin } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ICategoryCard {
  category: string;
  count: number;
  image: string;
  link: string;
  animation: string;
  loading: boolean;
}

export default function CategoryCard({
  animation,
  category,
  count,
  image,
  link,
  loading,
}: ICategoryCard) {
  const renderCategory = (category: string) => {
    if (category == "PROLAN") return "Lands";
    if (category == "PROAPA") return "Apartments";
    else return "Shortlets";
  };
  return (
    <Link
      to={link}
      className="w-full"
      data-aos={animation}
      aos-duration="600"
      data-aos-offset="150"
    >
      <Spin spinning={loading}>
        <div
          className="w-full md:h-[430px] h-[400px] rounded-[20px] bg-cover bg-center bg-no-repeat md:p-[20px] p-[14px] transition-all duration-500 hover:shadow-2xl shadow-[#0000006b] relative flex items-end"
          style={{
            backgroundImage: `linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0),
    #000000
  ), url(${image})`,
          }}
        >
          <div className="text-white w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] md:text-[18px]">
                {renderCategory(category)}
              </p>
              <p className="font-light md:text-[14px] text-[12px]">{`${
                count ? count : 0
              } Available`}</p>
            </div>

            <span className="w-[50px] aspect-square bg-[#ffffff1f] border-[2px] border-[white] shadow-lg shadow-[#0000002a] backdrop-blur-[13px] rounded-[19px] grid place-content-center">
              <FaArrowRight size={21} className="text-white" />
            </span>
          </div>
        </div>
      </Spin>
    </Link>
  );
}
