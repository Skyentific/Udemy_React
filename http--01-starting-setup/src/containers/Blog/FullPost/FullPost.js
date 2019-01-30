import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    
    state = {
        loadedPost: null
    }
    
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate () {
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost  || 
                    (this.state.loadedPost && 
                    this.state.loadedPost.data.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({loadedPost: response})
                })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                // console.log(response);
            });
    }
    render () {
        
        // console.log('[FullPost.js]', this.props.match.params.id);

        let post = <p style ={{textAlign: 'center', padding: '80px 0'}}>Please select a Post!</p>;
        
        if (this.props.match.params.id) {
            post = <p style ={{textAlign: 'center'}}>Loading...</p>;
        }
        // check that there is a post selected
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.data.title}</h1>
                    <p>{this.state.loadedPost.data.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }

        return post;
    }
}

export default FullPost;