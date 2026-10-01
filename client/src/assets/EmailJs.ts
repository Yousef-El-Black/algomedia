import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  service: string;
  details: string;
};

const serviceId = "service_b4j655r";
const templateId = "template_u1lu6al";
const publicKey = "ZjjBBSmPt_qFcvLYF";

export const sendEmail = (
  e: React.FormEvent<HTMLFormElement>,
  form: FormData,
) => {
  e.preventDefault();

  emailjs
    .send(
      serviceId,
      templateId,
      // Record<string, unknown> matches EmailJS's template parameters shape
      form as Record<string, unknown>,
      {
        publicKey: publicKey,
      },
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      },
    );
};
