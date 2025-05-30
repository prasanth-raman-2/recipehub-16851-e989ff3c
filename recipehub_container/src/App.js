import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // Demo state for navigation, search, etc. In a full app, these would come from props/context/services.
  const [activeTab, setActiveTab] = useState('home');
  const [searchText, setSearchText] = useState('');

  const categories = [
    { name: 'Breakfast', icon: '🍳' },
    { name: 'Lunch', icon: '🥪' },
    { name: 'Dinner', icon: '🍝' },
    { name: 'Desserts', icon: '🍰' },
    { name: 'Snacks', icon: '🍿' },
    { name: 'Drinks', icon: '🥤' },
  ];

  // Sample featured recipes (only data structure; in production, this comes from API)
  const featuredRecipes = [
    {
      id: 1,
      name: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
      category: 'Breakfast',
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      image: 'https://images.unsplash.com/photo-1519864600265-abb214c6ee1c?w=500&q=80',
      category: 'Dinner',
    },
    {
      id: 3,
      name: 'Chocolate Brownie',
      image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?w=500&q=80',
      category: 'Desserts',
    },
    {
      id: 4,
      name: 'Chicken Caesar Salad',
      image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=500&q=80',
      category: 'Lunch',
    },
    {
      id: 5,
      name: 'Matcha Latte',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500&q=80',
      category: 'Drinks',
    },
  ];

  // Handlers
  const handleTabChange = (tab) => setActiveTab(tab);
  const handleSearchChange = (e) => setSearchText(e.target.value);

  return (
    <div className="rh-app">
      {/* Search Bar */}
      <header className="rh-header">
        <div className="rh-header-title">
          <span role="img" aria-label="logo" style={{ fontSize: 28, verticalAlign: 'middle', marginRight: 8 }}>
            🍽️
          </span>
          <strong>RecipeHub</strong>
        </div>
        <input
          type="text"
          className="rh-search-bar"
          placeholder="Search recipes, ingredients, categories..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </header>

      {/* Category Tiles */}
      <nav className="rh-categories">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="rh-category-tile"
            style={{ backgroundColor: 'var(--rh-secondary)' }}
            tabIndex={0}
            aria-label={cat.name}
            // (click would trigger filter by category in real app)
          >
            <span className="rh-category-icon" aria-hidden="true">{cat.icon}</span>
            <span className="rh-category-label">{cat.name}</span>
          </button>
        ))}
      </nav>

      {/* Featured Recipes Scrollable */}
      <section className="rh-featured-section">
        <div className="rh-featured-title">
          Featured Recipes
        </div>
        <div className="rh-featured-list">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="rh-recipe-card">
              <div
                className="rh-recipe-img"
                style={{
                  backgroundImage: `url(${recipe.image})`
                }}
                aria-label={`${recipe.name} image`}
              />
              <div className="rh-recipe-info">
                <div className="rh-recipe-name">{recipe.name}</div>
                <div className="rh-recipe-category">{recipe.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <nav className="rh-bottom-nav">
        <button
          className={`rh-nav-btn${activeTab === 'home' ? ' active' : ''}`}
          onClick={() => handleTabChange('home')}
          aria-label="Home"
        >
          <span role="img" aria-label="">🏠</span>
          <span>Home</span>
        </button>
        <button
          className={`rh-nav-btn${activeTab === 'favorites' ? ' active' : ''}`}
          onClick={() => handleTabChange('favorites')}
          aria-label="Favorites"
        >
          <span role="img" aria-label="">❤️</span>
          <span>Favorites</span>
        </button>
        <button
          className={`rh-nav-btn center-btn${activeTab === 'add' ? ' active' : ''}`}
          onClick={() => handleTabChange('add')}
          aria-label="Add Recipe"
        >
          <span role="img" aria-label="">➕</span>
          <span>Add</span>
        </button>
        <button
          className={`rh-nav-btn${activeTab === 'profile' ? ' active' : ''}`}
          onClick={() => handleTabChange('profile')}
          aria-label="Profile"
        >
          <span role="img" aria-label="">👤</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
