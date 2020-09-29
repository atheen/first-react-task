import React from 'react';

//data
import items from '../items.js'

//styles
import styles from '../styles.js'

const Item = props => {
  const item = props.item;
  return(
    <a href={item.website}>
    <div style={styles.item} key={item.id}>
      <img style={styles.itemImage} alt={item.name} src={item.image}/>
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} SR</p>
    </div>
    </a>
  );
}

export default Item
