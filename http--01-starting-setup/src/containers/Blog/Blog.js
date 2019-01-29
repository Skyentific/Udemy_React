import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state ={
        posts: [],
        SelectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4); // capture first four posts
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Sky'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: true})
            });
    }

  

    postsSelectedHandler = (id) => {
        this.setState({SelectedPostId: id});
        console.log(id);
    }

    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return <Post 
                        author={post.author}
                        title={post.title}
                        key={post.id}
                        clicked = {() => this.postsSelectedHandler(post.id)}/>
                }
            )
        }
        

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id = {this.state.SelectedPostId} 
                        />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;