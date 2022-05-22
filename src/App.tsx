import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Tech from './Components/Tech';
import Welcome from './Components/Welcome';

function App() {
   return (
      <div className="App">
         <Header />
         <Welcome />
         <AboutMe />
         {/* <Tech /> */}
      </div>
   );
}

export default App;
