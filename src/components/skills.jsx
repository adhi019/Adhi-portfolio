import React from 'react'

const groups = {
  Cloud:['AWS','Route53','RDS','ELB','VPC'],
  Infrastructure:['Terraform','CloudFormation','Ansible'],
  Containers:['Docker','Kubernetes','ECS','EKS'],
  CI_CD:['Azure DevOps','Jenkins','GitHub Actions'],
  Monitoring:['CloudWatch','Grafana','Prometheus','Splunk'],
  Scripting:['Python','Bash','Shell']
}

export default function Skills(){
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
        {Object.entries(groups).map(([k,v])=>(
          <div key={k} className="card">
            <strong style={{color:'var(--accent)'}}>{k}</strong>
            <div style={{marginTop:8,color:'var(--muted)'}}>{v.join(' · ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}