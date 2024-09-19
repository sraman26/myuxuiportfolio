import React from 'react';

const ExplainTemplate = ({ title, imageSrc, header, caption }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="image-box">
        <img src={imageSrc} alt={title} />
      </div>
      <h2>{header}</h2>
      <p>{caption}</p>
    </div>
  );
};

export default PageTemplate;
