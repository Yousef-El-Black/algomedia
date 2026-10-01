import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationIcon from "@mui/icons-material/LocationOn";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
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

const socialLinks = [
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

type socialLinkType = {
  icon: ReactNode;
  label: string;
  link: string;
};

const Contact = () => {
  return (
    <section id="contact" className="bg-soft">
      <div className="container py-20">
        <span className="eyebrow mx-auto block w-fit">اتصل بنا</span>
        <h3 className="text-center pt-5 text-3xl lg:text-6xl font-extrabold lg:w-4/5 mx-auto leading-9 lg:leading-20 mb-8">
          دعنا <span className="text-primary">نتحدث </span> عن مشروعك
        </h3>
        <p className="text-muted text-lg leading-8 text-center" dir="rtl">
          املأ النموذج وسنرد عليك في أقرب وقت ممكن.
        </p>
        <div className="contact flex flex-col lg:flex-row-reverse gap-10 my-10">
          <div className="social flex flex-col gap-5 flex-2 p-5 items-center justify-center">
            <div
              className="call hover:-translate-y-3 duration-300 p-5 rounded-xl shadow-shadow shadow-lg flex gap-5 bg-white items-center w-full"
              dir="rtl"
            >
              <div className="icon text-white bg-linear-to-br from-primary to-secondary p-4 rounded-lg w-fit">
                <CallIcon fontSize="large" />
              </div>
              <div className="text">
                <h5 className="text-lg font-bold">اتصل بنا</h5>
                <p>
                  <Link
                    to="tel:+966534762037"
                    dir="ltr"
                    className="hover:text-primary duration-300"
                    aria-label="Call +966 534762037"
                  >
                    +966 534762037
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="email hover:-translate-y-3 duration-300 p-5 rounded-xl shadow-shadow shadow-lg flex gap-5 bg-white items-center w-full"
              dir="rtl"
            >
              <div className="icon text-white bg-linear-to-br from-primary to-secondary p-4 rounded-lg w-fit">
                <MailIcon fontSize="large" />
              </div>
              <div className="text">
                <h5 className="text-lg font-bold">البريد الإلكتروني</h5>
                <p>
                  <Link
                    to="mailto:info@algo.com"
                    dir="ltr"
                    className="hover:text-primary duration-300"
                    aria-label="Send Email to info@algo.com"
                  >
                    info@algo.com
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="address hover:-translate-y-3 duration-300 p-5 rounded-xl shadow-shadow shadow-lg flex gap-5 bg-white items-center w-full"
              dir="rtl"
            >
              <div className="icon text-white bg-linear-to-br from-primary to-secondary p-4 rounded-lg w-fit">
                <LocationIcon fontSize="large" />
              </div>
              <div className="text">
                <h5 className="text-lg font-bold">الموقع</h5>
                <p>الدمام، المملكة العربية السعودية</p>
              </div>
            </div>

            <div
              className="follow p-5 rounded-xl shadow-shadow shadow-lg flex flex-col gap-5 bg-white items-start w-full"
              dir="rtl"
            >
              <div className="text font-bold text-xl">تابعنا علي</div>
              <ul className="flex gap-5 items-center justify-center flex-wrap">
                {socialLinks.map((item: socialLinkType, index: number) => {
                  return (
                    <li key={"social-link-" + index}>
                      <Link
                        to={item.link}
                        aria-label={item.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary duration-300 cursor-pointer"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <form
            className="flex-3 bg-white rounded-3xl shadow-shadow shadow-lg p-10 flex flex-col gap-5"
            dir="rtl"
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="name flex-1">
                <label htmlFor="name" className="block mb-2 font-bold">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="أدخل اسمك "
                  className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card bg-soft"
                />
              </div>
              <div className="mobile flex-1">
                <label htmlFor="mobile" className="block mb-2 font-bold">
                  رقم الجوال
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="أدخل رقم جوالك "
                  className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card bg-soft"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email" className="block mb-2 font-bold">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="أدخل بريدك الإلكتروني "
                className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card bg-soft"
              />
            </div>
            <div className="service">
              <label htmlFor="service" className="block mb-2 font-bold">
                الخدمة المطلوبة
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card bg-soft"
              >
                <option value="" disabled>
                  اختر الخدمة
                </option>
                <option value="social-media-management">
                  ادارة صفحات الميديا
                </option>
                <option value="advertisement">ادارة الحملات الإعلانية</option>
                <option value="website-design">انشاء موقع الكتروني</option>
                <option value="full-package">باقة متكاملة</option>
              </select>
            </div>
            <div className="details">
              <label htmlFor="details" className="block mb-2 font-bold">
                تفاصيل المشروع
              </label>
              <textarea
                id="details"
                name="details"
                placeholder="أدخل تفاصيل مشروعك "
                className="w-full border border-muted rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card bg-soft"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-linear-to-br hover:from-white hover:to-white hover:ring-2 hover:ring-primary hover:text-primary cursor-pointer from-primary to-secondary text-white py-3 px-6 rounded-lg transition duration-300 font-bold"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
