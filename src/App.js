//import logo from './Us.png';
import './App.css';
import Data from './data'

function App() {
  


// Version 1.1 for github pages
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <div className='quote'>El mundo sigue girando,</div>
        <div className='quote'>pero yo sigo aquí</div>
        <div className="data">
        <Data/> 
        </div>

    </div>
  );
}

export default App;
