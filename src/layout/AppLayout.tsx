import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <div className="w-full mt-[8vh]">{children}</div>
      <Footer />
    </div>
  );
}
