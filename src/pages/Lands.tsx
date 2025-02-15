import { useLayoutEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import AppLayout from "../layout/AppLayout";
import LandMain from "../components/pages/Lands/LandMain";
import PropertyBody from "../components/PropertyBody/PropertyBody";

export default function Lands() {
  const { setPageTitle } = usePageTitle();

  useLayoutEffect(() => {
    setPageTitle("Lands - Dk Properties");
  }, [setPageTitle]);

  return (
    <AppLayout>
      <LandMain />
      <PropertyBody property="PROLAN" />
    </AppLayout>
  );
}
