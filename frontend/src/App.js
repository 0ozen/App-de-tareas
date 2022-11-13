import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Edit } from './editar/Editar';
import { History } from './historial/history';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Not } from './notfound/not';
import { Ver } from './ver/ver';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ver/:id" element={<Ver/>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/history" element={<History/>} ></Route>
        <Route path="*" element={<Not/>} />
      </Routes>
    </div>
  );
}

export default App;

