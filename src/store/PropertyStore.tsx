import { create } from "zustand";

type TabProp = "sign-in" | "sign-up";

type PropertyState = {
  state: string | null;
  onChangeState: ((value: string | null) => void) | undefined;
  activeTab: TabProp;
  setActiveTab: (value: TabProp) => void;
};

const usePropertyStore = create<PropertyState>()((set) => ({
  state: "Lagos",
  onChangeState: (value: string | null) => set(() => ({ state: value })),
  activeTab: "sign-in",
  setActiveTab: (value: TabProp) => set(() => ({ activeTab: value })),
}));

export default usePropertyStore;
