import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_4tzpuyp';
const EMAILJS_TEMPLATE_ID = 'template_p5cx2ve';
const EMAILJS_PUBLIC_KEY  = 'NFMiJs5omhRp3yoIl';

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.contact-animate').forEach((el, i) => {
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, i * 120);
        });
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus({ type: 'success', msg: '✅ Message sent! I\'ll get back to you soon.' });
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'danger', msg: '❌ Failed to send. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  const infoCards = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'West Godavari Dist, Andhra Pradesh', href: null },
    { icon: 'fas fa-envelope',       label: 'Email',    value: 'vamsinalluri806@gmail.com',          href: 'mailto:vamsinalluri806@gmail.com' },
    { icon: 'fas fa-phone',          label: 'Phone',    value: '+91 9573660370',                     href: 'tel:+919573660370' },
  ];

  const socials = [
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/krishna-vamsi-503986249', label: 'LinkedIn' },
    { icon: 'fab fa-github',      href: 'https://github.com/krishnavamsinalluri',              label: 'GitHub' },
    { icon: 'fas fa-envelope',    href: 'mailto:vamsinalluri806@gmail.com',                    label: 'Email' },
  ];

  return (
    <section className="contact-section section-padding" id="contact" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="contact-header contact-animate" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <span className="section-tag">Contact</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="contact-grid">

          {/* Left Panel */}
          <div className="contact-left contact-animate" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="contact-left-inner">
              <h3>Get In Touch</h3>
              <p>I'm currently open to new opportunities. Whether it's a full-time role, freelance project, or just a chat — feel free to reach out!</p>

              <div className="contact-info-cards">
                {infoCards.map(({ icon, label, value, href }) => (
                  <div className="contact-info-card" key={label}>
                    <div className="contact-info-icon"><i className={icon}></i></div>
                    <div>
                      <span className="contact-info-label">{label}</span>
                      {href
                        ? <a href={href} className="contact-info-value">{value}</a>
                        : <p className="contact-info-value">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-socials">
                <p>Find me on</p>
                <div className="contact-social-links">
                  {socials.map(({ icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="contact-social-btn">
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="contact-right contact-animate" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`float-group ${focused === 'from_name' || form.from_name ? 'active' : ''}`}>
                    <input
                      type="text" name="from_name" value={form.from_name}
                      onChange={handleChange}
                      onFocus={() => setFocused('from_name')}
                      onBlur={() => setFocused('')}
                      required
                    />
                    <label>Your Name <span>*</span></label>
                    <div className="input-line"></div>
                  </div>
                  <div className={`float-group ${focused === 'from_email' || form.from_email ? 'active' : ''}`}>
                    <input
                      type="email" name="from_email" value={form.from_email}
                      onChange={handleChange}
                      onFocus={() => setFocused('from_email')}
                      onBlur={() => setFocused('')}
                      required
                    />
                    <label>Your Email <span>*</span></label>
                    <div className="input-line"></div>
                  </div>
                </div>
                <div className={`float-group ${focused === 'subject' || form.subject ? 'active' : ''}`}>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                  />
                  <label>Subject</label>
                  <div className="input-line"></div>
                </div>
                <div className={`float-group ${focused === 'message' || form.message ? 'active' : ''}`}>
                  <textarea
                    name="message" value={form.message} rows="5"
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                  ></textarea>
                  <label>Your Message <span>*</span></label>
                  <div className="input-line"></div>
                </div>

                {status && (
                  <div className={`contact-alert contact-alert-${status.type}`}>{status.msg}</div>
                )}

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? (
                    <><span className="btn-spinner"></span> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

     </div>
      </div>
    </section>
  );
}
