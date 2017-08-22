import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <h1>This is the About page</h1>
            <p>And we do cool stuff!</p>
            <Link to='/about/faq'>FAQ</Link>
            <Link to='/about/Company'>Company</Link>
            { props.children }
        </div>
    )
}