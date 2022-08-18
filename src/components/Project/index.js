import worldWideJerky from "../../assets/images/worldwidejerky.png";
import marvelousGifs from "../../assets/images/marvel-ous-gifs.png";
import heroOutline from "../../assets/images/hero-outline.png";
import runBuddy from "../../assets/images/run-buddy.png";
import weatherDashboard from "../../assets/images/weather-dashboard.png";
import notetaker from "../../assets/images/note-taker.png";
import passwordGenerator from "../../assets/images/password-generator.png";
import InfoModal from "../Modal";

const Project = () => {
  const projects = [
    {
      id: 0,
      title: "World Wide Jerky",
      img: worldWideJerky,
      deployed: "https://worldwidejerky.herokuapp.com/",
      git: "https://github.com/mjzabriskie/world-wide-jerky",
    },
    {
      id: 1,
      title: "Marvel-ous GIFS",
      img: marvelousGifs,
      deployed: "https://mjzabriskie.github.io/marvel-ous-gifs/",
      git: "https://github.com/mjzabriskie/marvel-ous-gifs",
    },
    {
      id: 2,
      title: "A Hero's Outline",
      img: heroOutline,
      deployed: "https://herooutline.herokuapp.com/",
      git: "https://github.com/mjzabriskie/a-heros-outline",
    },
    {
      id: 3,
      title: "Run Buddy",
      img: runBuddy,
      deployed: "https://mjzabriskie.github.io/run-buddy/",
      git: "https://github.com/mjzabriskie/run-buddy",
    },
    {
      id: 4,
      title: "Weather or Not! Weather Dashboard",
      img: weatherDashboard,
      deployed: "https://mjzabriskie.github.io/weather-or-not/",
      git: "https://github.com/mjzabriskie/weather-or-not",
    },
    {
      id: 5,
      title: "Note Taker",
      img: notetaker,
      deployed: "https://application-of-note.herokuapp.com/",
      git: "https://github.com/mjzabriskie/application-of-note",
    },
    {
      id: 6,
      title: "Password Generator",
      img: passwordGenerator,
      deployed: "https://mjzabriskie.github.io/password-generator/",
      git: "https://github.com/mjzabriskie/password-generator",
    },
  ];
  return (
    <section className="container pt-4">
      <h1 className="pb-4 text-center">Projects</h1>
      <div className="row align-items-center justify-content-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-12 col-md-8 col-lg-6 text-center"
          >
            <div className="m-2 p-2 grow">
              <InfoModal project={project}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
