import { useLayoutEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import AppLayout from "../layout/AppLayout";
import LandMain from "../components/pages/Lands/LandMain";
import PropertyBody from "../components/PropertyBody/PropertyBody";

export default function Apartments() {
  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Apartments - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <LandMain />
      <PropertyBody property="PROAPA" />
    </AppLayout>
  );
}
