import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Home/Form';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Form/>} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
