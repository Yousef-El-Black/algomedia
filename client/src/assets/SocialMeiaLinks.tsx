import type { ReactNode } from "react";
import { BehanceIcon } from "../icons/BehanceIcon";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import RedditIcon from '@mui/icons-material/Reddit';
// import Stack from '@mui/material/Stack';

export const socialLinks = [
  {
    icon: <FacebookIcon fontSize="large" />,
    link: "https://www.facebook.com/yourpage",
    label: "Go to Facebook page",
  },
  {
    icon: <XIcon fontSize="large" />,
    link: "https://www.x.com/yourpage",
    label: "Go to X page",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    link: "https://www.instagram.com/yourpage",
    label: "Go to Instagram page",
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    link: "https://www.linkedin.com/in/yourpage",
    label: "Go to LinkedIn page",
  },
  {
    icon: <WhatsAppIcon fontSize="large" />,
    link: "https://wa.me/yourphonenumber",
    label: "Go to WhatsApp page",
  },
  {
    icon: <PinterestIcon fontSize="large" />,
    link: "https://www.pinterest.com/yourpage",
    label: "Go to Pinterest page",
  },
  {
    icon: <BehanceIcon fontSize="large" />,
    link: "https://www.behance.net/yourpage",
    label: "Go to Behance page",
  },
];

export type socialLinkType = {
  icon: ReactNode;
  label: string;
  link: string;
};
