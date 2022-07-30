import home from "./images/home.png";
import "./css/About.css";

function About(props) {
  return (
    <body>
      <section className="AboutUs">
        <div className="abt">
          <div className="Abttext">
            <h1 className="Abtheading">About Us</h1>
            <p className="Abtdescription">
              Diaz Sifontes is a very rich family in South America. They have a
              lot of land on Margarita Island, where most of the area has so far
              not gone through the proper heritage and it holds up to 275
              families. Juana Velasquez is the founder of the town GUARAME, ISLA
              DE MARGARITA, where Juana himself along with Ambrosio Diaz Noriega
              holds a position at level 0 in ownership. The family members can
              access the webpage by registering individually giving the unique
              identities like ancestor and relationship. The next step that
              comes after the member registration is, enrollment of the projects
              that every individual holds in a family by giving the
              relationship. It also offers from setting up trail records of a
              project, land to giving up the advanced expenses of the heritage.
            </p>
          </div>
          <div className="Homeimage">
            <img
              style={{
                display: "inline",
                height: "300px",
                width: "500px",
                marginLeft: "70px",
              }}
              src={home}
              alt="Logo"
            />
          </div>
        </div>
      </section>
    </body>
  );
}

export default About;
