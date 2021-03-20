function TodoRow({ item, handleCompleteItem }) {
  return (
    <li>
      {" "}
      <input
        type="checkbox"
        onChange={() => handleCompleteItem(item.id)}
        checked={item.completed}
      />
      {item.label} <button>Delete</button>
    </li>
  );
}

export default TodoRow;
