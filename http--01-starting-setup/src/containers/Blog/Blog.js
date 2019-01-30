import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
   
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
                    <Route path="/new-post"  component={NewPost} />
                    <Route path="/posts"  component={Posts} />
                    {/* <Route path="/"  component={Posts} /> */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>

            </div>
        );
    }
}

export default Blog;