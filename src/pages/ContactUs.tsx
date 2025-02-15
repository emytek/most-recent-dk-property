import { Checkbox, Input, message } from "antd";
import AppLayout from "../layout/AppLayout";
import { FormEvent, useLayoutEffect, useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { contactUsApi } from "../services/API/ContactUs";

interface IContactUsForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  checked: boolean;
}

export default function ContactUs() {
  const [values, setValues] = useState<IContactUsForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    checked: false,
  });

  const isValid =
    values.checked &&
    values.email !== "" &&
    values.firstName !== "" &&
    values.lastName !== "" &&
    values.message !== "" &&
    values.phone !== "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: ContactUsPayload = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      message: values.message,
      phone: values.phone,
    };

    if (!isValid) {
      return message.warning("Fill credentials appropriately");
    }

    const response = await contactUsApi(payload);
    message.success(response?.responseDto.message);
  };

  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Contact Us - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <div className="w-full px-xPadSM md:px-xPadLG grid grid-cols-1 md:grid-cols-2 gap-10 my-[7rem]">
        <div className="w-full">
          <h5
            className="text-center text-primary font-bold md:text-[23px] text-[18px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Contact us
          </h5>
          <h1
            className="text-center text-black font-bold md:text-[18px] text-[15px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Get in touch
          </h1>
          <p
            className="text-center text-slate-500 font-normal text-[16px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            We’d love to know how we can help you harness the power of the
            internet to solve your challenges. Share your thoughts with us by
            filling out this form!
          </p>

          <div className="w-full grid grid-cols-2 gap-5 mt-7">
            <div
              className="flex flex-col items-start justify-between w-full h-[90px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img src="/assets/logo.png" alt="logo" width="40" height="40" />
              <h3 className="md:text-[16px] text-[13px] font-outfit font-extrabold overflow-hidden">
                ADDRESS
              </h3>
              <span className="text-left font-outfit text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden">
                5 shobande street akoka bariga
              </span>
            </div>

            <div
              className="flex flex-col items-start justify-between w-full h-[90px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <h3 className="md:text-[16px] text-[13px] font-outfit font-extrabold overflow-hidden">
                PHONE NUMBER
              </h3>
              <a
                href="tel:08169696443"
                className="text-left font-outfit text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
              >
                08169696443
              </a>
            </div>

            <div
              className="flex flex-col items-start justify-between w-full h-[90px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h3 className="md:text-[16px] text-[13px] font-outfit font-extrabold overflow-hidden">
                WEBSITE
              </h3>
              <a
                href="http://dkerulative.com.ng/"
                className="text-left font-outfit text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
                target="_blank"
              >
                http://dkerulative.com.ng
              </a>
            </div>

            <div
              className="flex flex-col items-start justify-between w-full h-[90px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
              </svg>
              <h3 className="md:text-[16px] text-[13px] font-outfit font-extrabold overflow-hidden">
                EMAIL
              </h3>
              <a
                href="mailto:tech@dkeralutive.com"
                className="text-left font-outfit text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
              >
                tech@dkeralutive.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <div className="w-full flex md:flex-row flex-col items-center gap-3">
              <div
                className="w-full flex flex-col gap-1"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <label
                  htmlFor="firstName"
                  className="font-semibold text-[15px]"
                >
                  First Name
                </label>
                <Input
                  placeholder="First Name"
                  id="firstName"
                  value={values.firstName}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="font-outfit"
                />
              </div>

              <div
                className="w-full flex flex-col gap-1"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <label htmlFor="lastName" className="font-semibold text-[15px]">
                  Last Name
                </label>
                <Input
                  placeholder="Last Name"
                  id="lastName"
                  value={values.lastName}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="font-outfit"
                />
              </div>
            </div>

            <div
              className="w-full flex flex-col gap-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <label htmlFor="email" className="font-semibold text-[15px]">
                Email Address
              </label>
              <Input
                placeholder="Email Address"
                id="email"
                value={values.email}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="font-outfit"
              />
            </div>

            <div
              className="w-full flex flex-col gap-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-[15px]"
              >
                Phone Number
              </label>
              <Input
                placeholder="0801 234 5678"
                id="phoneNumber"
                value={values.phone}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="font-outfit"
              />
            </div>

            <div
              className="w-full flex flex-col gap-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <label htmlFor="message" className="font-semibold text-[15px]">
                Reason for contacting
              </label>
              <Input.TextArea
                cols={7}
                placeholder="Enter your message"
                id="message"
                value={values.message}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                style={{ resize: "none" }}
                className="font-outfit"
              />
            </div>

            <div
              className=""
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <Checkbox
                checked={values.checked}
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    checked: event.target.checked,
                  }));
                }}
                className={"mt-5 text-black font-outfit"}
              >
                You agree to our friendly privacy policy.
              </Checkbox>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-2 font-outfit font-semibold text-[15px] bg-primary text-white disabled:bg-slate-500 disabled:text-black disabled:cursor-not-allowed capitalize"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
