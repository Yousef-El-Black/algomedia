import { Link } from "react-router-dom";

const workItems = [
  {
    img: "/assets/past work/Screenshot 2026-08-02 163445.png",
    label: "متجر إلكتروني",
    title: "متجر جانكو",
    text: "تصميم وتطوير متجر كامل مع تجربة شراء سهلة ولوحة تحكم لإدارة المنتجات.",
    link: "https://junko-ecommerce-website-f768b.web.app/",
  },
  {
    img: "/assets/past work/Screenshot 2026-08-02 164205.png",
    label: "إدارة ميديا",
    title: "لوحة تحكم كاملة",
    text: "لوحة تحكم كاملة لموقعك للتعديل.",
    link: "https://mahmoudhassan-c11.github.io/dashboard/index.html",
  },
  {
    img: "/assets/past work/Screenshot 2026-08-02 164730.png",
    label: "موقع شركة",
    title: "شركة نوفا كرييتف",
    text: "موقع تعريفي احترافي يعرض الخدمات والمشاريع ويحوّل الزوار إلى عملاء محتملين.",
    link: "https://mahmoudhassan-c11.github.io/templete-three/",
  },
  {
    img: "/assets/past work/الصخرة.png",
    label: "حملات إعلانية",
    title: "الصخرة لتلميع السيارات",
    text: "حملة إعلانية مدفوعة حققت زيادة كبيرة في الحجوزات خلال شهر واحد.",
  },
  {
    img: "/assets/past work/Screenshot 2026-08-02 170216.png",
    label: "ادارة صفحات",
    title: "إدارة صفحات الشركة",
    text: "إدارة صفحات وإنشاء محتوى بصري يعكس هوية العلامة ويزيد التفاعل.",
  },
];

type workItemType = {
  img: string;
  label: string;
  title: string;
  text: string;
  link?: string;
};

const Works = () => {
  return (
    <section className="bg-soft">
      <div className="container py-20">
        <span className="eyebrow mx-auto block w-fit">أعمالنا</span>
        <h3 className="text-center pt-5 text-3xl lg:text-6xl font-extrabold lg:w-4/5 mx-auto leading-9 lg:leading-20 mb-8">
          بعض من <span className="text-primary">مشاريعنا </span> المميزة
        </h3>
        <p className="text-muted text-lg leading-8 text-center" dir="rtl">
          نماذج توضح طريقة تفكيرنا: تصميم أنيق، تجربة سهلة، ونتائج عملية.
        </p>
        <ul className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-10" dir="rtl">
          {workItems.map((item: workItemType, index) => {
            return (
              <li
                key={"work-item-" + index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-shadow duration-300 hover:-translate-y-3"
              >
                <div className="img h-50 overflow-hidden flex items-center justify-center rounded-t-3xl border-b-2 border-muted">
                  <img
                    src={item.img}
                    alt={"Img of " + item.title}
                    className=""
                  />
                </div>
                <div className="content flex flex-col items-start gap-4 p-4">
                  <span
                    className="label block bg-border text-primary px-3 py-1 rounded-full"
                    dir="rtl"
                  >
                    {item.label}
                  </span>
                  <h5 className="font-bold text-2xl" dir="rtl">
                    {item.link ? (
                      <Link
                        className="underline"
                        to={item.link}
                        aria-label={"Go To " + item.title}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h5>
                  <p dir="rtl" className="text-muted mb-7">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Works;
