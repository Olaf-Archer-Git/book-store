import { MdOutlineLocalShipping, MdOutlineHeadphones } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineGift, AiOutlineCreditCard } from "react-icons/ai";

import img1 from "../assets/book1.png";
import img2 from "../assets/book2.png";
import img3 from "../assets/book3.png";
import img4 from "../assets/book4.png";
import img5 from "../assets/book5.png";
import img6 from "../assets/book6.png";

export const dataBanner = [
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

export const dataMainBanner = [
  { id: "1", img: img1, title: "detective", subtitle: "Reading is essential" },
  {
    id: "2",
    img: img2,
    title: "history",
    subtitle: "There is nothing better than to read",
  },
  {
    id: "3",
    img: img3,
    title: "novel",
    subtitle: "Reading is all about learning",
  },
  { id: "4", img: img4, title: "poetry", subtitle: "Reading is our life" },
  {
    id: "5",
    img: img5,
    title: "fiction",
    subtitle: "Learning is next to reading",
  },
  {
    id: "6",
    img: img6,
    title: "fantasy",
    subtitle: "Amazing books on your way",
  },
];
