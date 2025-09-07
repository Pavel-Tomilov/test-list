import { useState, useEffect } from "react";
import ItemList from "./components/ItemList/ItemList";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems
      ? JSON.parse(savedItems)
      : ["Куртка", "Кроссовки", "Рюкзак"];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="app">
      <h1 className="app-title">Список вещей</h1>

      <AddItemForm onAddItem={addItem} />

      <ItemList
        items={items}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
