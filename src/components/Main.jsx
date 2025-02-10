import "../scss/layout/_main.scss";
import Gallery from "./Gallery";
import Projects from "./Projects";
import PropTypes from "prop-types";

function Main({ text }) {
  return (
    <div className="main">
      <section className="Hi">
        <h1>{text}</h1>
      </section>
      <section>
        <Gallery />
      </section>
      <section className="about-me">
        <h1 className="about-me-title">¿Quién soy?</h1>
        <p className="about-me-parag">
          He tenido la oportunidad de explorar un campo completamente diferente
          al que había trabajado anteriormente, y he decidido quedarme en él. Mi
          nombre es Tania, y soy apasionada del desarrollo web y las
          oportunidades de aprendizaje que este trae consigo. Me formé como
          traductora, y después de vivir en tres países diferentes y
          perfeccionar mi inglés, he pasado los últimos 10 años dedicándome a la
          enseñanza de idiomas y a la gestión de equipos y proyectos. En busca
          de nuevos objetivos y experiencias de aprendizaje, comencé mi
          formación en programación web con Adalab. A través de ello, descubrí
          un mundo lleno de posibilidades, donde la innovación es constante, la
          tecnología mejora la vida diaria de los usuarios y puedes ser parte
          del cambio desde adentro. Me apasiona el trabajo en equipo, crecer y
          aprender junto a profesionales de este sector. Es por eso que busco
          unirme a una empresa donde pueda desarrollarme profesionalmente y
          expandir mi creatividad. Además... 📚 🍝 y 🎞️ como forma de vida.
        </p>
      </section>
      <section>
        <Projects />
      </section>
      <section className="skills">
        <h1 className="skills-title">Habilidades</h1>
        <p className="skills-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          mollitia placeat dolor reprehenderit iusto earum possimus rem,
          perspiciatis veniam eaque distinctio, totam rerum aperiam fugiat
          architecto fugit! Tempora, id accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias, sapiente. Nisi similique
          laboriosam autem nulla perspiciatis fugit, facilis voluptatum? Nobis
          quidem obcaecati deserunt architecto praesentium velit quisquam
          fugiat, possimus provident!
        </p>
        <div className="tech">
          <a
            href="https://nuria8890.github.io/ADALAB-project-module-2-team-3-HastaElInfinito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>JAVASCRIPT</h3>
          </a>
          <a
            href="https://tania-nad.github.io/project-promo-a-module-3-team-3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>REACT</h3>
          </a>

          <a
            href="https://kendaltw.github.io/sername-project-promo-A-module-1-team-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>HTML/CSS</h3>
          </a>
          <a
            href="https://kendaltw.github.io/sername-project-promo-A-module-1-team-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>SASS</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>NODE</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>EXPRESS</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>MySQL</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/tania-nadales-704208302/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>INGLÉS</h3>
          </a>
        </div>
      </section>
      <section className="info">
        <h1 className="info-title">Conéctate conmigo</h1>
        <p className="info-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a eius
          voluptatum nemo quam error unde nam iure ipsa. Vel consequuntur eius
          rem ab nemo numquam incidunt. Magni, voluptatum labore.
        </p>
      </section>
    </div>
  );
}

Main.propTypes = {
  text: PropTypes.string.isRequired, // text debe ser un string y es obligatorio
};

export default Main;
