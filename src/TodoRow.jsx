function TodoRow({ item }) {
  return (
    <li>
      {" "}
      <input type="checkbox" />
      {item.label} <button>Delete</button>
    </li>
  );
}

export default TodoRow;
