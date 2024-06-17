import { useState } from 'react';
import './Favorites.css';

const Favorites = ({ favorites, fetchWeather, addFavorite, removeFavorite }) => {
  const [newFavorite, setNewFavorite] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleAddFavorite = () => {
    if (newFavorite.trim()) {
      addFavorite(newFavorite.trim());
      setNewFavorite('');
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="favorites">
      <h3>Favorites</h3>
      <div className="add-favorite">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Enter city name"
          className={`add-favorite-input ${isFocused ? 'focused' : ''}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button onClick={handleAddFavorite} className="add-favorite-button">
          Add
        </button>
      </div>
      <div className="favorites-list">
        {favorites.map((fav) => (
          <div key={fav.id} className="favorite-card">
            <span onClick={() => fetchWeather(fav.city)}>{fav.city}</span>
            <button onClick={() => removeFavorite(fav.id)} className="remove-favorite-button">
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
