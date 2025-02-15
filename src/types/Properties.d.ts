/* eslint-disable @typescript-eslint/no-explicit-any */
declare type TNoOfPropertiesPayload = {
  location: string;
  productCodeList: string[];
};

declare type TotalNoOfPropertiesByLocationPayload = {
  location: string;
  productCodeList: string[];
};

declare type TotalNoOfPropertiesByLocationResponse = {
  responseDto: ResponseDto;
  values: {
    PROLAN: number;
    PROSHO: number;
    PROAPA: number;
  };
};

declare type SearchPropertiesPayload = {
  location: string;
  prices: string;
  property: "PROLAN" | "PROAPA" | "PROSHO";
  pageSize: number;
  pageNo: string;
};

declare type DocumentProps = {
  id: number;
  version: number;
  delFlag: string;
  createdOn: string;
  modifiedOn: string;
  imageUrl: string;
};

declare type PropertyDescriptionProps = {
  id: number;
  amount: number;
  description: string;
  currency: string;
  imageUrl: string;
  productCode: string;
  code: string;
  location: string;
  productCategoryCode: string;
  recent: any;
  multipartFile: any;
  productCodeList: any;
  productSize: string;
  price: any;
  multipartFileList: any;
  imagesList: DocumentProps[];
  availableQuantity: any;
  landDocs: any;
  percentageDiscount: string;
  landDoc: DocumentProps[];
  videoList: any;
};

declare type SearchPropertiesResponse = {
  responseDto: ResponseDto;
  productDescriptionDtoList: PropertyDescriptionProps[];
};
