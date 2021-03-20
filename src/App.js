import { Component } from "react";
import AddBar from "./AddBar";
import "./App.css";
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
class ShoppingList extends Component {
  state = {
    items: [{ id: 1, label: "firstItem", completed: false }],
    newItem: "",
    category: "all", // any thing else::
  };

  handleTextChange(newText) {
    this.setState({ newItem: newText });
  }
  handleAddItem() {
    this.setState({
      items: [
        ...this.state.items,
        { id: Math.random(), label: this.state.newItem, completed: false },
      ],
      newItem: "",
    });
  }

  handleCompleteItem(id) {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    });
  }

  render() {
    return (
      <div>
        <select
          name="category"
          id="category"
          value={this.state.category}
          onChange={(e) => this.setState({ category: e.target.value })}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">completed</option>
        </select>

        <AddBar
          newItem={this.state.newItem}
          handleAddItem={() => this.handleAddItem()}
          handleTextChange={(newText) => this.handleTextChange(newText)}
        ></AddBar>
        <ItemList
          items={this.state.items}
          category={this.state.category}
          handleCompleteItem={(id) => this.handleCompleteItem(id)}
        ></ItemList>
      </div>
    );
  }
}

function App() {
  return <ShoppingList></ShoppingList>;
}

export default App;
