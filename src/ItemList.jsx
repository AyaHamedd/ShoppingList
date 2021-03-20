import TodoRow from "./TodoRow";
function ItemList({ items, category }) {
  let rows = [];
  if (category === "all") {
    rows = items;
  } else if (category === "active") {
    items.forEach((item) => {
      if (item.completed === false) {
        rows.push(item);
      }
    });
  } else if (category === "completed") {
    items.forEach((item) => {
      if (item.completed === true) {
        rows.push(item);
      }
    });
  }
  return (
    <ul>
      {rows.map((row) => (
        <TodoRow item={row}> </TodoRow>
      ))}
    </ul>
  );
}
export default ItemList;
