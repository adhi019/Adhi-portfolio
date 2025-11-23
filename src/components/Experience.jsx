import React from 'react'

const exp = [
  {
    role: 'Sr. DevOps Engineer — Loginet Solutions / TransformCx',
    period: 'May 2024 – Present',
    bullets: [
      'Engineered AWS infrastructure for Johnnie Walker; implemented ECS on Fargate and optimized ECR workflows.',
      'Built CI/CD pipelines with Azure DevOps, integrating SonarQube + Trivy for secure deployments.',
      'Automated monitoring using CloudWatch, Lambda & Grafana — reducing incident impact significantly.'
    ]
  },
  {
    role: 'Sr. Cloud Consultant — NCS PTE LTD',
    period: 'Mar 2023 – Jan 2024',
    bullets: [
      'Implemented multi-cloud solutions in AWS & Azure with automated DR solutions.',
      'Integrated AWS Security Hub + Splunk for centralized security compliance.'
    ]
  },
  {
    role: 'DevOps Engineer — Opteamix',
    period: 'Aug 2020 – Mar 2023',
    bullets: [
      'Managed Java/Tomcat deployments & automated AWS infrastructure using CFT & Ansible.',
      'Enhanced monitoring using AppDynamics & CloudTrail.'
    ]
  }
]

export default function Experience(){
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      {exp.map((e,idx)=>(
        <div key={idx} className="card">
          <strong style={{color:'white'}}>{e.role}</strong>
          <div style={{color:'var(--muted)',fontSize:13}}>{e.period}</div>
          <ul style={{marginTop:10,color:'var(--muted)'}}>
            {e.bullets.map((b,i)=>(
              <li key={i} style={{marginBottom:6}}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}