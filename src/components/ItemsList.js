import React from 'react';

//data
import items from '../items.js'

//styles
import styles from '../styles.js'

import Item from './Item.js'

const itemsList = items.map(item => (
  <Item item={item} key={item.id}/>
))


export default itemsList
