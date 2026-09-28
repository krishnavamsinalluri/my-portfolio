import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_4tzpuyp';
const EMAILJS_TEMPLATE_ID = 'template_p5cx2ve';
const EMAILJS_PUBLIC_KEY  = 'NFMiJs5omhRp3yoIl';

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
      setStatus({ type: 'danger', msg: 'Please fill all required fields with a valid email address.' });
      return;
    }
    
    setLoading(true);
    setStatus(null);
    
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus({ type: 'success', msg: '✅ Thank you! Your message has been sent successfully.' });
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'danger', msg: '❌ Could not send message automatically. Please email vamsinalluri806@gmail.com directly.' });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Hyderabad, India', href: null },
    { icon: 'fas fa-envelope', label: 'Email', value: 'vamsinalluri806@gmail.com', href: 'mailto:vamsinalluri806@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 9573660370', href: 'tel:+919573660370' },
  ];

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-paper-plane"></i> Get In Touch</span>
          <h2 className="gradient-text">Let's Work Together</h2>
          <p style={{ margin: '0 auto' }}>
            Have an open role, project opportunity, or question? Feel free to drop a message.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left info column */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Direct Contact Info</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '30px' }}>
              I am open to full-time Software Engineer positions, freelance projects, and tech conversations.
            </p>

            <div style={{ marginBottom: '32px' }}>
              {contactMethods.map((method) => (
                <div key={method.label} className="contact-method">
                  <div className="contact-method-icon">
                    <i className={method.icon}></i>
                  </div>
                  <div>
                    <label>{method.label}</label>
                    {method.href ? (
                      <a href={method.href}>{method.value}</a>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700', display: 'block', marginBottom: '12px' }}>
                Connect on Networks
              </label>
              <div className="hero-socials">
                <a href="https://www.linkedin.com/in/krishna-vamsi-503986249" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/krishnavamsinalluri" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:vamsinalluri806@gmail.com" className="social-link" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject (Optional)"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message *"
                  className="form-control"
                  required
                ></textarea>
              </div>

              {status && (
                <div className={`alert-msg alert-${status.type}`}>
                  {status.msg}
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
                {loading ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending Message...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
