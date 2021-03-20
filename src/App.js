import logo from './logo.svg';
import './App.css';
import TodoRow from './TodoRow'
import { Component } from 'react';

import ItemList from './ItemList'

// Components
// 1) ItemRow (label+checkbox+edit+delete) function
// 2) ItemsList (list of ItemsRows) function
// 3) AddBar (Text Field + Button) function
// 4) Categories ( Categories List) function
// 5) ShoppingList (AddBar + ItemsList + Categories  ) Class

// State: newItem , ItemsArray
// TaskArray [ { id , label , completed:true,false },{ id , label , completed:true,false }..]

// Categories : All , completed , active
class ShoppingList extends Component{
  state = {
    items: [{id:1 , label: "firstItem", completed: true}],
    newItem:"",
    category: 'all' // any thing else::
  }
  render(){
    return (
      <ul>
        {this.state.items.map((item) => <ItemRow item={item}></ItemRow>)}
      </ul>
    )
  }
}

function App() {
  return (
    <ShoppingList></ShoppingList>
  );
}

export default App;
