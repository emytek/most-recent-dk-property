import { useLayoutEffect } from "react";
import Categories from "../components/pages/Home/Categories";
import FeaturedProperties from "../components/pages/Home/FeaturedProperties";
import HomeMain from "../components/pages/Home/HomeMain";
import usePageTitle from "../hooks/usePageTitle";
import AppLayout from "../layout/AppLayout";
import FeaturedListing from "../components/pages/Home/FeaturedListing";
import AboutDK from "../components/pages/Home/AboutDK";

export default function Home() {
  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Home - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <HomeMain />
      <FeaturedProperties />
      <Categories />
      <FeaturedListing />
      <AboutDK />
    </AppLayout>
  );
}
