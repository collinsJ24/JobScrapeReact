import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Home/Form';
import Demo from './Home/Demo';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Form/>} />
      <Route path='/demo' element={<Demo/>} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
