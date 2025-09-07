import React from "react";
import "./ItemList.css";
import ItemCard from "../ItemCard/ItemCard";

interface ItemListProps {
  items: string[];
  onDeleteItem: (index: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return <p className="empty-message">Список пуст. Добавьте первую вещь!</p>;
  }

  return (
    <div>
      <ul className="item-list">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            text={item}
            onDelete={() => onDeleteItem(index)}
            isInitial={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
