import { useState } from 'react';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState('');

  const handleChange = e => {
    setPictureName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      alert('Введите название картинки');
      return;
    }
    onSubmit(pictureName);
    resetState();
  };

  const resetState = () => {
    setPictureName('');
  };


  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          value={pictureName}
          onChange={handleChange}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
