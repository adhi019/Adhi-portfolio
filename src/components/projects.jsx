import React from 'react'

const projects = [
  {
    title: 'ECS Modernization & CI/CD',
    desc: 'Designed ECS clusters with Fargate, ECR image pipelines and automated CI/CD using Azure DevOps. Embedded Trivy/SonarQube scans in pipelines to prevent vulnerable artifacts from deploying.',
    tech: ['AWS ECS','Fargate','Azure DevOps','Trivy','SonarQube']
  },
  {
    title: 'Automated SSL Management',
    desc: 'Implemented proactive SSL certificate rotation using Lambda + EventBridge + CloudWatch. Notified teams 45 days before expiry — reduced downtime incidents to zero.',
    tech: ['AWS Lambda','EventBridge','CloudWatch']
  },
  {
    title: 'Non-Production Migration',
    desc: 'Led migration of non-production environments across AWS accounts with zero disruption using CloudFormation and Terraform.',
    tech: ['Terraform','CloudFormation','AWS']
  }
]

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((p,idx)=>(
          <div key={idx} className="card">
            <h3 style={{color:'white'}}>{p.title}</h3>
            <p style={{color:'var(--muted)'}}>{p.desc}</p>
            <div style={{marginTop:10,fontSize:13}}>
              {p.tech.map((t,i)=>(
                <span key={i} style={{marginRight:8,color:'var(--neon)'}}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}