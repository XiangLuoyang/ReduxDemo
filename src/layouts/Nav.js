/**
 * 这个组件将会显示所有的导航链接
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/detail">Detail</Link>
            </nav>
        );
    }
}

export default Nav;