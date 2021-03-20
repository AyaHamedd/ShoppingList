function AddBar({ newItem, handleAddItem, handleTextChange }) {
  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <button onClick={(e) => handleAddItem()}>Add</button>
    </div>
  );
}
export default AddBar;
