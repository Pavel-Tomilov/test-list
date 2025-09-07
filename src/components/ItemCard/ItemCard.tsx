import React from "react";
import "./ItemCard.css";

interface ItemProps {
  text: string;
  onDelete: () => void;
  isInitial: boolean;
}

const ItemCard: React.FC<ItemProps> = ({ text, onDelete, isInitial }) => {
  return (
    <li className={`item ${isInitial ? "initial-item" : ""}`}>
      <span className="item-text">{text}</span>

      {!isInitial && (
        <button
          onClick={onDelete}
          className="delete-button"
          aria-label="Удалить"
        >
          <span>Удалить</span>
        </button>
      )}
    </li>
  );
};

export default ItemCard;
