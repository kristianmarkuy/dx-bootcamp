/* eslint-disable react/prop-types */
export const Form = ({
  Value,
  handleValue,
  handleAddItem,
  handleSaveItem,
  buttonText
}) => {
  const getAdd = true;

  return (
    <>  
      <div className="form">
        <input 
          type="text" 
          placeholder="Write your tasks here"
          onChange={handleValue}
          value={Value}
        />
        <button onClick={buttonText === 'Save' ? handleSaveItem : handleAddItem}>{buttonText}</button>
        {/* <button onClick={clickCount()}>{`Count: ${count}`}</button> */}
      </div>
    </>
  );
};

export default Form;
