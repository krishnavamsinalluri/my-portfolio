import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add a Gmail service → connect vamsinalluri806@gmail.com → copy Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy Template ID
// 4. Go to Account → API Keys → copy Public Key
// Replace the three placeholders below with your actual values:
const EMAILJS_SERVICE_ID  = 'service_4tzpuyp';
const EMAILJS_TEMPLATE_ID = 'template_p5cx2ve';  // 👈 still need this — check EmailJS Dashboard → Email Templates
const EMAILJS_PUBLIC_KEY  = 'NFMiJs5omhRp3yoIl';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { from_name, from_email, message } = form;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email);

    if (!from_name || !from_email || !message || !emailValid) {
      setStatus({ type: 'danger', msg: 'Please fill all required fields with a valid email.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', msg: '✅ Message sent! I\'ll get back to you soon.' });
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'danger', msg: '❌ Failed to send. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="wpo-contact-section section-padding" id="contact">
      <div className="container">
        <div className="row justify-content-center" style={{ marginBottom: '60px' }}>
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Contact</span>
              <h2>Get In Touch</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-12">
            <div className="wpo-contact-info">
              <h2>Contact Info</h2>
              <div className="info-item">
                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="text">
                  <h3>Location</h3>
                  <p>West Godavari Dist, Andhra Pradesh</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div className="text">
                  <h3>Email</h3>
                  <a href="mailto:vamsinalluri806@gmail.com">vamsinalluri806@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><i className="fas fa-phone"></i></div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+91 9573660370</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-12">
            <div className="wpo-contact-form-area">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      placeholder="Your Name *"
                      value={form.from_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="from_email"
                      placeholder="Your Email *"
                      value={form.from_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {status && <div className={`alert alert-${status.type}`}>{status.msg}</div>}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
