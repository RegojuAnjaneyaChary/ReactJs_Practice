import anji from './assets/anji.jpg';
function About(){
    return(
      <div className="aboutprofile">
  <div className="profile">
    <img src={anji} alt="Profile" />
  </div>

  <div className="about" id='about'>
    <h1>About Me</h1>

    <p>
  Hello, I'm <strong>Regoju Anjaneya Chary</strong>, a passionate web developer dedicated to creating modern, responsive, and user-friendly web applications.
</p>
<p>
  I specialize in frontend development using HTML, CSS, JavaScript, and React, focusing on building clean and intuitive user interfaces.
</p>
<p>
  On the backend, I work with technologies such as Node.js, Express.js, Firebase, and MongoDB to build efficient, scalable full-stack applications.
</p>

  </div>
</div>

    )

}
export default About;