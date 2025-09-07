import React, { useState } from "react";
import "./AddItemForm.css";

interface AddItemFormProps {
  onAddItem: (item: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onAddItem(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="add-item-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Введите название вещи..."
        className="add-item-input"
      />
      <button
        onClick={handleSubmit}
        className="add-item-button"
      >
        Добавить
      </button>
    </div>
  );
};

export default AddItemForm;
