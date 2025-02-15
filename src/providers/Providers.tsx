import { PropsWithChildren, useEffect } from "react";
import { AppContextProvider } from "../context/AppContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>{children}</AppContextProvider>
    </QueryClientProvider>
  );
}
