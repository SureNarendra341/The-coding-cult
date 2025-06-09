import React, { useState } from 'react';

const EditableTitle = ({ title, setTitle }) => {
  const [hovered, setHovered] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    setTitle(newTitle);
    setEditing(false);
  };

  return (
    <div
      className="editable-title-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {editing ? (
        <>
          <input
            className="edit-input"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="save-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2 className="editable-title">{title}</h2>
          {hovered && (
            <button className="edit-button" onClick={() => setEditing(true)}>Edit</button>
          )}
        </>
      )}
    </div>
  );
};

export default EditableTitle;