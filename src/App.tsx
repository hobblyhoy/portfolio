import { useEffect } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import ScrollIndicator from './Components/ScrollIndicator';
import Tech from './Components/Tech';
import Welcome from './Components/Welcome';

function App() {
   return (
      <div className="App">
         <Header />
         <Welcome />
         <AboutMe />
         <Tech />

         <ScrollIndicator />
      </div>
   );
}

export default App;
