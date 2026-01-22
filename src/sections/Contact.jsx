import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message sent successfully 🚀",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Something went wrong 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section id="contact" className="my-20">
       
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div className="terminal-window">
          {/* Terminal Header */}
          <div className="terminal-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            <div className="terminal-content">
              <h3 className="head-text">Let`s talk</h3>
              <p className="terminal-description">
                Have a project in mind or just want to say hello?  
                Drop a message and I`ll get back to you.
              </p>
            </div>

            {/* Contact Form (Bottom aligned) */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="terminal-form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
