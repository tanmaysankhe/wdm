import home from "./images/home.png";
import "./css/Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaSearchLocation,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="address">
          <div className="adress-location">
            <table>
              <tr>
                <td>
                  <FaSearchLocation
                    style={{ color: "#ffffff", marginRight: "2rem" }}
                    size={20}
                  />
                </td>
                <td>
                  <div className="loc">
                    <h4>Arlington, Tx</h4>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="number">
            <table>
              <tr>
                <td>
                  <h4>
                    <FaPhone
                      size={20}
                      style={{ color: "#ffffff", marginRight: "2rem" }}
                    />{" "}
                    1-800-154-1239
                  </h4>
                </td>
              </tr>
            </table>
          </div>
          <div className="email">
            <table>
              <tr>
                <td>
                  <h4>
                    <FaMailBulk
                      size={20}
                      style={{ color: "#ffffff", marginRight: "2rem" }}
                    />{" "}
                    dynasty@gmail.com
                  </h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="fcontent">
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          </p>
          <div className="socialmediaicons">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
