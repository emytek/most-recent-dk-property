/* eslint-disable react-refresh/only-export-components */
export const SUCCESS = "dkss";
export const ERROR = "dker";
export const USER_Details = "USER_Details";
export const USER_TOKEN = "AUTH_Token";
export const NoPropertyMessage = (
  <div className="flex flex-col gap-1">
    <p className="mb-3 md:text-[15px] text-[12px] font-outfit">
      We apologize, but we couldn&apos;t find any properties in the specified
      location. Consider exploring other nearby locations for available
      properties.
    </p>
    <p className="mb-3 md:text-[15px] text-[12px] font-outfit">
      If you have any further questions or need assistance, feel free to reach
      out to our support team.
    </p>
  </div>
);

export const PropertyType = {
  propertyLand: "PROLAN",
  propertyApartment: "PROAPA",
  propertyShortlets: "PROSHO",
};

export const aboutData = [
  {
    id: 1,
    icon: "/assets/about-1.png",
    title: "Transparency",
    description:
      "We provide honest and accurate information about every property we list, so you can make informed decisions.",
    animation: "slide-right",
  },
  {
    id: 2,
    icon: "/assets/about-2.png",
    title: "Accountability",
    description:
      "We are committed to delivering the best service to our clients, from the initial consultation to the final closing.",
    animation: "fade-up",
  },
  {
    id: 3,
    icon: "/assets/about-3.png",
    title: "Efficiency",
    description:
      "We use the latest technology and tools to streamline the process of finding and securing your ideal property.",
    animation: "slide-left",
  },
];

export const navLinks = [
  { id: 15, link: "/", label: "Home" },
  { id: 30, link: "/lands", label: "Lands" },
  { id: 45, link: "/apartments", label: "Apartments" },
  { id: 60, link: "/shortlets", label: "Shortlets" },
  { id: 75, link: "/contact-us", label: "Contact Us" },
];

export const propertiesCategories = ["PROSHO", "PROAPA", "PROLAN"];
