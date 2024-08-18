import { useState } from "react";

const ListFilter = () => {
  const items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Strawberry", category: "Fruit" },
    { id: 4, name: "Carrot", category: "Vegetable" },
    { id: 5, name: "Broccoli", category: "Vegetable" },
    { id: 6, name: "Onion", category: "Vegetable" },
    { id: 7, name: "Cucumber", category: "Vegetable" },
  ];
  const itemsDeduped = () => {
    const category: string[] = [];
    items.forEach((item) => category.push(item.category));
    const categoriesWithoutKeys = [...new Set(category)];
    const categoriesWithKeys: { id: number; category: string }[] = [];
    for (let i = 0; i < categoriesWithoutKeys.length; i++) {
      categoriesWithKeys.push({ id: i, category: categoriesWithoutKeys[i] });
    }
    return categoriesWithKeys;
  };

  const [searchItem, setSearchItem] = useState("");

  const filteredItems = items.filter((item) =>
    item.category.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <>
      {/* search bar */}
      {/* <input
        type="text"
        placeholder="search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      /> */}
      {/* dropdown */}
      <select
        id="items"
        name="items"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
      >
        <option key="default" value="">
          choose category
        </option>
        {itemsDeduped().map((item) => (
          <option key={item.id} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ListFilter;
