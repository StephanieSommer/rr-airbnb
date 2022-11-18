import Main from './Templates/Main';
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className="App">
        <Main />
        <Outlet />
    </div>
  );
}

export default App;
