import HubIcon from "@mui/icons-material/Hub";
import CampaignIcon from "@mui/icons-material/Campaign";
import WebIcon from "@mui/icons-material/Web";

const Services = () => {
  return (
    <section id="services" className="bg-soft min-h-screen py-20">
      <div className="container flex flex-col items-center">
        <span className="eyebrow mx-auto">خدماتنا</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold pt-6 pb-3 text-center">
          نقدم لك <span className="text-primary">حلولًا شاملة</span> لنمو عملك
        </h2>
        <p
          className="py-5 px-5 lg:px-0 leading-8 lg:leading-10 text-lg text-center lg:text-start text-muted mb-5"
          dir="rtl"
        >
          فريق متخصص يقدم خدمات رقمية متكاملة بمعايير واضحة ونتائج قابلة للقياس.
        </p>
        <ul className="flex flex-col lg:flex-row-reverse justify-center gap-8 items-center w-full">
          <li
            className="card w-full lg:w-auto flex-1 bg-white rounded-xl min-h-100 p-4 flex flex-col items-start shadow-lg shadow-shadow hover:-translate-y-3  duration-300"
            dir="rtl"
          >
            <div className="icon w-15 h-15 flex justify-center items-center bg-linear-to-br from-primary to-secondary rounded-xl text-white">
              <HubIcon fontSize="large" />
            </div>
            <div className="text py-3">
              <h4 className="font-extrabold text-2xl my-5 text-ink">
                إدارة صفحات الميديا
              </h4>
              <p className="leading-6 text-muted">
                إدارة احترافية لصفحات التواصل الاجتماعي مع محتوى جذاب وخطة نشر
                تساعدك على بناء جمهور حقيقي.
              </p>
            </div>
            <ul className="features text-muted font-bold flex-col flex gap-3 my-3">
              <li>إنشاء محتوى يومي</li>
              <li>تصميم جرافيك احترافي</li>
              <li>إدارة التعليقات والرسائل</li>
              <li>تقارير أداء شهرية</li>
            </ul>
          </li>
          <li
            className="card w-full lg:w-auto flex-1 bg-linear-to-br from-primary to-secondary rounded-xl min-h-100 p-4 flex flex-col items-start shadow-lg shadow-shadow -translate-y-3 hover:-translate-y-6  duration-300"
            dir="rtl"
          >
            <div className="icon w-15 h-15 flex justify-center items-center bg-soft rounded-xl text-primary">
              <CampaignIcon fontSize="large" />
            </div>
            <div className="text py-3">
              <h4 className="font-extrabold text-2xl my-5 text-white">
                إدارة الحملات الإعلانية
              </h4>
              <p className="leading-6 text-soft">
                تخطيط وتنفيذ حملات مدفوعة على فيسبوك، إنستجرام، وجوجل لتحقيق
                أفضل عائد من الميزانية.
              </p>
            </div>
            <ul className="features text-white font-bold flex-col flex gap-3 my-3">
              <li>دراسة السوق المستهدف</li>
              <li>تصميم إعلانات جذابة</li>
              <li>تحسين الميزانية</li>
              <li>تحليل النتائج وتطويرها</li>
            </ul>
            <div className="bg-[#ffffff40] absolute top-5 left-5 rounded-lg p-2 text-white text-sm font-bold">
              الأكثر طلباً
            </div>
          </li>
          <li
            className="card w-full lg:w-auto flex-1 bg-white rounded-xl min-h-100 p-4 flex flex-col items-start shadow-lg shadow-shadow hover:-translate-y-3 duration-300"
            dir="rtl"
          >
            <div className="icon w-15 h-15 flex justify-center items-center bg-linear-to-br from-primary to-secondary rounded-xl text-white">
              <WebIcon fontSize="large" />
            </div>
            <div className="text py-3">
              <h4 className="font-extrabold text-2xl my-5 text-ink">
                إنشاء المواقع الإلكترونية
              </h4>
              <p className="leading-6 text-muted">
                تصميم وتطوير مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة،
                ومهيأة لمحركات البحث منذ البداية.
              </p>
            </div>
            <ul className="features text-muted font-bold flex-col flex gap-3 my-3">
              <li>تصميم فريد ومخصص</li>
              <li>متجاوب مع كل الشاشات</li>
              <li>تحسين SEO أساسي</li>
              <li>دعم فني مستمر</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
