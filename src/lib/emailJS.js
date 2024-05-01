import emailjs from "@emailjs/browser";

const emailJS = (data) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const templateParams = {
    from_name: data.name,
    phoneNumber: data.phoneNumber,
    from_email: data.email,
    to_name: "Luca Mamitiana",
    subject: data.subject,
    message: data.message,
  };

  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email send successfully!", response);
    })
    .catch((error) => {
      console.log("Error sending email", error);
    });
};

export default emailJS;
