import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/Nav';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import HeroContextProvider from './contextapi/HeroContext';
function App() {
  return (
    <HeroContextProvider>
    <div>
    <Nav/>
    <HeroForm/>
    <div className="App" style={{background:'crimson'}}>
    <HeroList />
    </div>
    </div>
    </HeroContextProvider>
  );
}

export default App;
