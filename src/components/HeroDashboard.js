import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState('developer');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`const engineer = {
  name: "Krishna Vamsi",
  title: "Frontend Developer",
  skills: ["Angular", "React", "Next.js", "TypeScript", "REST APIs"],
  experience: "2+ Years",
  status: "Open for Opportunities"
};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className="dev-dashboard-window"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Title bar */}
      <div className="dashboard-titlebar">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>

        <div className="dashboard-tabs">
          <button 
            className={`dash-tab ${activeTab === 'developer' ? 'active' : ''}`}
            onClick={() => setActiveTab('developer')}
          >
            <i className="fas fa-code" style={{ color: '#8b5cf6' }}></i> Developer.tsx
          </button>
          <button 
            className={`dash-tab ${activeTab === 'stack' ? 'active' : ''}`}
            onClick={() => setActiveTab('stack')}
          >
            <i className="fas fa-layer-group" style={{ color: '#06b6d4' }}></i> Stack.json
          </button>
          <button 
            className={`dash-tab ${activeTab === 'metrics' ? 'active' : ''}`}
            onClick={() => setActiveTab('metrics')}
          >
            <i className="fas fa-chart-bar" style={{ color: '#10b981' }}></i> Metrics.config
          </button>
        </div>

        <div className="window-badge">
          <span className="status-dot"></span> Active Dev Mode
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="dashboard-content">
        <AnimatePresence mode="wait">
          {activeTab === 'developer' && (
            <motion.div 
              key="developer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="code-comment">{"// Krishna Vamsi — Frontend Developer Profile"}</span>
                <button 
                  onClick={handleCopyCode}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: copied ? '#10b981' : 'var(--text-secondary)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    fontFamily: 'Fira Code, monospace'
                  }}
                >
                  <i className={copied ? "fas fa-check" : "far fa-copy"}></i> {copied ? 'Copied!' : 'Copy Object'}
                </button>
              </div>

              <pre className="code-snippet">
                <code>
                  <span className="code-keyword">import</span> &#123; <span className="code-function">Developer</span> &#125; <span className="code-keyword">from</span> <span className="code-string">'@snad/engineering'</span>;<br /><br />
                  <span className="code-keyword">export const</span> <span className="code-function">krishnaVamsi</span>: <span className="code-property">Developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">'Krishna Vamsi'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">'Software Engineer @ SNAD Developers'</span>,<br />
                  &nbsp;&nbsp;experience: <span className="code-string">'2+ Years Frontend Engineering'</span>,<br />
                  &nbsp;&nbsp;coreStack: [<span className="code-string">'Angular'</span>, <span className="code-string">'React.js'</span>, <span className="code-string">'Next.js'</span>, <span className="code-string">'TypeScript'</span>],<br />
                  &nbsp;&nbsp;specialties: [<span className="code-string">'REST API Integration'</span>, <span className="code-string">'Figma-to-UI'</span>, <span className="code-string">'PrimeNG'</span>],<br />
                  &nbsp;&nbsp;location: <span className="code-string">'Hyderabad, India'</span>,<br />
                  &nbsp;&nbsp;openForHire: <span className="code-keyword">true</span>,<br />
                  &#125;;
                </code>
              </pre>

              <div className="tech-badge-cloud" style={{ marginTop: '20px' }}>
                <span className="tech-pill" style={{ borderColor: 'rgba(221, 0, 49, 0.4)', color: '#ef4444' }}>
                  <i className="fab fa-angular"></i> Angular 17+
                </span>
                <span className="tech-pill" style={{ borderColor: 'rgba(97, 218, 251, 0.4)', color: '#38bdf8' }}>
                  <i className="fab fa-react"></i> React 19
                </span>
                <span className="tech-pill" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#f8fafc' }}>
                  <i className="fas fa-cube"></i> Next.js
                </span>
                <span className="tech-pill" style={{ borderColor: 'rgba(49, 120, 198, 0.4)', color: '#60a5fa' }}>
                  <i className="fas fa-code"></i> TypeScript
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === 'stack' && (
            <motion.div 
              key="stack"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '15px', color: 'var(--accent-cyan-light)', marginBottom: '8px' }}>
                  Primary Tech Stack & Ecosystem
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Production experience building enterprise HRMS, ride-hailing platforms, and e-commerce apps.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {[
                  { name: 'Angular & PrimeNG', level: 'Production Core', color: '#ef4444', icon: 'fab fa-angular' },
                  { name: 'React.js & Redux', level: 'Production Core', color: '#38bdf8', icon: 'fab fa-react' },
                  { name: 'Next.js & SCSS', level: 'Live Deployed', color: '#c084fc', icon: 'fas fa-cube' },
                  { name: 'TypeScript & JS', level: 'Daily Driver', color: '#60a5fa', icon: 'fas fa-code' },
                  { name: 'REST APIs & Axios', level: 'Full Integration', color: '#10b981', icon: 'fas fa-plug' },
                  { name: 'Google Maps API', level: 'Location & Tracking', color: '#f59e0b', icon: 'fas fa-map-marked-alt' },
                ].map((item) => (
                  <div key={item.name} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className={item.icon} style={{ color: item.color, fontSize: '18px' }}></i>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600' }}>{item.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div 
              key="metrics"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="dashboard-metrics-grid">
                <div className="metric-card">
                  <h3>2+ Years</h3>
                  <p>Software Engineering Exp @ SNAD Developers</p>
                </div>
                <div className="metric-card">
                  <h3>5+ Major</h3>
                  <p>Deployed Enterprise & Web Projects</p>
                </div>
                <div className="metric-card">
                  <h3>15+ Skills</h3>
                  <p>Frontend, APIs & AI-Assisted Tooling</p>
                </div>
                <div className="metric-card">
                  <h3>100%</h3>
                  <p>Responsive & Pixel-Perfect Delivery</p>
                </div>
              </div>

              <div style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '13px'
              }}>
                <span style={{ color: '#34d399', fontWeight: '600' }}>⚡ Lighthouse Score</span>
                <span style={{ fontFamily: 'Fira Code, monospace', color: '#ffffff' }}>Performance: 98/100</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
