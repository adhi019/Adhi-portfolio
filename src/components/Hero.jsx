import React from 'react'

export default function Hero(){
  return (
    <div style={{padding:40}}>
      <div className="container" style={{maxWidth:1200}}>
        <div className="role-badge">{">_  DevOps Engineer"}</div>
        <h1 className="hero-title">Innovating with Cloud & DevOps</h1>
        <p className="hero-sub">Results-driven DevOps Engineer specializing in Cloud, Automation & Secure CI/CD.</p>

        <div className="stats" aria-hidden>
          <div className="stat card">
            <div className="num">99.99%</div>
            <div style={{color:'var(--muted)',fontSize:13}}>Systems uptime</div>
          </div>
          <div className="stat card">
            <div className="num">75%</div>
            <div style={{color:'var(--muted)',fontSize:13}}>Faster deployments</div>
          </div>
        </div>
      </div>
    </div>
  )
}