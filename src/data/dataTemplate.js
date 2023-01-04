import { MdOutlineLocalShipping, MdOutlineHeadphones } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineGift, AiOutlineCreditCard } from "react-icons/ai";

export const dataTemplate = [
  {
    id: 1,
    logo: <MdOutlineLocalShipping />,
    title: "free delivery",
    subtitle: "free orders over 100$",
  },
  {
    id: 2,
    logo: <MdOutlineHeadphones />,
    title: "support 24/7",
    subtitle: "shop with an expert",
  },
  {
    id: 3,
    logo: <TbDiscount2 />,
    title: "nice prices",
    subtitle: "get factory direct price",
  },
  {
    id: 4,
    logo: <AiOutlineGift />,
    title: "surprise offers",
    subtitle: "save up to 25% off",
  },
  {
    id: 5,
    logo: <AiOutlineCreditCard />,
    title: "secure payment",
    subtitle: "100% protected payment",
  },
];
