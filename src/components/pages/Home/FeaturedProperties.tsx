import { useEffect, useState } from "react";
import { SUCCESS } from "../../../data/data";
import { searchPropertiesAPI } from "../../../services/API/Properties";
import usePropertyStore from "../../../store/PropertyStore";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

export default function FeaturedProperties() {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<
    PropertyDescriptionProps[] | null
  >(null);

  const state = usePropertyStore((prev) => prev.state);

  useEffect(() => {
    (async () => {
      if (!state) return;
      setLoading(true);
      const payload: SearchPropertiesPayload = {
        location: state,
        pageNo: "0",
        pageSize: 12,
        prices: "5000000",
        property: "PROAPA",
      };

      const response = await searchPropertiesAPI(payload);
      if (response?.responseDto?.code === SUCCESS) {
        setProperties(response?.productDescriptionDtoList);
      }
      setLoading(false);
    })();
  }, [state]);

  if (!properties) return null;

  return (
    <div className="w-screen bg-lightGreen flex flex-col justify-center gap-[2rem] overflow-y-hidden md:pb-yPadLG pb-yPadSM md:px-xPadLG px-xPadSM relative pt-6">
      <h2
        className="text-center font-bold md:text-titleLG text-titleSM"
        data-aos="fade-up"
        data-aos-once="false"
      >
        Featured Properties
      </h2>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
        {properties?.map((property) => (
          <FeaturedPropertyCard
            key={property.id}
            {...property}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
}
