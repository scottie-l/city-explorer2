// import React, {Component} from 'react';
// import axios from 'axios';
// import { render } from '@testing-library/react';

// export default class ShoppingList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             shoppingItems: []
//         }
//     }

//     getShoppingItems = async () => {
//         const url = `${process.env.REACT_APP_SERVER_URL}/shoppingList`;
//         let res = await axios.get(url)
//         console.log(res.data)
//         this.setState({shoppingItems: res.data})
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick = {this.getShoppingItems}>get shopping items</button>
//                 {this.state.shoppingItems.length > 0 && this.state.shoppingItems.map(item => <li key = {item}>{item}</li>)}
//             </div>
//         )
//     }
// }
