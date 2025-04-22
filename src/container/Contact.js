
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Decorative elements */}
      <div className="contact-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, 20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="gradient-blob"></div>
      </div>

      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? Send me a message!
        </motion.p>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              ></textarea>
              <div className="input-underline"></div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="submit-spinner"></span>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                className="submit-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="submit-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="info-title">Contact Information</h3>
            <p className="info-description">
              Feel free to reach out through any of these channels:
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <path d="M22 6l-10 7L2 6"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:hello@example.com" className="info-value">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <a href="tel:+1234567890" className="info-value">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a12 12 0 100-24 12 12 0 000 24zm9.58-12.42a23.88 23.88 0 01-1.02 5.03 20.8 20.8 0 01-7.24 2.85c.35-.6.66-1.24.93-1.9.23-.58.45-1.17.63-1.78 2.68-.1 5.23-.88 6.7-2.2zM12 4.8c2.6 0 5 .9 6.82 2.48a24.1 24.1 0 012.5 4.04 20.9 20.9 0 00-5.5-.72c-1.28 0-2.53.1-3.74.3a23.8 23.8 0 00-1.1-3.62c.8-.3 1.64-.48 2.52-.48zm-3.64.8c.5 1.2.9 2.45 1.2 3.75a22.4 22.4 0 00-5.33 1.1 12 12 0 014.13-4.85zM3.33 12c.13 1.15.4 2.27.8 3.33a12.02 12.02 0 003.8-9.33 12.1 12.1 0 00-4.6 6zm2.1 5.1c1.03.5 2.2.8 3.43.8.3 0 .6 0 .9-.03a20.3 20.3 0 01-2.54 2.9 12 12 0 01-1.8-3.67zm7.33 3.53c1.33.2 2.7.2 4.03 0a12 12 0 01-4.03-9.9c-.03.6-.03 1.2 0 1.8.02.6.06 1.2.13 1.8.03.3.06.6.1.9.5 2.5 1.5 4.8 2.9 6.9l-.13.3z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          padding: 8rem 2rem;
          background: linear-gradient(to bottom, #1e293b, #0f172a);
          overflow: hidden;
        }

        .contact-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(165, 180, 252, 0.1);
          border: 1px solid rgba(165, 180, 252, 0.2);
        }

        .shape:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 20%;
          left: 10%;
        }

        .shape:nth-child(2) {
          width: 30px;
          height: 30px;
          top: 60%;
          left: 15%;
        }

        .shape:nth-child(3) {
          width: 15px;
          height: 15px;
          top: 30%;
          right: 10%;
        }

        .shape:nth-child(4) {
          width: 25px;
          height: 25px;
          top: 70%;
          right: 15%;
        }

        .shape:nth-child(5) {
          width: 40px;
          height: 40px;
          bottom: 10%;
          left: 20%;
        }

        .shape:nth-child(6) {
          width: 35px;
          height: 35px;
          bottom: 20%;
          right: 20%;
        }

        .gradient-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          top: 50%;
          right: -300px;
          border-radius: 50%;
          filter: blur(40px);
        }

        .section-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          color: white;
        }

        .section-title .highlight {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #a5b4fc;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 4rem;
          line-height: 1.6;
        }

        .contact-content {
          display: flex;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-form {
          flex: 1;
          background: rgba(15, 23, 42, 0.6);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(165, 180, 252, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #a5b4fc;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(165, 180, 252, 0.3);
          color: white;
          font-size: 1rem;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-bottom-color: #6366f1;
        }

        .input-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          transition: width 0.3s ease;
        }

        .form-input:focus ~ .input-underline {
          width: 100%;
        }

        textarea.form-input {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-button:hover {
          box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .submit-message {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }

        .submit-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .submit-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .contact-info {
          flex: 1;
          padding: 2rem;
        }

        .info-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
        }

        .info-description {
          color: #a5b4fc;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #6366f1;
        }

        .info-icon svg {
          width: 20px;
          height: 20px;
        }

        .info-content {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          color: #a5b4fc;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .info-value {
          color: white;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s;
        }

        .info-value:hover {
          color: #a5b4fc;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(165, 180, 252, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-3px);
        }

        .social-link svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1024px) {
          .contact-content {
            flex-direction: column;
            gap: 3rem;
          }

          .contact-form,
          .contact-info {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 6rem 1.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
