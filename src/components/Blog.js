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
                "https://public-api.wordpress.com/rest/v1/sites/wdm386557167.wordpress.com/posts"
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
                <a href="https://wordpress.com/post/wdm386557167.wordpress.com" target="_blank">
                    <button className="btn" style={{ "margin": "5px" }}>Add New Post</button>
                </a>

                <div>
                    {this.state.posts.map(post => <ArticlePreview post={post} />)}
                </div>
            </div>
        );
    }
}