const About = () => {
  return (
    <section>
      <div className="who-are-us bg-border">
        <div className="container flex flex-col-reverse lg:flex-row py-20 min-h-screen gap-10">
          <div className="left flex-3 flex flex-col items-end justify-center gap-5">
            <span className="eyebrow mx-auto lg:mx-0">من نحن</span>
            <h3
              className="font-extrabold text-3xl lg:text-5xl leading-10 lg:leading-15 py-3 text-center lg:text-start w-full lg:w-auto"
              dir="rtl"
            >
              شريكك الموثوق في <br />
              <span className="text-primary">التحول الرقمي</span>
            </h3>
            <p
              className="text-muted text-lg leading-8 text-center lg:text-start"
              dir="rtl"
            >
              ألجو شركة تقنية متخصصة تأسست بهدف مساعدة الشركات والأفراد على
              تحقيق النمو الرقمي. نؤمن بأن كل فكرة جيدة تستحق أن تتحول إلى واقع
              رقمي مؤثر.
            </p>
            <p
              className="text-muted text-lg leading-8 text-center lg:text-start"
              dir="rtl"
            >
              يجمع فريقنا بين التصميم، التطوير، والتسويق الرقمي لنقدم حلولًا
              متكاملة تناسب احتياجاتك وأهدافك، من أول فكرة وحتى قياس النتائج.
            </p>
            <ul className="cards flex flex-col lg:flex-row justify-between items-center w-full gap-5 py-5">
              <li className="font-bold p-4 flex-1 text-xl rounded-lg text-center bg-white w-full lg:w-auto">
                الإبداع
              </li>
              <li className="font-bold p-4 flex-1 text-xl rounded-lg text-center bg-white w-full lg:w-auto">
                الجودة
              </li>
              <li className="font-bold p-4 flex-1 text-xl rounded-lg text-center bg-white w-full lg:w-auto">
                الالتزام
              </li>
              <li className="font-bold p-4 flex-1 text-xl rounded-lg text-center bg-white w-full lg:w-auto">
                الشغف
              </li>
            </ul>
          </div>
          <div className="right flex-2 rounded-xl overflow-hidden relative shadow-xl shadow-shadow">
            <img
              src="./../../public/assets/b842583b2176aace3eab9547d28d1239.jpg"
              alt="3D About Us Image Hero"
              className="w-full h-full bg-cover"
            />
            <div className="w-70 h-70 rounded-full absolute right-0 bottom-0 bg-border translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute bottom-8 right-8 bg-white p-5 flex-col flex justify-center items-end rounded-xl shadow-shadow shadow-lg">
              <span className="text-2xl text-primary font-extrabold">+5</span>
              <span className="text-sm font-bold text-muted">
                سنوات من الخبرة
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="how-we-works bg-soft">
        <div className="container py-20">
          <span className="eyebrow mx-auto block w-fit">من نحن</span>
          <h3 className="text-center py-5 text-3xl lg:text-6xl font-extrabold lg:w-4/5 mx-auto leading-9 lg:leading-20 mb-8">
            خطوات <span className="text-primary">بسيطة وواضحة</span> لتحقيق
            نتائج مذهلة
          </h3>
          <ul className="cards flex gap-7 items-center justify-between flex-col lg:flex-row-reverse text-center">
            <li className="bg-white w-full lg:w-auto flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl shadow-shadow shadow-lg">
              <div className="num font-extrabold text-3xl text-soft bg-linear-to-br from-primary to-secondary p-3 w-fit rounded-xl">
                01
              </div>
              <h4 dir="rtl" className="font-bold text-2xl">
                الاستشارة
              </h4>
              <p dir="rtl" className="text-muted">
                نستمع لأفكارك وأهدافك ونحلل احتياجاتك بدقة.
              </p>
            </li>
            <li className="bg-white w-full lg:w-auto flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl shadow-shadow shadow-lg">
              <div className="num font-extrabold text-3xl text-soft bg-linear-to-br from-primary to-secondary p-3 w-fit rounded-xl">
                02
              </div>
              <h4 dir="rtl" className="font-bold text-2xl">
                التخطيط
              </h4>
              <p dir="rtl" className="text-muted">
                نضع خطة عمل مفصلة مع جدول زمني واضح.
              </p>
            </li>
            <li className="bg-white w-full lg:w-auto flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl shadow-shadow shadow-lg">
              <div className="num font-extrabold text-3xl text-soft bg-linear-to-br from-primary to-secondary p-3 w-fit rounded-xl">
                03
              </div>
              <h4 dir="rtl" className="font-bold text-2xl">
                التنفيذ
              </h4>
              <p dir="rtl" className="text-muted">
                نبدأ العمل باحترافية مع تحديثات دورية.
              </p>
            </li>
            <li className="bg-white w-full lg:w-auto flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl shadow-shadow shadow-lg">
              <div className="num font-extrabold text-3xl text-soft bg-linear-to-br from-primary to-secondary p-3 w-fit rounded-xl">
                04
              </div>
              <h4 dir="rtl" className="font-bold text-2xl">
                المتابعة
              </h4>
              <p dir="rtl" className="text-muted">
                نقيس النتائج ونحسن الأداء لضمان النجاح.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
