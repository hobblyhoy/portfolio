import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Header from './Components/Fixed/Header';
import Projects from './Components/Projects/Projects';
import ScrollIndicator from './Components/Fixed/ScrollIndicator';
import Tech from './Components/Tech/Tech';
import Welcome from './Components/Welcome/Welcome';

function App() {
   return (
      <div className="App">
         <Header />

         <Welcome />
         <AboutMe />
         <Tech />
         <Experience />
         <Projects />

         <ScrollIndicator />
      </div>
   );
}

export default App;
