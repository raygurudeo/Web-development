import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCatogries = ['all', ...new Set(items.map((item) => item.category ))];
  console.log(allCatogries);

  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCatogries);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItem(newItems);
  };

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={ menuItem } />
    </section>
  </main>;
}

export default App;
