import { Drawer, Flex, Image } from "antd";
import { Link } from "react-router-dom";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: JSX.Element[];
}

export default function NavDrawer({ isOpen, items, onClose }: NavDrawerProps) {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      placement="top"
      height="44%"
      title={
        <Link to="/" className="w-full flex items-center gap-1 cursor-pointer">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height="auto"
            preview={false}
            data-aos="fade-down"
          />
          <span className="font-bold text-black">Dk-Properties</span>
        </Link>
      }
    >
      <Flex gap={12} vertical>
        {items}
      </Flex>
    </Drawer>
  );
}
