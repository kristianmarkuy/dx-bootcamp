/* eslint-disable react/prop-types */
export const TodoItem = (
  {item, 
   index,
   handleRemoveItem,
   handleEditItem,
   handleCheckItem
  }) => {
  return (
    <div className={`item ${item.status && "done"}`} key={index}>
      <div className="checkbox-wrapper">
        <input type="checkbox" checked={item.status} onClick={() => handleCheckItem(index)}/>
      </div>
      <span>{item.value}</span>
      <button onClick={() => handleEditItem(index)}>Edit</button>
      <button onClick={() => handleRemoveItem(index)}>X</button> 
    </div>
  );
};

export default TodoItem;
