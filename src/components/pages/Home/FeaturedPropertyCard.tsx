import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Modal } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IFeaturedPropertyCard {
  description: string;
  imagesList: { id: number; imageUrl: string }[];
  amount: number;
  currency: string;
  productSize: string;
  location: string;
  imageUrl: string; // This contains the video URL
  loading?: boolean;
}

export default function FeaturedPropertyCard({
  description,
  imagesList,
  amount,
  currency,
  productSize,
  location,
  imageUrl, // This may contain a video
}: IFeaturedPropertyCard) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaList, setMediaList] = useState<{ type: string; url: string }[]>(
    []
  );

  useEffect(() => {
    if (isModalOpen) {
      // Ensure mediaList updates when modal is opened
      const updatedMediaList = [
        ...(imageUrl.endsWith(".mp4")
          ? [{ type: "video", url: imageUrl }]
          : []),
        ...imagesList.map((img) => ({ type: "image", url: img.imageUrl })),
      ];
      setMediaList(updatedMediaList);
    }
  }, [isModalOpen, imageUrl, imagesList]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Property Card */}
      <div
        className="w-full md:h-[220px] h-fit p-4 grid grid-cols-[35%_1fr] gap-4 cursor-pointer shadow-lg rounded-lg bg-white transition-all duration-500 hover:bg-[#e0f8ead0]"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full md:h-full h-[140px] overflow-hidden">
          {imageUrl && imageUrl.endsWith(".mp4") ? (
            <video controls className="w-full h-full object-cover rounded-md">
              <source src={imageUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imagesList?.[0]?.imageUrl || "/placeholder.jpg"}
              alt="Property"
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="font-semibold md:text-[19px] text-[16px] truncate">
            {description}
          </h6>
          <p className="text-[15px] font-semibold">
            Amount:{" "}
            <span className="font-normal">
              {currency}
              {amount}
            </span>
          </p>
          <p className="text-[15px] font-semibold">
            Size: <span className="font-normal">{productSize}</span>
          </p>
          <p className="text-[15px] font-semibold">
            Location: <span className="font-normal">{location}</span>
          </p>
        </div>
      </div>

      {/* Modal with Carousel */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        width={"90%"}
        className="!max-w-[95vw] sm:!max-w-[600px] md:!max-w-[750px] lg:!max-w-[800px]" // Tailwind best practice for modal width
        centered
      >
        <Slider {...settings}>
          {mediaList.map((media, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
            >
              {media.type === "video" ? (
                <video
                  controls
                  className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover rounded-lg"
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media.url}
                  alt={`Property ${index + 1}`}
                  className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </Slider>
      </Modal>
    </>
  );
}
