// import selfImage from 'src/img/tempself.JPG'
// src/img/tempself.JPG
// const iconLinkedIn = <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#1e3050",}} />

function Intro() {

  return (
    <>
      <div>
        <div>
          <h2>Hi! I am <span>D</span>aniel, web developer</h2>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-github"></i>
          <div>
            <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,mongodb,express,react,nodejs" alt="skill-icon"></img>
          </div>
        </div>
        <div>
          <img src="src/img/tempself.JPG" alt="Temp Self" />
        </div>
      </div>
    </>
  );
}

export default Intro;
