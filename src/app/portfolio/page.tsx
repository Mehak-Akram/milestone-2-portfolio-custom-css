export const metadata = {
  title : "Portfolio"
}

let Portfolio = () => {
  return (
    <div>
      <div className="section-title2">
        <h2><span className="brown">My</span> Project</h2>
      </div>
      <section id="blogs" className="blog-section">
        <div className="blogContainer" data-aos="zoom-in-up">
          <div className="imageContainer"></div>
          <h1 className="title">Currency-Convertor</h1>
          <a href="https://github.com/Mehak-Akram/currency-convertor-2.git">
            <button className="action_btn2">Github Link</button>
          </a>
        </div>

        <div className="blogContainer" data-aos="zoom-in-up">
          <div className="imageContainer2"></div>
          <h1 className="title">Blog Website</h1>
          <a href="https://github.com/Mehak-Akram/nextjs-class-assigments-4-5.git">
            <button className="action_btn2">Github Link</button>
          </a>
        </div>

        <div className="blogContainer" data-aos="zoom-in-up">
          <div className="imageContainer3"></div>
          <h1 className="title">
            Figma-Website
          </h1>
          <a href="https://github.com/Mehak-Akram/Figma-class-hackathon.git">
            <button className="action_btn2">Github Link</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
