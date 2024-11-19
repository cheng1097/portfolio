import { info } from "../../data/info";

const Cv = ({ pageActive, pageId }) => {
  return (
    <article
      className={`resume ${pageActive == "cv" ? "active" : ""}`}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Curriculum Vitae</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Diplômes et Formations</h3>
        </div>

        <ol className="timeline-list">
          {info.formations.map((formation) => (
            <li className="timeline-item" key={formation.id}>
              <h4 className="h4 timeline-item-title">{formation.diplome}</h4>
              <p className="timeline-text"> ({formation.ecole})</p>
              <span>{formation.date}</span>

              <p className="timeline-text">{formation.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="bag-outline"></ion-icon>
          </div>

          <h3 className="h3">Expériences Professionnelles</h3>
        </div>

        <ol className="timeline-list">
          {info.experiences.map((experience) => (
            <li className="timeline-item" key={experience.id}>
              <h4 className="h4 timeline-item-title">{experience.role}</h4>
              <p className="timeline-text">({experience.entreprise})</p>
              <span>{experience.date}</span>

              <p className="timeline-text">{experience.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">Technologies</h3>

        <ul className="skills-list content-card">
          {info.techno.map((techno) => (
            <li className="skills-item" key={techno.id}>
              <div className="title-wrapper">
                <h5 className="h5">{techno.name}</h5>
                <data value="80">{techno.level}</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${techno.level}` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Cv;
