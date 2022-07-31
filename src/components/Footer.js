/* Waseem Vadla 1002028525 
Tanmay Yatin Sankhe 1002028004
Zulfiya Amin Saiyed 1001929057 */

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
                    sifontes@gmail.com
                  </h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="fcontent">
          <p>
            © 2022 diazsifontes.com All Rights Reserved Diaz Sifontes Estate
            Commission Consumer Protection Notice Diaz Sifontes Estate
            Commission Information About Brokerage Services.
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
