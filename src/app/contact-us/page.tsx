import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title : "Contact Us"
}

let Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <div className="section-title2">
          <h2 data-aos="zoom-in-up">
            Contact <span className="brown">Us</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <form>
              <div className="contact-form" data-aos="zoom-in-up">
                <div className="inputgroup1">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Phone Number"
                    required
                  />
                </div>
                <div className="inputgroup-2">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                  <br />
                  <button type="submit" className="btn2">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="icons-div" data-aos="zoom-in-up">
            <div className="x-col-4">
              <div className="contact-i">
                <div className="s-icons">
                  <div className="s-icons-i">
                    <FaPhoneSquareAlt />
                  </div>
                </div>
                <p>12325698-0</p>
              </div>
            </div>
            <div className="x-col-4">
              <div className="contact-i">
                <div className="s-icons">
                  <div className="s-icons-i">
                  <MdOutlineMarkEmailRead />
                  </div>
                </div>
                <p>abc@gmail.com</p>
              </div>
            </div>
            <div className="x-col-4">
              <div className="contact-i">
                <div className="s-icons">
                  <div className="s-icons-i">
                      <FaGithub />
                  </div>
                </div>
                <p>Mehak-Akram</p>
              </div>
            </div>
            <div className="x-col-4">
              <div className="contact-i">
                <div className="s-icons">
                  <div className="s-icons-i">
                    <FaLinkedin />
                  </div>
                </div>
                <p>Mehak Akram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
