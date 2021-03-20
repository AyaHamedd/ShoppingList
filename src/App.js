import { Component } from 'react';
import './App.css';
import ItemList from "./ItemList";
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
    items: [{id:1 , label: "firstItem", completed: false}],
    newItem:"",
    category: 'completed' // any thing else::
  }
  render(){
    return (
      <div>
        <ItemList items={this.state.items} category={this.state.category} ></ItemList>
      </div>
    )
  }
}

function App() {
  return (
    <ShoppingList></ShoppingList>
  );
}

export default App;
