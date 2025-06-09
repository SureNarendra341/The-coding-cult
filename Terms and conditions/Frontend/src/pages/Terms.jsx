// import React, { useState } from 'react';
// import EditableTitle from '../components/EditableTitle';
// import EditableContent from '../components/EditableContent';
// import '../styles/App.css';

// const Terms = ({ title, setTitle }) => {
//   const [content, setContent] = useState("These terms and conditions ('the Terms') govern your use of this website.");

//   return (
//     <div className="page-container terms-page">
//       <EditableTitle title={title} setTitle={setTitle} />
//       <div className="content-gap" />
//       <EditableContent content={content} setContent={setContent} />
//     </div>
//   );
// };

// export default Terms;

import React, { useState, useEffect } from 'react';
import EditableTitle from '../components/EditableTitle';
import EditableContent from '../components/EditableContent';
import '../styles/App.css';

const Terms = ({ title, setTitle }) => {
  const [content, setContent] = useState('');

  // Fetch title and content on load
  useEffect(() => {
    fetch('http://localhost:8080/api/content')
      .then(res => res.json())
      .then(data => {
        if (data.title) setTitle(data.title);
        if (data.content) setContent(data.content);
      })
      .catch(err => console.error('Error fetching content:', err));
  }, [setTitle]);

  // Save to backend when title changes
  const handleTitleSave = (newTitle) => {
    setTitle(newTitle);
    updateBackend(newTitle, content);
  };

  // Save to backend when content changes
  const handleContentSave = (newContent) => {
    setContent(newContent);
    updateBackend(title, newContent);
  };

  // Common save function
  const updateBackend = (titleToSave, contentToSave) => {
    fetch('http://localhost:8080/api/content', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleToSave,
        content: contentToSave,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save');
        return res.json();
      })
      .then(data => {
        console.log('Saved to backend:', data);
      })
      .catch(err => {
        console.error('Error saving to backend:', err);
      });
  };

  return (
    <div className="page-container terms-page">
      <EditableTitle title={title} setTitle={handleTitleSave} />
      <div className="content-gap" />
      <EditableContent content={content} setContent={handleContentSave} />
    </div>
  );
};

export default Terms;