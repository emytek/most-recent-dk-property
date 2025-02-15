/* eslint-disable @typescript-eslint/no-explicit-any */
declare type ResponseDto = {
  code: string;
  message: string;
};

declare type LoginPayload = {
  userName: string;
  password: string;
};

declare type LoginResponse = {
  responseDto: ResponseDto;
  token: string;
  emailAddress: string;
  userName: string;
};

declare type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

declare type SignUpResponse = {
  responseDto: ResponseDto;
  userDto: any;
  userDtoList: any;
};

declare type LogOutResponse = {
  resp: ResponseDto;
  firstTimeLogin: boolean;
};

declare type NewsletterPayload = { emailAddress: string };

declare type NewsletterResponse = {
  responseDto: ResponseDto;
};
