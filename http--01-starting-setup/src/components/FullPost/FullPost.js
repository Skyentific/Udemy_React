import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost  || (this.state.loadedPost && this.state.loadedPost.is !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({loadedPost: response})
                })
            }
        }
    }
    render () {
        
        let post = <p style ={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if (this.props.id) {
            post = <p style ={{textAlign: 'center'}}>Loading...</p>;
        }
        // check that there is a post selected
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.data.title}</h1>
                    <p>{this.state.loadedPost.data.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }

        return post;
    }
}

export default FullPost;