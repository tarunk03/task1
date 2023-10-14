import './App.css';
import React, { useState } from 'react';

const WordCounter = () => {
  const [paragraph, setParagraph] = useState('');
  const words = paragraph.split(/\s+/);

  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
  };

  return (
    <div className="word-counter">
      <h1>Responsive Paragraph Word <br/>Counter</h1>
      <textarea
        value={paragraph}
        onChange={handleParagraphChange}
      />
      <p>
        Word Count: <strong>{words.length}</strong>
      </p>
    </div>
  );
};

export default WordCounter;
