import React from 'react';
import logo from './logo.svg';
import './App.css';
import FaceManager from './FaceManager';

function App() {
   return (
      <div className="App">
         <div style={{ width: '500px', height: '500px' }}>
            <FaceManager />
         </div>
      </div>
   );
}

export default App;
