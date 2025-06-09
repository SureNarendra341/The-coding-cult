import React, { useState } from 'react';

const EditableContent = ({ content, setContent }) => {
  const [hovered, setHovered] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleSave = () => {
    setContent(newContent);
    setEditing(false);
  };

  return (
    <div
      className="editable-content"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {editing ? (
        <>
          <textarea
            className="edit-textarea"
            rows={10}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button className="save-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p className="editable-text">{content}</p>
          {hovered && (
            <button className="edit-button" onClick={() => setEditing(true)}>Edit</button>
          )}
        </>
      )}
    </div>
  );
};

export default EditableContent;