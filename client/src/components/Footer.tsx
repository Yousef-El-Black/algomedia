import { Link } from "react-router-dom";
import { socialLinks, type socialLinkType } from "../assets/SocialMeiaLinks";
import { type MenuLinkType, menuLinks } from "../assets/MenuLinks";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-10" dir="rtl">
      <div className="container">
        <div className="top flex flex-col lg:flex-row gap-10 items-center">
          <div className="logo lg:flex-3 flex flex-col gap-4 justify-center items-center lg:items-start">
            <img
              src="/assets/circle-logo.svg"
              alt="Algo Logo"
              className="w-12 h-12 rounded-full flex-justify-center items-center"
            />
            <h2 className="text-2xl font-bold py-3">ألجو</h2>
            <p className="text-muted text-lg text-center lg:text-starts leading-8">
              شريكك الموثوق في التحول الرقمي. نقدم حلولًا تقنية وتسويقية متكاملة
              لنمو عملك.
            </p>
          </div>
          <div className="fastlinks lg:flex-2">
            <h3 className="text-2xl font-bold mb-3">روابط سريعة</h3>
            <ul className="flex flex-col gap-2 items-center lg:items-start">
              {menuLinks.map((item: MenuLinkType, index: number) => {
                return (
                  <li key={"footer-menu-link-" + index}>
                    <Link
                      to={item.link}
                      className="text-white hover:text-muted duration-300"
                      aria-label={`Go to ${item.title} Section`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="services flex-2">
            <h3 className="text-2xl font-bold mb-3">خدماتنا</h3>
            <ul className="flex flex-col gap-2 items-center lg:items-start">
              <li>
                <Link
                  to={"/#services"}
                  className="text-white hover:text-muted duration-300"
                  aria-label={`Go to Services Section`}
                >
                  إدارة الميديا
                </Link>
              </li>
              <li>
                <Link
                  to={"/#services"}
                  className="text-white hover:text-muted duration-300"
                  aria-label={`Go to Services Section`}
                >
                  الحملات الإعلانية
                </Link>
              </li>
              <li>
                <Link
                  to={"/#services"}
                  className="text-white hover:text-muted duration-300"
                  aria-label={`Go to Services Section`}
                >
                  تصميم المواقع
                </Link>
              </li>
              <li>
                <Link
                  to={"/#services"}
                  className="text-white hover:text-muted duration-300"
                  aria-label={`Go to Services Section`}
                >
                  استشارات رقمية
                </Link>
              </li>
            </ul>
          </div>
          <div className="newsteller flex-2 flex-col items-start gap-10 text-center lg:text-start">
            <h3 className="text-2xl font-bold mb-3">النشرة البريدية</h3>
            <span className="text-muted text-sm leading-8">
              اشترك للحصول على آخر الأخبار والعروض.
            </span>
            <form className="flex gap-2 mt-3 w-full">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-shadow ring-2 ring-muted text-white placeholder:text-muted focus:ring-primary p-2 rounded-lg flex-1"
              />
              <button
                type="submit"
                className="bg-linear-to-br from-primary to-secondary text-white hover:from-secondary hover:to-primary duration-300 cursor-pointer p-2 rounded"
              >
                <SendIcon className="rotate-180" />
              </button>
            </form>
          </div>
        </div>
        <div className="bottom mt-10 flex gap-5 items-center justify-between font-bold border-t border-muted pt-5 flex-col lg:flex-row">
          <p className="text-center">
            &copy; {new Date().getFullYear()} ألجو. جميع الحقوق محفوظة.
          </p>
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
    </footer>
  );
};

export default Footer;
