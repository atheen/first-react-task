import React from 'react';

//data
import items from '../items.js'

//styles
import {ItemWrapper} from './styles.js'

const Item = props => {
  const item = props.item;
  return(
    <a href={item.website}>
    <ItemWrapper key={item.id}>
      <img alt={item.name} src={item.image}/>
      <p>{item.name}</p>
      <p class="item-price">{item.price} SR</p>
    </ItemWrapper>
    </a>
  );
}

export default Item
