declare type ResponseDto = {
  code: string;
  message: string;
};

declare type NumberOfPropertiesProp = {
  PROLAN: number;
  PROSHO: number;
  PROAPA: number;
};

declare type ContactUsPayload = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

declare type ContactUsResponse = {
  responseDto: ResponseDto;
};
