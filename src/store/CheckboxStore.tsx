/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler } from "react";
import { create } from "zustand";

type CheckBoxState = {
  price: string;
  isChecked1: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  isChecked4: boolean;
  isChecked5: boolean;
  isChecked6: boolean;
  isChecked7: boolean;
  isChecked8: boolean;
  onChangeCheck1: any;
  onChangeCheck2: any;
  onChangeCheck3: any;
  onChangeCheck4: any;
  onChangeCheck5: any;
  onChangeCheck6: any;
  onChangeCheck7: any;
  onChangeCheck8: any;
  refresh: MouseEventHandler<HTMLButtonElement> | undefined;
};

const useCheckBoxStore = create<CheckBoxState>()((set) => ({
  price: "500000",
  isChecked1: true,
  isChecked2: false,
  isChecked3: false,
  isChecked4: false,
  isChecked5: false,
  isChecked6: false,
  isChecked7: false,
  isChecked8: false,
  onChangeCheck1: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "500000" }));
    set(() => ({ isChecked1: e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck2: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "1000000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck3: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "2500000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck4: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "5000000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck5: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "7500000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck6: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "10000000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck7: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "15000000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: e.target.checked }));
    set(() => ({ isChecked8: !e.target.checked }));
  },
  onChangeCheck8: (e: any) => {
    if (e.target.checked === false) {
      return;
    }
    set(() => ({ price: "20000000" }));
    set(() => ({ isChecked1: !e.target.checked }));
    set(() => ({ isChecked2: !e.target.checked }));
    set(() => ({ isChecked3: !e.target.checked }));
    set(() => ({ isChecked4: !e.target.checked }));
    set(() => ({ isChecked5: !e.target.checked }));
    set(() => ({ isChecked6: !e.target.checked }));
    set(() => ({ isChecked7: !e.target.checked }));
    set(() => ({ isChecked8: e.target.checked }));
  },
  refresh: () => {
    set(() => ({ price: "500000" }));
    set(() => ({ isChecked1: true }));
    set(() => ({ isChecked2: false }));
    set(() => ({ isChecked3: false }));
    set(() => ({ isChecked4: false }));
    set(() => ({ isChecked5: false }));
    set(() => ({ isChecked6: false }));
    set(() => ({ isChecked7: false }));
    set(() => ({ isChecked8: false }));
  },
}));

export default useCheckBoxStore;
