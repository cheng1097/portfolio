import { info } from "../../data/info";
import { clients } from "../../data/clients";

function About({pageActive}) { 
  return (
    <article className={`about ${pageActive == 'about' ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">À propos</h2>
      </header>

      <section className="about-text justified-text">
        <p>{info.about}</p>
      </section>

      {/* <!--
          - service
        -->*/}

      <section className="service">
        <h3 className="h3 service-title">Compétences Générale</h3>

        <ul className="service-list">
          {info.competence_g.map((competence) => (
            <li className="service-item" key={competence.id}>
              <div className="service-icon-box">
                <img src={competence.img} alt={competence.title} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{competence.title}</h4>

                <p className="service-item-text justified-text">
                  {competence.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Colaborations</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((client) => (
            <li className="clients-item" key={client.id}>
              <a href="#">
                <img src={client.logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default About;
