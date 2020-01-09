import React from 'react';
import './Card-List.Styles.css';
import { Card } from '../Card/Card.Component';

export const CardList = props =>(
<div className='card-list'>
    {props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster} />
    ))}
</div>
);