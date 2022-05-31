import './App.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
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
         <Experience />

         {/* <ScrollIndicator /> */}
      </div>
   );
}

export default App;
