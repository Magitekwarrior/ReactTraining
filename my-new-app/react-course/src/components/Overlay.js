import React from 'react';

function Overlay(props) {

  return (
    <div className='backdrop' onClick={props.onCloseOverlay}>
      
    </div>
  );
}

export default Overlay;