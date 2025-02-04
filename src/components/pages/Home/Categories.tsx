import { Link } from "react-router-dom";
import PrimaryButton from "../../Custom/Button/PrimaryButton";
import { useEffect, useState } from "react";
import usePropertyStore from "../../../store/PropertyStore";
import {
  propertiesCategories,
  PropertyType,
  SUCCESS,
} from "../../../data/data";
import { getTotalNoOfPropertiesByLocationAPI } from "../../../services/API/Properties";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [loading, setLoading] = useState(false);
  const [numberOfProperties, setNumberOfProperties] = useState(
    {} as NumberOfPropertiesProp
  );

  const state = usePropertyStore((prev) => prev.state);

  const categories = [
    {
      id: 0,
      category: propertiesCategories[2],
      count: numberOfProperties.PROLAN,
      image: "/assets/land-cat.png",
      link: "/lands",
      animation: "slide-right",
    },
    {
      id: 1,
      category: propertiesCategories[0],
      count: numberOfProperties.PROSHO,
      image: "/assets/shortlets-cat.png",
      link: "/shortlets",
      animation: "fade-up",
    },
    {
      id: 2,
      category: propertiesCategories[1],
      count: numberOfProperties.PROAPA,
      image: "/assets/apartments-cat.png",
      link: "/apartments",
      animation: "slide-left",
    },
  ];

  useEffect(() => {
    (async () => {
      if (!state) return;
      setLoading(true);
      const payload: TotalNoOfPropertiesByLocationPayload = {
        location: state,
        productCodeList: [
          PropertyType.propertyShortlets,
          PropertyType.propertyApartment,
          PropertyType.propertyLand,
        ],
      };

      const response = await getTotalNoOfPropertiesByLocationAPI(payload);

      if (response?.responseDto?.code === SUCCESS) {
        setNumberOfProperties(response?.values);
      }
      setLoading(false);
    })();
  }, [state]);

  return (
    <div className="w-screen bg-white flex flex-col justify-center gap-[2rem] overflow-y-hidden md:py-yPadLG py-yPadSM md:px-xPadLG px-xPadSM relative">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3 items-center justify-between">
        <div
          className="w-full flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="font-semibold font-plusJakartaSans md:text-titleLG text-titleSM text-black">
            We give the Best Property Deal
          </h3>
          <p>
            Discover premium apartments, lands, and shortlets in Nigeria with
            unbeatable deals and flexible payment plans.
          </p>
        </div>

        <Link
          to="/lands"
          className="w-full h-[40px] flex items-center justify-end"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <PrimaryButton>View All Property</PrimaryButton>
        </Link>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 items-center justify-between md:gap-16 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} loading={loading} />
        ))}
      </div>
    </div>
  );
}
