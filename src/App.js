import React from 'react';
import './App.css';

//data
import items from './items.js'

//styles
import styles from './styles.js'

//list
import ItemsList from './components/ItemsList.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={styles.text}>WELCOME TO THE APPLE STORE</h1>
      <p style={styles.text}>where you can buy any apple product!</p>
      <img src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809240543" style={styles.logoImage} alt="logo" />
      <hr/>
        {ItemsList}
      </header>
    </div>
  );
}






// function App() {
//   const itemList = items.map((item) => (
//     <div style={styles.item}>
//       <img style={styles.itemImage} alt={item.name} src={item.image}/>
//       <p style={styles.text}>{item.name}</p>
//       <p style={styles.text}>{item.price} SR</p>
//     </div>
//   ));
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {itemList}
//       </header>
//     </div>
//   );
// }

export default App;
