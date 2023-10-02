import React from 'react';

const FortnitePage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4CAF50',
  };

  const textStyle = {
    fontSize: '18px',
    textAlign: 'center',
    color: '#333',
  };

  return (
    <div style={pageStyle}>
      <h3 style={headingStyle}>Estamos en el juego de Fortnite</h3>
      <div style={textStyle}>
        <p>
          Bienvenido al mundo de Fortnite, un lugar donde la diversión y la
          emoción se encuentran en cada esquina. ¡Prepárate para la batalla y
          sé el último en pie!
        </p>
      </div>
    </div>
  );
};

export default FortnitePage;
