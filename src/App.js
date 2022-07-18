import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header/header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<>Missions</>} />
            <Route path="/Rockets" element={<>Rockets</>} />
            <Route path="/Profile" element={<>Profile</>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
