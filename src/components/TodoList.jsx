/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export const TodoList = (
  {Items, 
   handleRemoveItem,
   handleEditItem,
   handleCheckItem
  }) => {
  return (
    <div className="list-items">
      {Items.length ? (
        Items.map((item, index) => (
           <TodoItem item={item}
                     index={index}
                     key={index}
                     handleRemoveItem={handleRemoveItem}
                     handleEditItem={handleEditItem}
                     handleCheckItem={handleCheckItem}
           />
        ))
      ) : (
       <div>Empty List . . .</div>
      )}
    </div>
  );
};

export default TodoList;
