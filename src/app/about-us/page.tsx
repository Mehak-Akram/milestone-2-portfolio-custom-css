import Image from "next/image";
import about from "../../../image/about.jpeg";

export const metadata = {
  title : "About Us"
}
let About = () => {
    return (
      <div>
<div className="about-section">
      
  
            <div className="section-title2">
              <h2 className="mx-0 sm:mx-20" data-aos="zoom-in-up">About <span className="brown">Me</span></h2>
            <div className="about-content">
              <div className="about-text" data-aos="zoom-in-up">
                <h3>
                  I am Mehak Akram and I am a
                  <span className="brown"> Front-end developer</span>
                </h3>
                <p>
                As a front-end developer with a strong foundation in HTML, CSS,<br/> JavaScript, and TypeScript with a focus on Nextjs and Tailwind CSS,<br/> I focus on writing clean, efficient, and maintainable code
                </p>
                <h3><span className="brown">What I am Learning</span></h3>
                <p> 
Crafting responsive layouts with HTML & CSS
<br />
Adding interactivity with JavaScript
<br />
Exploring popular frameworks like React and Nextjs
<br />
Experimenting with UI/UX design basics</p>
              </div>
              <Image src={about} alt="about.jpeg" className="about-img" data-aos="zoom-in-up"></Image>

              </div>
              </div>

            </div>
          </div>
     
    );
  };
  
  
  export default About;
  