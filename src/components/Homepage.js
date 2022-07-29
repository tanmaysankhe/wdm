import home from "./images/home.png";
import "./css/Homepage.css";

function Homepage(props) {
  return (
    <body>
      <section className="Homep">
        <div className="Home">
          <div className="Hometext">
            <h1 className="Homeheading">Welcome to Dynasty</h1>
            <p className="Homedescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
              turpis massa sed elementum tempus egestas. Curabitur gravida arcu
              ac tortor dignissim convallis aenean. Sagittis purus sit amet
              volutpat consequat mauris nunc. Libero id faucibus nisl tincidunt
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vitae turpis massa sed elementum tempus egestas. Curabitur gravida
              arcu ac tortor dignissim convallis aenean. Sagittis purus sit amet
              volutpat conLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Vitae turpis massa sed elementum tempus egestas. Curabitur
              gravida arcu ac tortor dignissim convallis aenean. Sagittis purus
              sit amet volutpat con
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

export default Homepage;
