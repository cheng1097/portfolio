import React, { useState } from "react";
import { projects } from "../../data/projects";

const Portfolio = ({ pageActive }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  
  const categories = ["All", "Web design", "Web development"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter.toLowerCase()
        );

  return (
    <article
      className={`portfolio ${pageActive == "portfolio" ? "active" : ""}`}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter List */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeFilter === category ? "active" : ""}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter Select Box */}
        <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">{activeFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => setActiveFilter(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-category={project.category}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={project.isValid} title={project.isValid  ? "privé" : "public"}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title justified-text">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-category">{project.role}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
