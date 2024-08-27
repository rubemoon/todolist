
import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src="me.jpg" 
        alt="Foto ou Avatar" 
        style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
      />
      <h1>Rubens Jean Simon</h1>
      <h2>Software Engineer</h2>
      <p>
      Hello, I'm Rubens. I'm a full-stack developer with 2 years of experience. I enjoy building sites & apps. My focus is ROR.
      </p>
      <a href="https://github.com/rubemoon" target="_blank" rel="noopener noreferrer">
        My GitHub
      </a>
    </div>
  );
};

export default Sobre;