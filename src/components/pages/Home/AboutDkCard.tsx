import { Image } from "antd";

interface IAboutDkCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  animation: string;
}

export default function AboutDkCard({
  description,
  animation,
  id,
  icon,
  title,
}: IAboutDkCard) {
  return (
    <div
      className="w-full h-[300px] bg-white border border-[#2222227e] md:p-5 p-4"
      data-aos={animation}
    >
      <div
        className="font-bold text-[16px] md:text-[18px] leading-snug"
        data-aos-delay="200"
        data-aos-once="false"
      >{`0${id}`}</div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          className="w-[70px]"
          src={icon}
          alt={title.toLowerCase()}
          preview={false}
        />

        <h4 className="text-[#00003f] font-bold text-[18px] md:text-[21px] text-center">
          {title}
        </h4>
        <p className="text-gray-500 font-normal text-[12px] md:text-[14px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
