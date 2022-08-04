import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/ArticlePreview.css";


export default class ArticlePreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
    componentDidMount() {
      axios
        .get(
          "http://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts"
        )
        .then(res => {
          this.setState({ posts: res.data.posts });
          console.log(this.state.posts);
        })
        .catch(error => console.log(error));
    }
  
    render() {
        if (this.props.post) {
          return (
            <div id={'card-'} style={{"width":"400px", "backgroundColor":"white","boxShadow":"10px", "margin":"20px", "padding":"10px"}} className="card-flex-item">
                   <a href={"/blog/" + this.props.post.ID} className="blackLink">
                {this.props.post.featured_image ? (
                  <img
                    className="blog-image"
                    alt="article header"
                    src={this.props.post.featured_image}
                  />
                ) : (
                  ""
                )}
                <h1 className="text-center">{this.props.post.title}</h1>
                <div className="content">{this.props.post.excerpt}</div>
              </a>
            <a href={this.props.post.URL}>
                <button className="btn">Read More</button>
            </a>
            </div>
          );
        } else {
          return null;
        }
    }
}