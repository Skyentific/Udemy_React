import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';

class Blog extends Component {
   
    render () {

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render ={() => <h1 style={{padding: "80px"}}>Home</h1>}/>
                <Route path="/new-post" exact render ={() => <h1 style={{padding: "80px"}}>Home 2</h1>}/>

              {/* <Posts/> */}
            </div>
        );
    }
}

export default Blog;