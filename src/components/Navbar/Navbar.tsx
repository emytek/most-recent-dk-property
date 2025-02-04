import { useLayoutEffect, useState } from "react";
import useToggleBoolean from "../../hooks/useToggleBoolean";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserName } from "../../utils/GetUserDetails";
import { navLinks } from "../../data/data";
import { Dropdown, Flex, Image, MenuProps } from "antd";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import NavLabel from "./NavLabel";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import NavDrawer from "./NavDrawer";
import { BiMenu } from "react-icons/bi";
import LogoutModal from "../Modal/Logout";

interface IMenuOnclick {
  key: string;
}

export default function Navbar() {
  const { isOpen, handleClose, handleOpen } = useToggleBoolean();

  const {
    isOpen: isOpenModal,
    handleClose: handleCloseModal,
    handleOpen: handleOpenModal,
  } = useToggleBoolean();

  const pathname = useLocation().pathname;
  const [active, setActive] = useState(pathname);
  const [initials, setInitials] = useState<string | null>(null);

  const userName = getUserName();
  const navigate = useNavigate();

  const items = navLinks.map(({ id, link, label }) => (
    <Link
      to={link}
      key={id}
      className={`nav_link ${active === link ? "active" : ""} font-outfit`}
      data-active={active === link || undefined}
      onClick={() => setActive(link)}
      data-aos="fade-down"
      data-aos-delay={`${id}0`}
    >
      {label}
    </Link>
  ));

  const onClick = (props: IMenuOnclick) => {
    if (props.key === "1") {
      if (userName) {
        return navigate(`/profile/${userName}`);
      }
      return navigate("/login");
    }
    if (props.key === "2") {
      navigate("/contact-us");
      return;
    }
    if (props.key === "3") {
      if (initials) {
        handleOpenModal();
        return;
      }
      navigate("/login");
      return;
    }
  };

  const menu: MenuProps = {
    items: [
      {
        key: "1",
        label: <NavLabel text="Profile" />,
        icon: <FaRegUserCircle />,
        onClick,
      },
      {
        key: "2",
        label: <NavLabel text="Contact Us" />,
        icon: <MdOutlineAttachEmail />,
        onClick,
      },
      {
        key: "3",
        label: <NavLabel text={initials ? "Logout" : "Login"} />,
        icon: <AiOutlineLogin />,
        danger: true,
        onClick,
      },
    ],
  };

  useLayoutEffect(() => {
    const username = getUserName();
    if (!username) return;
    const initials = `${username?.toUpperCase()?.charAt(0)}${username
      ?.toUpperCase()
      ?.charAt(1)}`;
    setInitials(initials);
  }, []);

  return (
    <>
      <nav
        className={`w-screen h-[8vh] md:px-xPadLG px-xPadSM fixed top-0 left-0 z-[1000] flex items-center justify-between shadow-md bg-[#ffffff69] backdrop-blur`}
      >
        <Link to="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height="auto"
            preview={false}
            data-aos="fade-down"
          />
        </Link>

        <Flex gap={20} vertical={false} className="md:flex hidden">
          {items}
        </Flex>

        <div className="flex items-center gap-2">
          <Dropdown menu={menu}>
            <div>
              {initials ? (
                <div className="md:w-10 md:h-10 w-7 h-7 rounded-full grid place-content-center md:text-base text-sm font-medium text-white bg-primary cursor-pointer">
                  {initials}
                </div>
              ) : (
                <FaRegUser
                  size={18}
                  className={
                    pathname === "/auth"
                      ? "text-primary cursor-pointer hover:text-primary transition-all"
                      : "text-black cursor-pointer hover:text-primary transition-all"
                  }
                  onClick={() => {
                    setActive("");
                  }}
                  data-aos="fade-down"
                  data-aos-delay="500"
                />
              )}
            </div>
          </Dropdown>

          <BiMenu
            onClick={handleOpen}
            className="md:hidden flex text-[25px] cursor-pointer transition-all duration-500 hover:text-primary"
            data-aos="fade-down"
            data-aos-delay="200"
          />
        </div>
      </nav>

      <NavDrawer isOpen={isOpen} items={items} onClose={handleClose} />

      <LogoutModal
        close={handleCloseModal}
        isOpen={isOpenModal}
        setInitials={setInitials}
      />
    </>
  );
}
