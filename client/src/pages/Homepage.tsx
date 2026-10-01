import { Link } from "react-router-dom";
import Services from "../components/Services";
import About from "../components/About";
import Works from "../components/Works";
import Testmonials from "../components/Testmonials";
import Contact from "../components/Contact";

const cardsData = [
  {
    num: 150,
    title: "عميل سعيد",
  },
  {
    num: 300,
    title: "مشروع منجز",
  },
  {
    num: 5,
    title: "سنوات خبرة",
  },
];

type CardDataType = {
  num: number;
  title: string;
};

const Homepage = () => {
  return (
    <>
      <section id="home" className="bg-soft min-h-screen pt-30">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-5">
          <div className="left flex-1">
            <div className="rounded-full relative aspect-square flex justify-center items-center h-full">
              <div
                style={{
                  boxShadow:
                    "rgba(255, 255, 255, 0.85) 0px 0px 60px inset, rgba(21, 87, 255, 0.15) 0px 28px 70px",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.28), transparent 42%), radial-gradient(circle at 72% 66%, rgba(21, 87, 255, 0.34), transparent 48%), linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(232, 239, 255, 0.78))",
                }}
                className="background blur h-full rounded-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
              <img
                src="/assets/Excited 3D Cartoon Character Using Laptop Sitting on a Bean Bag - 480x480.png"
                alt=""
                className="animate-movingUpDown h-4/5"
                loading="lazy"
              />
              <div className="hidden lg:block absolute top-10 right-10 bg-card p-5 text-xl font-bold rounded-lg shadow-shadowsm shadow-md">
                نمو اسرع
              </div>
              <div className="hidden lg:block absolute bottom-10 left-10 bg-card p-5 text-xl font-bold rounded-lg shadow-shadowsm shadow-md">
                تنفيذ ذكي
              </div>
            </div>
          </div>
          <div className="right flex-1 flex flex-col justify-around items-end">
            <span className="eyebrow mx-auto lg:mx-0">
              حلول رقمية تنمو مع مشروعك
            </span>
            <div className="text text-end py-5">
              <h1 className="font-extrabold text-5xl lg:text-6xl text-center lg:text-end">
                حلول ذكية
                <br />{" "}
                <span className="text-primary mt-3 block">
                  {" "}
                  لأفكارك الرقمية
                </span>
              </h1>
              <p
                className="py-5 px-5 lg:px-0 leading-8 lg:leading-10 text-xl text-center lg:text-start"
                dir="rtl"
              >
                نساعدك على تحويل أفكارك إلى تجارب رقمية استثنائية باستخدام أحدث
                التقنيات، من تصميم المواقع إلى التسويق الرقمي وإدارة الحضور على
                منصات التواصل.
              </p>
            </div>
            <div className="btns flex flex-row-reverse items-center gap-5 mx-auto lg:mx-0 justify-center lg:justify-end">
              <Link
                className="btn primary-btn"
                to="/#services"
                aria-label="Go to Services Section"
              >
                اكتشف خدماتنا
              </Link>
              <Link
                className="btn secondary-btn"
                to="/#contact"
                aria-label="Go to Contact Section"
              >
                تواصل معنا
              </Link>
            </div>
            <div className="cards flex flex-col lg:flex-row-reverse w-full lg:w-auto gap-5 my-5">
              {cardsData.map((card: CardDataType, index: number) => {
                return (
                  <div
                    key={"home-card-" + index}
                    className="flex flex-col text-center lg:text-end bg-card shadow-lg shadow-shadow py-5 px-8 gap-2 rounded-lg"
                  >
                    <span className="text-3xl font-extrabold text-primary">
                      {card.num}+
                    </span>
                    <span className="text-muted font-bold">{card.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Works />
      <Testmonials />
      <Contact />
    </>
  );
};

export default Homepage;
