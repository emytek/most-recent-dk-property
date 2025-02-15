import { Image, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import usePropertyStore from "../../store/PropertyStore";
import useIsMobile from "../../hooks/useIsMobile";
import { object, string } from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newsletterAPI } from "../../services/API/Newsletter";

interface INewsletterForm {
  email: string;
}

export default function Footer() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const setActiveTab = usePropertyStore((state) => state.setActiveTab);

  const routeToLogin = () => {
    navigate("/login");
    setActiveTab("sign-in");
  };

  const routeToSignUp = () => {
    navigate("/login");
    setActiveTab("sign-up");
  };

  const validationSchema = object<INewsletterForm>().shape({
    email: string().email("Enter a valid email").required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<INewsletterForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<INewsletterForm> = async (data) => {
    const response = await newsletterAPI({ emailAddress: data.email });
    message.success(response?.responseDto?.message);
    reset();
  };

  return (
    <Spin spinning={false}>
      <footer className="w-screen bg-[#f8fafc] md:p-[50px] p-[20px] flex flex-col gap-6 overflow-hidden">
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-5">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={isMobile ? 50 : 90}
              preview={false}
            />
            <p className="text-muted-200 md:text-[16px] text-[14px]">
              We offers online derivative tools and advice by true professionals
              needed get the best out of real estate.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="md:text-[19px] text-[16px] text-[#94a3b8] capitalize font-semibold">
              Company
            </h4>
            <Link
              to="/apartments"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Apartments
            </Link>
            <Link
              to="/lands"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Lands
            </Link>
            <Link
              to="/shortlets"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Shortlets
            </Link>
            <Link
              to="/contact-us"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="md:text-[17px] text-[15px] text-[#94a3b8] capitalize font-semibold w-fit">
              Help
            </h4>
            <div
              onClick={routeToLogin}
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit cursor-pointer"
            >
              Login
            </div>

            <div
              onClick={routeToSignUp}
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit cursor-pointer"
            >
              SignUp
            </div>

            <Link
              to="/terms"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className="md:tex-[17px] text-[15px] font-medium text-dark transition-all duration-500 hover:text-primary w-fit"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="md:text-[17px] text-[15px] text-[#94a3b8] capitalize font-semibold w-fit">
              Newsletter
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  {...register("email")}
                  className="w-full h-[40px] outline-0 border border-[#94a3b8] text-dark rounded-[12px] text-[16px] transition-all duration-500 hover:border-black px-4 py-2"
                />
                {errors.email?.message && (
                  <p className="font-medium text-[10px] text-primary">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                className="w-full h-[35px] bg-primary text-white rounded-[10px] text-[15px] capitalize border border-primary transition-all duration-500 flex items-center justify-center hover:bg-white hover:text-primary active:scale-[0.95] py-2 font-semibold disabled:bg-slate-500 disabled:border-slate-500 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center font-normal md:text-[16px] text-[14px] leading-3 text-center mt-5">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by
          DKeralutive
        </div>
      </footer>
    </Spin>
  );
}
