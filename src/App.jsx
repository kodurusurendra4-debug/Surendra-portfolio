import './App.css'
import {useEffect} from 'react'
function App(){
  useEffect(() => {
  window.history.scrollRestoration = 'manual'
  window.location.hash = ''
  window.scrollTo(0, 0)
}, [])
  return(
    <div>
      <nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
  <a href="#coding">Coding</a>
  <a href="#tech">Tech Stack</a>
  <a href="#experience">Experience</a>
</nav>
      <h1 id="home">hi, i'm Surendra</h1>
      
      <p>
  Currently learning DSA, React.js, and backend development.
</p>
<a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  className="resume-btn"
  download
>
  Download Resume
</a>
      <button onClick={() => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  })
}}>View My Projects</button>
<h2 id="about">About Me</h2>

<p className="about-text">
  I am a Computer Science and Engineering student passionate about
  programming, problem solving, and software development. I enjoy
  learning DSA, building projects, and exploring new technologies.
  My goal is to become a skilled software engineer and build useful
  real-world applications.
</p>
<div className="education-card">
  <h3>Education</h3>
  <p><strong>B.Tech in Computer Science and Engineering</strong></p>
  <p>SRM University AP</p>
  <p>Currently pursuing my degree and building my skills in DSA, software development, and web technologies.</p>
</div>
<h2 id="skills">Skills</h2>
<div className="skills">
  <div className="skill-card">
    <h3>Programming</h3>
    <p>C • C++ • Java</p>
  </div>

  <div className="skill-card">
    <h3>DSA</h3>
    <p>Arrays • Linked Lists • Trees • Graphs</p>
  </div>

  <div className="skill-card">
    <h3>Frontend</h3>
    <p>HTML • CSS • JavaScript • React.js</p>
  </div>
</div>
<h2 id="tech">Tech Stack</h2>

<div className="tech-stack">
  <span>C</span>
  <span>C++</span>
  <span>Java</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>React.js</span>
</div>
<h2 id="experience">Experience & Activities</h2>

<div className="activity-card">
  <h3>Coding Club — SRM University AP</h3>
  <p>
    Member of the Coding Club, participating in coding activities
    and improving problem-solving skills.
  </p>
</div>

<div className="activity-card">
  <h3>SIH 2026 Internal Hackathon</h3>
  <p>
    Worked on Suraksha AI, an intelligent disaster-management
    solution developed as part of the internal hackathon.
  </p>
</div>
<h2 id="coding">Coding Profiles</h2>
<div className="leetcode-stat">
  <h3>LeetCode</h3>
  <p>67+ Problems Solved</p>
</div>

<div className="coding-profiles">
  <a href="https://github.com/kodurusurendra4-debug" target="_blank">
    GitHub
  </a>

 <a
  href="https://leetcode.com/u/kodurusurendra/"
  target="_blank"
>
  LeetCode
</a>
</div>
<h2 id="projects">Projects</h2>

<div className="projects">
<div className="project-card">
  <h3>Calendar Project</h3>

  <p>
    A C-based calendar application that displays
    dates and weekdays for a given month and year.
  </p>

  <p className="project-tech">
    C • Programming • Problem Solving
  </p>

  <a
    href="https://github.com/kodurusurendra4-debug/calender"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Code
  </a>
</div>

 <div className="project-card">
  <h3>StudentHub</h3>

  <p>
    A student productivity platform for managing assignments,
    subjects, attendance, study goals, and exams.
  </p>

  <p className="project-tech">
    HTML • CSS • JavaScript • React.js
  </p>

  <a
  href="https://kodurusurendra4-debug.github.io/student-hub/"
  target="_blank"
>
  Live Demo
</a>
<a
  href="https://github.com/kodurusurendra4-debug/student-hub"
  target="_blank"
>
  View Code
</a>
</div>

<div className="project-card">
  <h3>Fortex</h3>

  <p>
    A fresher guidance application designed to help students
    explore useful guidance and resources.
  </p>

  <p className="project-tech">
    HTML • CSS • JavaScript
  </p>
</div>
  <div className="project-card">
  <h3>Suraksha AI</h3>
  <p>
    An intelligent disaster-management solution developed for
    the SIH 2026 internal hackathon to identify hazard-based
    red zones, assess carrying capacity, and support immediate
    relocation decisions.
  </p>
</div>
</div>
<h2 id="contact">Contact</h2>

<div className="contact-card">
  <h3>Let's Connect</h3>

  <p>
    I'm always interested in learning, building projects,
    and connecting with other developers.
  </p>

  <a href="mailto:kodurusurendra@gmail.com">
    Email Me
  </a>

  <a
    href="https://github.com/kodurusurendra4-debug"
    target="_blank"
  >
    GitHub
  </a>

  <a
    href="https://leetcode.com/u/kodurusurendra/"
    target="_blank"
  >
    LeetCode
  </a>
</div>
    </div>
  )
}
export default App