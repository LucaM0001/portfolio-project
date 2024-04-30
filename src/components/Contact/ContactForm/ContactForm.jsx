import * as Icons from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    const serviceId = "service_0847tkl";
    const templateId = "template_1bh06yb";
    const publicKey = "jWAXqiGmvGwP_3CuE";

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

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <Icons.PersonCircle color="orange" />
              </span>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            {errors.name && (
              <div className="text-warning">{errors.name.message}</div>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <Icons.PhoneFill color="orange" />
              </span>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 8,
                    message: "Phone number must have at least 10 characters",
                  },
                })}
                type="text"
                placeholder="555-555-555"
                name="phoneNumber"
                id="phoneNumber"
                className="form-control"
              />
            </div>
            {errors.phoneNumber && (
              <div className="text-warning">{errors.phoneNumber.message}</div>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <Icons.EnvelopeFill color="orange" />
              </span>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="email@gmail.com"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            {errors.email && (
              <div className="text-warning">{errors.email.message}</div>
            )}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <Icons.QuestionCircleFill color="orange" />
              </span>
              <input
                {...register("subject", {
                  required: "Subject is required",
                })}
                type="text"
                placeholder="Project"
                id="subject"
                name="subject"
                className="form-control"
              />
            </div>
            {errors.subject && (
              <div className="text-warning">{errors.subject.message}</div>
            )}
          </div>
        </div>

        <div className="col">
          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              name="message"
              id="message"
              className="form-control"
              placeholder="Please describe shorly your project..."
            ></textarea>
            {errors.message && (
              <div className="text-warning">{errors.message.message}</div>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="text-uppercase btn btn-outline-danger"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
