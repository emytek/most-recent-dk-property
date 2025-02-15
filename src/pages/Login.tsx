import { useLayoutEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import AppLayout from "../layout/AppLayout";
import usePropertyStore from "../store/PropertyStore";
import SignIn from "../components/pages/Login/SignIn";
import SignUp from "../components/pages/Login/SignUp";

export default function Login() {
  const activeTab = usePropertyStore((state) => state.activeTab);
  const setActiveTab = usePropertyStore((state) => state.setActiveTab);

  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Login - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <div className="md:w-[550px] w-screen px-xPadSM md:px-xPadLG mx-auto bg-slate-400 flex items-center justify-center">
        <div className="w-screen h-[92vh] grid place-content-center">
          <div>
            <button type="button" onClick={() => setActiveTab("sign-in")}>
              Sign In
            </button>
            <button type="button" onClick={() => setActiveTab("sign-up")}>
              register
            </button>
          </div>

          {activeTab === "sign-in" && <SignIn />}
          {activeTab === "sign-up" && <SignUp />}
        </div>
      </div>
    </AppLayout>
  );
}
