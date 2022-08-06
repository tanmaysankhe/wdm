import React from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            searchtext: "",
            updatedPosts: [],
            sortType:true,
            sortText:"Sort by date"
        };
        // setTimeout(() => this.updateDatabase(this.state.posts), 10000);
    }
    componentDidMount() {
        axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/wdm386557167.wordpress.com/posts"
            )
            .then(res => {
                this.setState({ posts: res.data.posts, updatedPosts: res.data.posts });
            })
            .catch(error => console.log(error));

    }

    handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    handleSearch = () => {
        const result = this.state.posts.filter(post => post.title.includes(this.state.searchtext));
        this.setState({updatedPosts:result});
    }

    handleSort = () => {
        if(this.state.sortType){
            this.state.updatedPosts.sort(function(a,b){
                return new Date(a.modified) - new Date(b.modified);
              });
              this.setState({sortType:false, sortText:"Descending"});
        }
        else{
            this.state.updatedPosts.sort(function(a,b){
                return new Date(b.modified) - new Date(a.modified);
              });
              this.setState({sortType:true, sortText:"Ascending"});

        }

    }

    handleSubmit = (e, onSubmitProps) => {
        e.preventDefault();
        console.log("IN HANDLE")

        // };
        let dummy = {};
        let body = {
            "allposts": []
        }

        this.state.posts.map(post => {
            body.allposts.push({
                "blogid": post.ID,
                "blogname": post.title,
                "author": post.author.name,
                "url": post.URL
            })
        }
        )

        console.log("bodyyy");
        console.log(body);
        const url = 'https://txs8004.uta.cloud/backend/blog.php';
        axios.post(url, body)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="center-align">
                <a href="https://wordpress.com/post/wdm386557167.wordpress.com" target="_blank">
                    <button className="btn" style={{ "margin": "5px" }}>Add New Post</button>
                </a>
                <button className="btn" style={{ "margin": "5px" }} onClick={this.handleSubmit}>Sync Database</button>
                <button className="btn" style={{ "margin": "5px" }} onClick={this.handleSort}>{this.state.sortText}</button>
                <br></br>
                <input
                    className="text-box"
                    type="text"
                    placeholder="Search"
                    name="searchtext"
                    value={this.state.searchtext}
                    onChange={this.handleChange}
                />
                <button className="btn" style={{ "margin": "5px" }} onClick={this.handleSearch}>Search</button>

                <div>
                    {this.state.updatedPosts.map(post => <ArticlePreview post={post} />)}
                </div>
                {/* <input onClick={this.handleSubmit}>Update database</input> */}
            </div>
        );
    }
}