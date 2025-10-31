import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactEmail = "rahuls6408@gmail.com";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honey: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please fill out all fields.",
      });
      return;
    }

    if (form.honey) {
      setStatus({ loading: false, ok: false, msg: "Spam detected." });
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch("https://formspree.io/f/mldoppwq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "", honey: "" });
        setStatus({ loading: false, ok: true, msg: "Thanks — message sent." });
        return;
      }

      
      throw new Error("server error");
    } catch (err) {
     
      const subject = encodeURIComponent(`Contact from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

   
      setStatus({
        loading: false,
        ok: true,
        msg: "Opened mail client as fallback.",
      });
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0b001a] text-white py-20 px-6"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-semibold text-purple-400"
          >
            Get in touch
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Want to work together or ask a quick question? Send a message below
            or email me directly at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-purple-300 underline"
            >
              {contactEmail}
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
       
          <div className="space-y-6">
            <div className="bg-white/3 p-6 rounded-2xl border border-purple-800/10">
              <h3 className="text-lg font-medium text-gray-100 mb-2">
                Work with me
              </h3>
              <p className="text-sm text-gray-300">
                I’m available for freelance and full-time roles. I focus on Full
                Stack development, performance, and accessible UI.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1R-Q-x3iEAOBvzIpI3isUhxwwnH-U_NCM"
                  download
                  className="inline-block border border-purple-600 text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-purple-800/8 bg-[#0b001a]/40">
              <div className="text-sm text-gray-300">Email</div>
              <a
                href={`mailto:${contactEmail}`}
                className="block text-purple-300 mt-1"
              >
                {contactEmail}
              </a>

              <div className="mt-4 text-sm text-gray-300">Location</div>
              <div className="text-gray-400 mt-1">Faridabad, Haryana</div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/Rahuls2642"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.17 9.07 7.57 10.54.55.1.75-.23.75-.52v-1.79c-3.07.67-3.72-1.48-3.72-1.48-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.67 1.14 1.67 1.14.98 1.66 2.57 1.18 3.2.9.1-.7.38-1.18.7-1.45-2.45-.28-5.02-1.22-5.02-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.93 0 0 .92-.29 3.02 1.12.88-.24 1.82-.36 2.76-.36s1.88.12 2.76.36c2.1-1.41 3.02-1.12 3.02-1.12.6 1.52.22 2.65.11 2.93.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.33.74.98.74 1.98v2.94c0 .3.2.63.76.52 4.4-1.47 7.56-5.64 7.56-10.54C23.25 5.48 18.27.5 12 .5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahuls2642/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.65 4.95-2.65C22.64 7.55 24 10.3 24 14.6V24h-5v-8.5c0-2.05-.04-4.68-2.85-4.68-2.86 0-3.3 2.23-3.3 4.53V24h-5V8z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/4 p-6 rounded-2xl border border-purple-800/12"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            aria-label="Contact form"
          >
           
            <input
              type="text"
              name="honey"
              value={form.honey}
              onChange={update}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <label className="block text-sm text-gray-200 mb-2">
              Name
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                className="mt-2 block w-full bg-transparent border border-purple-700/30 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your name"
              />
            </label>

            <label className="block text-sm text-gray-200 mb-2">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                className="mt-2 block w-full bg-transparent border border-purple-700/30 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="you@domain.com"
              />
            </label>

            <label className="block text-sm text-gray-200 mb-3">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                required
                rows={5}
                className="mt-2 block w-full bg-transparent border border-purple-700/30 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Write a short message..."
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => {
                  
                  const subject = encodeURIComponent("Quick message");
                  window.location.href = `mailto:${contactEmail}?subject=${subject}`;
                }}
                className="inline-flex items-center justify-center border border-purple-600 text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 hover:text-white"
              >
                Email Directly
              </button>
            </div>

           
            {status.msg && (
              <div
                role="status"
                className={`mt-4 text-sm ${
                  status.ok ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.msg}
              </div>
            )}

            <p className="mt-6 text-xs text-gray-500">
              I typically reply within a few business days. Your email will only
              be used to respond — no spam.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
