// ProjectItem.js
import React from 'react';

function ProjectItem({ name, about, technologies }) {
  // Define techSpans to render technology items
  const techSpans = technologies.map((tech, index) => (
    <span key={index} className="tech">{tech}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div>{techSpans}</div> 
    </div>
  );
}

export default ProjectItem;

