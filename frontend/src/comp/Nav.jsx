import React from 'react';
import {Link}  from 'react-router-dom';
 
export default function Nav (props) {
    const [text, setText] = React.useState('');

    function onClick(e) {
        props.filterList(text.trim());
    }

    return (
        <nav className="navbar navbar-light" style= {{ backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shops</Link> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-item nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search by Store" aria-label="Search" onChange={(e) => setText(e.target.value)}/>
                    <button className="btn btn-outline-success" onClick={onClick}>Search</button>
                </div>
            </div>
        </nav>
    )
}