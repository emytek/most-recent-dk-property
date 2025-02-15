import { useQuery } from "@tanstack/react-query";
import { searchPropertiesAPI } from "../../services/API/Properties";
import { useState } from "react";
import usePropertyStore from "../../store/PropertyStore";
import useCheckBoxStore from "../../store/CheckboxStore";
import { NoPropertyMessage, SUCCESS } from "../../data/data";
import { Alert, message } from "antd";
import PropertyCard from "../PropertyCard/PropertyCard";
import PaginationBtns from "../Pagination/PaginationBtns";
import PropertyAdvert from "../PropertyAdvert/PropertyAdvert";

interface IPropertyBody {
  property: "PROLAN" | "PROAPA" | "PROSHO";
}

export default function PropertyBody({ property }: IPropertyBody) {
  const [pageNo, setPageNo] = useState(0);
  const pageSize = 12;
  const location = usePropertyStore((state) => state.state);
  const prices = useCheckBoxStore((state) => state.price);

  const {
    data: properties,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getLandProperties", { location, pageNo, pageSize, prices }],
    queryFn: () =>
      searchPropertiesAPI({
        location: location as string,
        pageNo: String(pageNo),
        pageSize,
        prices,
        property,
      }),
  });

  if (error) {
    message.error(error.message);
  }

  if (
    properties?.responseDto.code === SUCCESS &&
    properties.productDescriptionDtoList.length === 0
  ) {
    <Alert
      message="Oops 😡"
      description={NoPropertyMessage}
      type="error"
      showIcon
    />;
    return (
      <PaginationBtns
        setPageNo={setPageNo}
        noOfItems={1}
        pageSize={4}
        pageNo={pageNo}
      />
    );
  }

  return (
    <div className="w-screen bg-white md:px-xPadLG px-xPadSM py-12">
      <hr className="w-full h-[3px] bg-[#c5c5c5]" />
      <div className="w-full my-8 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
        {properties?.productDescriptionDtoList.map((product) => (
          <PropertyCard key={product.id} {...product} isLoading={isLoading} />
        ))}
      </div>

      <PaginationBtns
        setPageNo={setPageNo}
        noOfItems={properties?.productDescriptionDtoList.length || 0}
        pageSize={pageSize}
        pageNo={pageNo}
      />

      <PropertyAdvert />
    </div>
  );
}
