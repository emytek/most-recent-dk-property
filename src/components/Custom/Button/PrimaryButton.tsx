import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full h-full bg-primary text-white rounded-[10px] text-[13px] font-medium uppercase border border-primary transition-all duration-500 hover:bg-white hover:text-primary active:scale-[0.95]"
    >
      {children}
    </button>
  );
}
