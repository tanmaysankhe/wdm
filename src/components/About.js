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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
              turpis massa sed elementum tempus egestas. Curabitur gravida arcu
              ac tortor dignissim convallis aenean. Sagittis purus sit amet
              volutpat consequat mauris nunc. Libero id faucibus nisl tincidunt
              eget.
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
