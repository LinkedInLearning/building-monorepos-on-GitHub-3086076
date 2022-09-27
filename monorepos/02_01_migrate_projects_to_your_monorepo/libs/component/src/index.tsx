import React from 'react';
export const BigRedButton = () => {

   const buttonStyle = {
    color: '#fff',
    backgroundColor: 'red',
    borderRadius: '0.5em',
    border: '1em',
    padding: '1em',
    fontSize: '1.3em',
    margin: '2em auto',
    display: 'block',
   }

  return(
    <>
      <button style={buttonStyle} > <strong>Big Red Button</strong> </button>
    </>
  )
};
