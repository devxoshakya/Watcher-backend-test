import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home'
import RoomPage from './pages/room'

function App() {
  return (
    <Routes>
    <div className="App">
     
        <Route path="/" element={<HomePage/>} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
     
    </div>
    </Routes>
  );
}

export default App;
