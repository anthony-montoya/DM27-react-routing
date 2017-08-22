import React from 'react';
import { getPerson } from './peopleService';

export default function(props) {
    let person = getPerson(props.match.params.id);
    return (
        <div>
            <h1>{ person.name }</h1>
            <br/>
            { person.description }
            <br/>
            <img src={ person.image } />
        </div>
    )
}