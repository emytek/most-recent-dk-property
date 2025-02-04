import { useLayoutEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import AppLayout from "../layout/AppLayout";
import LandMain from "../components/pages/Lands/LandMain";
import PropertyBody from "../components/PropertyBody/PropertyBody";

export default function Shortlets() {
  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Shortlets - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <LandMain />
      <PropertyBody property="PROSHO" />
    </AppLayout>
  );
}
