import React from 'react';
import '../../../[locale]/loader.css'; // استيراد ملف CSS

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  );
};

export default Loader;
