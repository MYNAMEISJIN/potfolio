import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill';
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import "animate.css/animate.min.css";


function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
