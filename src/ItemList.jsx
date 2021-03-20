import TodoRow from "./TodoRow";
function ItemList({ items, category, handleCompleteItem }) {
  let rows = [];
  rows = items.filter(item => {
    if (category === "active") {
          if (item.completed === false) {
            rows.push(item);
          }
      } else if (category === "completed") {
        items.forEach((item) => {
          if (item.completed === true) {
            rows.push(item);
          }
  } )
  
  return (
    <ul>
      {rows.map((row) => (
        <TodoRow item={row} handleCompleteItem={handleCompleteItem}>
          {" "}
        </TodoRow>
      ))}
    </ul>
  );
}
export default ItemList;
