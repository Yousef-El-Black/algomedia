import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const reviews = [
  {
    comment:
      "“تعاملت مع ألجو لإدارة صفحات مطعمي وكانت النتائج مذهلة. زيادة واضحة في التفاعل والمتابعين، وفريق محترف جدًا.”",
    name: "أحمد محمد",
    role: "صاحب مطعم الذواقة",
  },
  {
    comment:
      "“صمموا لنا موقعًا احترافيًا في وقت قياسي. التصميم رائع، والأداء سريع، والتواصل كان ممتازًا من البداية.”",
    name: "سارة عبدالله",
    role: "مديرة شركة البناء العصري",
  },
  {
    comment:
      "“الحملة الإعلانية التي أداروها لعيادتي حققت نتائج ممتازة. تضاعفت الحجوزات خلال فترة قصيرة.”",
    name: "د. خالد العلي",
    role: "صاحب عيادة الصحة",
  },
];

type ReviewType = {
  comment: string;
  name: string;
  role: string;
  img?: string;
};

const Testmonials = () => {
  return (
    <section className="bg-border">
      <div className="container py-20">
        <span className="eyebrow mx-auto block w-fit">آراء العملاء</span>
        <h3 className="text-center pt-5 text-3xl lg:text-6xl font-extrabold lg:w-4/5 mx-auto leading-9 lg:leading-20 mb-8">
          ماذا يقول <span className="text-primary">عملاؤنا </span> عنا؟
        </h3>
        <ul className="flex gap-5 flex-col lg:flex-row" dir="rtl">
          {reviews.map((rev: ReviewType, index: number) => {
            return (
              <li
                key={"review-" + index}
                className="bg-card shadow-lg shadow-shadow rounded-lg p-4"
              >
                <p className="border-b-2 border-border py-5 text-xl leading-10 text-muted">
                  {rev.comment}
                </p>
                <div className="profile flex items-center p-4 gap-5">
                  <div className="img m-3 w-15 h-15 bg-linear-to-br from-primary to-secondary rounded-full flex justify-center items-center text-card overflow-hidden">
                    {rev.img ? (
                      <img
                        src={rev.img}
                        alt={"Avatar of " + rev.name}
                        className="w-full h-full"
                      />
                    ) : (
                      <PersonIcon fontSize="large" />
                    )}
                  </div>
                  <div className="text">
                    <h5 className="text-xl font-bold py-2">{rev.name}</h5>
                    <span className="text-muted">{rev.role}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container py-10" dir="rtl">
        <div className="banner bg-linear-to-br from-primary to-secondary w-full p-8 relative rounded-xl text-white overflow-hidden">
          <div className="decoration">
            <div className="white-blur absolute -top-10 left-10 bg-radial from-white to-transparent w-70 h-70 rounded-full blur-lg opacity-30 border-white border-2"></div>
            <div className="circle w-25 h-25 rounded-full absolute border-white border-2 opacity-35 right-1/6 top-1/10"></div>
            <div className="circle w-35 h-35 rounded-full absolute border-white border-2 opacity-35 right-1/3 -bottom-1/12"></div>
            <div className="circle w-40 h-40 rounded-full absolute border-white border-2 opacity-35 left-1/5 bottom-1/2"></div>
          </div>

          <h3 className="text-center lg:text-start text-2xl mx-auto lg:mx-0 lg:text-6xl font-extrabold py-5 w-4/5">
            جاهز لتحويل فكرتك إلى{" "}
            <span className="text-accent">واقع رقمي؟</span>
          </h3>
          <p className="py-5 text-card text-center lg:text-start text-lg lg:text-xl">
            تواصل معنا الآن واحصل على استشارة مجانية تساعدك على اختيار الطريق
            الأنسب لمشروعك.
          </p>
          <Link
            to={"/contact"}
            aria-label="Go To Contact Section"
            className="bg-white text-primary rounded-full p-4 my-5 mx-auto lg:mx-0 block w-fit font-bold cursor-pointer hover:-translate-y-3 duration-300"
          >
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
