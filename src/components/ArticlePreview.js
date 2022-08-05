import React from "react";
import "./css/ArticlePreview.css";


export default class ArticlePreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
  
    render() {
        if (this.props.post) {
          return (
            <span>
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
                <h1 className="text-center">{this.props.post.title.replace(/<[^>]+>/g, '')}</h1>
                <div className="content">{this.props.post.excerpt.replace(/<[^>]+>/g, '')}</div>
              </a>
            <a href={this.props.post.URL} target="_blank">
                <button className="btn" style={{"margin":"5px"}}>Read More</button>
            </a>
            <a href={"https://wordpress.com/post/wdm386557167.wordpress.com/" + this.props.post.ID} target="_blank">
                <button className="btn" style={{"margin":"5px"}}>Update</button>
            </a>
            </div>
            </span>
          );
        } else {
          return null;
        }
    }
}