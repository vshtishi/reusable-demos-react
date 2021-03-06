import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Recipe = ({ items, removeItem, editItem }) => {
  return (
    <div className="recipe-list">
      {items.map((item) => {
        const { id, title, quantity } = item;
        return (
          <article key={id} className="recipe-item">
            <p className="title">{quantity + " " + title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Recipe;
