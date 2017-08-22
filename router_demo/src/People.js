import React from 'react';
import { Link } from 'react-router-dom'
;import { getPeople } from './peopleService';

export default function() {
    const people = getPeople().map((element, index) => {
        return <Link to={ `/people/${element.id}` }>{ element.name }</Link>
    })
    return (
        <div>
            { people }
        </div>
    )
}