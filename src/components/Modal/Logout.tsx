import { Image, message, Modal } from "antd";
import useIsMobile from "../../hooks/useIsMobile";
import PrimaryButton from "../Custom/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import { logOutAPI } from "../../services/API/Auth";
import { clearAllStorages } from "../../utils/ClearStorages";
import { SUCCESS } from "../../data/data";
interface LogoutModalProps {
  isOpen: boolean;
  close: () => void;
  setInitials: Dispatch<SetStateAction<string | null>>;
}

export default function LogoutModal({
  isOpen,
  close,
  setInitials,
}: LogoutModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setIsLoading(true);
    const response = await logOutAPI();
    if (response?.resp?.code === SUCCESS) {
      navigate("/");
      setInitials(null);
      close();
      setIsLoading(false);
      return;
    }

    navigate("/");
    close();
    clearAllStorages();
    message.success("User logged out successfully");
    setInitials(null);
    setIsLoading(false);
  };

  const handleCancel = () => {
    close();
  };

  return (
    <Modal
      open={isOpen}
      onClose={close}
      onCancel={close}
      width={isMobile ? "95vw" : "500px"}
      centered
      destroyOnClose
      footer={null}
      loading={isLoading}
      title={
        <div
          className="w-full flex items-center justify-start gap-3"
          data-aos="fade-down"
        >
          <Image
            src="/assets/logo.png"
            alt="Logo"
            preview={false}
            width={55}
            height={60}
          />
          <span>Dkeralutive Properties</span>
        </div>
      }
    >
      <h4 className="text-center font-bold font-outfit" data-aos="fade-down">
        Are you sure you want to logout?
      </h4>

      <div className="w-full flex items-center justify-between gap-2 mt-3">
        <div className="w-full h-[40px]" data-aos="fade-right">
          <PrimaryButton onClick={handleCancel}>close</PrimaryButton>
        </div>

        <div className="w-full h-[40px]" data-aos="fade-left">
          <PrimaryButton
            onClick={handleLogOut}
            className="bg-blue-600 text-white text-[16px] font-semibold uppercase"
          >
            logout
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}
