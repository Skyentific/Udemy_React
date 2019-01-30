import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
   
    state ={
        auth: false
    }

    render () {

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post"  component={NewPost} /> : null}
                    <Route path="/posts"  component={Posts} />
                    <Route component={() => <h1 style={{padding:'80px'}}>Not found</h1>}/>  
                    {/* <Redirect from="/" to="/posts"/> */}
                    
                </Switch>

            </div>
        );
    }
}

export default Blog;