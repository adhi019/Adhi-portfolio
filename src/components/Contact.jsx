import React from 'react'

export default function Contact(){
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div className="card">
        <div style={{display:'flex',gap:24,alignItems:'center',flexWrap:'wrap',justifyContent:'space-between'}}>
          <div>
            <div style={{fontWeight:700}}>Adhi Shankar</div>
            <div style={{color:'var(--muted)'}}>Senior Cloud Consultant • DevOps Engineer</div>
            <div style={{marginTop:8,color:'var(--muted)'}}>
              +44 7405325760 · velumaniadhishankar@gmail.com
            </div>

            <div style={{marginTop:8}}>
              <a href="mailto:velumaniadhishankar@gmail.com" className="contact-link">Email</a>
              <a href="https://linkedin.com" className="contact-link" target="_blank">LinkedIn</a>
              <a href="https://github.com" className="contact-link" target="_blank">GitHub</a>
            </div>
          </div>

          <div>
            <a
              className="contact-link"
              href="/public/Adhi-Shankar-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}