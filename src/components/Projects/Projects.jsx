import React from "react";
import projects from "../ProjectData/ProjectData";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="page-wrapper">
            <main className="page-main">
                <h1 className="page-title">Projects</h1>
                <div className="grid-wrapper">
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
            </main>
        </div>
    );
}
