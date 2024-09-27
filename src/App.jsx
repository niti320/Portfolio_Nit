import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faHome, faUser, faCode, faLink, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import projectsData from './projects.json';
import AOS from 'aos';

function App() {
  
  const iconMap = {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faPython,
    faPhp
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev); 
  };

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
  });

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <div className="App custom-cursor">
      <div className="InnerBox">
        <div className={`horizontal-menu ${menuOpen ? 'active' : ''}`}>
          <FontAwesomeIcon
            icon={!menuOpen ? faTimes : faReact}
            onClick={toggleMenu}
            className="close-icon"
          />
          <nav className="navLinks2">
            <a href="https://linkedin.com/in/nitinsharma003" className="navLink" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='icons' /> LinkedIn
            </a>
            <a href="https://github.com/niti320" className="navLink" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className='icons' /> GitHub
            </a>
          </nav>
        </div>
        <header className='header' data-aos="fade-in">
          <div className="navBar">

            <nav className="navLinks">
             
              <a href="https://linkedin.com/in/nitinsharma003" className="navLink" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='icons' /> LinkedIn
              </a>
            
              <a href="https://github.com/niti320" className="navLink" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className='icons' /> GitHub
              </a>
            </nav>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="menu-icon" />

          </div>
        </header>

        <main className="mainBody">
          <div className="portfolioBox" style={{ height: "80vh" }}>

            <p className="portfolioTitle2" data-aos="flip-up" >{'< nitin >'}</p>
            <h1 className="portfolioTitle" data-aos="fade-down">{'< sharma >'}</h1>
            {/* <p className="descText" data-aos="flip-up">{"< Software Developer />"}</p> */}

          </div>

          <div className="portfolioBox" data-aos="fade-up">
            <div class="AboutSection" data-aos="fade-up">
              <div class="AboutHeader" data-aos="fade-up">

                <h2 className='descText2'>{"< About Me >"}</h2>
              </div>

              <div class="AboutContent">
                <p class="AboutText" data-aos="fade-up">
                  As a skilled and passionate developer, I specialize in transforming ideas into seamless digital experiences. With a deep understanding of front-end technologies like <strong>React Native, JavaScript, HTML, CSS</strong>, and more, I bring both creativity and technical expertise to every project. I thrive in building responsive, intuitive user interfaces, ensuring that every detail is pixel-perfect and optimized for performance.
                  My development approach is driven by clean code practices, attention to design, and a commitment to delivering robust and scalable solutions. Whether it's creating dynamic single-page applications or crafting smooth mobile-first designs, I stay ahead of industry trends to ensure every project I work on is cutting-edge.
                </p>
              </div>
            </div>
          </div>


          <div className="portfolioBox" style={{ marginBottom: "50px" }}>
            <p className="descText2" style={{marginBottom:"40px"}}data-aos="fade-up">{"< Skills >"}</p>




            <div className="skillsSection" >

              <div className="skillsIcons" data-aos="fade-up">
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faReact} className="skillIcon" style={{color:"#1099ee"}}/>
                  <span>React JS</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faReact} className="skillIcon" style={{color:"#1099ee"}}/>
                  <span>React Native</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faJsSquare} className="skillIcon" style={{color:"#feb247"}}/>
                  <span>JavaScript</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faHtml5} className="skillIcon" style={{color:"#e5532d"}}/>
                  <span>HTML</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faCss3Alt} className="skillIcon" style={{color:"#10ccee"}}/>
                  <span>CSS</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faPython} className="skillIcon" style={{color:"yellow"}}/>
                  <span>Python</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <p icon={faPython} className="skillIcon" style={{color:"skyblue", display:"flex", justifyContent:"center", alignItems:"center"}}>C<p style={{fontSize:"15px",fontWeight:"normal"}}>++</p></p>
                  <span>C++</span>
                </div>
                <div className="skill" data-aos="flip-up">
                  <FontAwesomeIcon icon={faPhp} className="skillIcon" style={{color:"pink"}}/>
                  <span>PHP</span>
                </div>
              </div>
            </div>
          </div>
          <p data-aos="fade-up" className="descText2">{'< Projects >'}</p>
          <div className="Projects">
            {projectsData.map((project, index) => (
              <div
                className="ProjectBox"
                data-aos="fade-up"
                key={index}
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
              >

                <div className="info">
                  <div className="ProjectTitle">{project.title}</div>
                  <div className="ProjectDesc">{project.description}</div>
                  <div className="Links"> <a href={project.githubLink} className="ProjectnavLink" target="_blank" rel="noreferrer">GitHub
                    <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faGithub} className='icons' />
                  </a>
                    <a href={project.actualLink} {...(project.fileId === 3 ? { download: true } : {})} className="ProjectnavLink" target="_blank" rel="noreferrer">{project.typer}
                      <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLink} className='icons' />
                    </a></div>
                  <div className="LanguagesBar">
                    {project.languages.map((lang, langIndex) => {
                      let iconColor;
                      switch (lang) {
                        case 'faHtml5':
                          iconColor = '#e5532d';
                          break;
                        case 'faJsSquare':
                          iconColor = '#feb247';
                          break;
                        case 'faReact':
                          iconColor = '#1099ee';
                          break;
                        case 'faHtml5':
                          iconColor = '';
                          break;
                        case 'faCss3Alt':
                          iconColor = '#1099ee';
                          break;
                        case 'faPython':
                          iconColor = 'yellow';
                          break;
                        case 'faPhp':
                          iconColor = 'pink';
                          break;
                        default:
                          iconColor = 'black';
                      }

                      return (
                        <div className="skill" style={{ width: '60px', height: '60px' }} key={langIndex}>
                          <FontAwesomeIcon
                            icon={iconMap[lang]}
                            style={{ fontSize: '40px', color: iconColor }}
                            className="skillIcon"
                          />
                        </div>
                      );
                    })}
                  </div>


                </div>


              </div>
            ))}
          </div>

        </main>

        <footer className="footer">
          <p>&copy; 2024 Nitin | Portfolio  | {'Yes i made this webiste'}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
