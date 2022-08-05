import React,{Component} from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }
    render()
    {
        const{posts}=this.state
        return(
            <div>
                <h1>List of Posts</h1>
                <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                {/* {console.log(posts);} */}
                {
                    
                     posts?.map(post=> (
                    <tr>
                        <th>{post.id}</th>
                        <th>{post.title}</th>
                        <th>{post.body}</th>
                    </tr>))
                }
                
            </div>    
        )
    }
}
export default PostList