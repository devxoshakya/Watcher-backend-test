import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const[roomCode, setRoomCode] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <div className="home">
            <h1>Watcher Backend</h1>
            <br></br>
            <form onSubmit={handleFormSubmit} className="form">
                <label>Enter Room Code</label>
                <br></br>
                <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" required placeholder="enter code " />
                <button type="submit">Join Room</button>
            </form>
        </div>
    );
}
export default HomePage;