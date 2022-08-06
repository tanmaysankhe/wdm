import React from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        // setTimeout(() => this.updateDatabase(this.state.posts), 10000);
    }
    componentDidMount() {
        axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/wdm386557167.wordpress.com/posts"
            )
            .then(res => {
                this.setState({ posts: res.data.posts });
            })
            .catch(error => console.log(error));
            
   // }

    // handleSubmit = (e, onSubmitProps) => {
    //     e.preventDefault();
    //     console.log("IN HANDLE")
    //     let formData = new FormData();
    //     formData.append("WordPressID", this.state.email);
    //     formData.append("URL", this.state.password);
    //     formData.append("Title", this.state.password);
        
    //     // let body = [];
    //     // for (var i = 0; i < numrows; i++) {
    //     //     ObjectRow()
    //     // } 
    //     // console.log(body);
    //     const url = 'https://txs8004.uta.cloud/backend/blogupdate.php';
    //     axios.post(url, formData)
    //       .then(res => this.handleSucess(res))
    //       .catch(err => console.log(err));
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
                {/* <input onClick={this.handleSubmit}>Update database</input> */}
            </div>
        );
    }
}