import React from 'react';

//data
import items from '../items.js'

//styles
import {ListWrapper} from './styles.js'

import Item from './Item.js'

const ItemsList = () => {
  const itemsList = items.map(item => (
    <Item item={item} key={item.id}/>
  ));
  return <ListWrapper>{itemsList}</ListWrapper>;
};


export default ItemsList
