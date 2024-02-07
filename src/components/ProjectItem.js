import React from "react";

function ProjectItem({ name, about, technologies, id }) {
const techArr = technologies.map(tech => {return <span key={tech}>{tech}</span>})
  return (
    <div className="project-item">
      
      <h3>{name}</h3>
      <p>{about}</p>
      <div key={id} className="technologies">
        {techArr}
      </div>
    </div>
  );
}

export default ProjectItem;
