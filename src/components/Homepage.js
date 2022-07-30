import home from "./images/home.png";
import "./css/Homepage.css";
import { AiOutlineSearch } from "react-icons/ai";

function Homepage(props) {
  return (
    <div className="main">
      <div className="content">
        <h1>Family property is what we do! </h1>
        <p className="search-text">
          {" "}
          Welcome to our site. We will help you manage your property and
          projects and we will also find out what percentages goes to who.{" "}
        </p>
      </div>
    </div>
  );
}

export default Homepage;
