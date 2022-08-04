import React from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";
export default class Blog extends React.Component {
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
      return (
        <div className="blog">
          <h1 style={{"display":"flex"}} className="sectionTitle">Articles</h1>
          {this.state.posts.map(post => <ArticlePreview post={post} />)}
        </div>
      );
    }
  }