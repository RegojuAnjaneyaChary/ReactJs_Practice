import './about.css'

function Skills() {
  return (
    <div className="skillsprofile" id='skillsprofile'>
      <h1>Skills</h1>
      <div className="skills">
        <div>
          <h2>Frontend Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
          </ul>
        </div>
        <div>
          <h2>Backend Skills</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.Js</li>
            <li>Python</li>
          </ul>
        </div>
          <div>
          <h2>Database Skills</h2>
          <ul>
             <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firestore</li>
            <li>JSON</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

