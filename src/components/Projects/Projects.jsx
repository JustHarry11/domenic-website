import React from "react";
import projects from "../ProjectData/ProjectData";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="project-page-content">
            <h1 className='title-text'>Projects</h1>
            <div className="page">
                <div className="main">
                    <div className="grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    gridColumn: `span ${project.colSpan || 1}`,
                                    gridRow: `span ${project.rowSpan || 1}`,
                                }}
                            >
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="card-image"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}